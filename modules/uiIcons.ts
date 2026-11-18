import { defineNuxtModule } from 'nuxt/kit'

// @nuxt/icon declares this hook on @nuxt/schema
// pnpm doesn't install @nuxt/schema next to @nuxt/icon, so that declaration never applies
declare module 'nuxt/schema' {
  interface NuxtHooks {
    'icon:clientBundleIcons': (icons: Set<string>) => void
  }
}

/**
 * Add the icons Nuxt UI components use to the Nuxt Icon client bundle
 *
 * Nuxt UI keeps them in app config, which the client bundle scan doesn't read.
 */
export default defineNuxtModule({
  meta: { name: 'ui-icons' },
  setup(_options, nuxt) {
    nuxt.hook('icon:clientBundleIcons', (icons) => {
      const names: string[] = Object.values(nuxt.options.appConfig.ui.icons)
      for (const name of names) {
        const match = /^i-lucide-(.+)$/.exec(name)
        if (!match) {
          throw new Error(
            `modules/uiIcons.ts only knows lucide icons, got ${name}`,
          )
        }
        icons.add(`lucide:${match[1]}`)
      }
    })
  },
})
