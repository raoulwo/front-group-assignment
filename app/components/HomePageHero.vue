<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import type { Conference } from '~/types/conference'

defineProps<{
  conference: Conference
}>()

const links = ref<ButtonProps[]>([
  {
    label: 'Zu meinem Programm',
    to: '/program',
    icon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageHero
    headline="Neue Konferenz"
    :title="conference.name"
    :description="conference.tagline"
    :links="links"
  />
</template>

<style scoped></style>
