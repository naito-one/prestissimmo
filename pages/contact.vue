<script setup lang="ts">
import { NewsletterModal } from '#components'

const runtimeConfig = useRuntimeConfig()
const overlay = useOverlay()

const newsletterModal = overlay.create(NewsletterModal)
</script>
<template>
  <div class="mx-auto flex flex-col gap-4 p-4 md:mt-4 md:w-3/4 lg:w-2xl">
    <UButton
      v-if="runtimeConfig.public.enableNewsletter"
      color="secondary"
      class="col-span-2"
      icon="i-material-symbols-campaign"
      :ui="{ base: 'justify-center' }"
      @click="newsletterModal.open()"
    >
      {{ $t('newsletter.modal.header') }}
    </UButton>
    <div class="rounded-xl border border-neutral-200 bg-white p-4">
      <h2 class="mb-4 text-xl font-bold">{{ $t('contact.header') }}</h2>
      <ContactForm />
    </div>
    <div class="rounded-xl border border-neutral-200 bg-white p-4">
      <h2 class="mb-4 text-xl font-bold">Impressum</h2>
      <p class="font-numbers mb-4">
        PrestissIMMO<br />
        Corinne Winkelmann Charmillot<br />
        Rue des Chênes 48M<br />
        2856 Boécourt
      </p>
      <p class="font-numbers">
        info(at)prestissimmo.ch<br />
        +41 78 711 88 04<br />
        +41 32 426 66 89<br />
      </p>
    </div>
  </div>
</template>
