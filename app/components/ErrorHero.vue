<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const emit = defineEmits(['redirect'])

const status = computed<string>(() => (props.error?.status || 500).toString())
const statusText = computed<string>(() => props.error?.statusText || 'Etwas ist schiefgegangen')
</script>

<template>
  <UPageHero
    headline="Fehler"
    :title="status"
    :description="statusText"
  >
    <template #links>
      <UButton
        icon="i-lucide-arrow-right"
        class="px-3 text-lg cursor-pointer"
        @click="emit('redirect')"
      >
        Zurück zur Startseite
      </UButton>
    </template>
  </UPageHero>
</template>

<style scoped></style>
