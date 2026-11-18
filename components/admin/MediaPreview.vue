<script setup lang="ts">
withDefaults(
  defineProps<{
    pathname: string
    controls?: boolean
  }>(),
  { controls: true },
)
const { t } = useI18n()
const mediaUrl = useMediaUrl()

const isVideo = ref(false)
</script>

<template>
  <div
    class="relative h-0 overflow-hidden rounded-md bg-cover bg-center pb-[100%]"
    :style="`background-image: url(${mediaUrl(pathname)})`"
    :aria-label="t('admin.generic.media')"
    aria-roledescription="img"
  >
    <video
      muted
      loop
      :controls="controls"
      :class="`absolute h-full w-full object-cover object-center transition-opacity duration-500 ${isVideo ? '' : 'pointer-events-none opacity-0'}`"
      :key="pathname"
      @loadeddata="isVideo = true"
    >
      <source :src="mediaUrl(pathname)" />
    </video>
  </div>
</template>
