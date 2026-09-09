<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

defineProps<{
  items: SelectItem[]
}>()

const modelValue = defineModel<string>({ default: 'all' })
</script>

<template>
  <USelect
    v-model="modelValue"
    :items="items"
    :default-value="modelValue"
    class="w-full"
  />
</template>

<style scoped></style>
