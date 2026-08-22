<script setup lang="ts">
import type { Component } from 'vue';
import { AboutFr } from '#components';
import type { AvailableLocales } from '~/consts';

const translations: Record<AvailableLocales, Component> = {
  'fr': AboutFr
}
</script>
<template>
  <component :is="translations[$i18n.locale]"></component>
</template>
