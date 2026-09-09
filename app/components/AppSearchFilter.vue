<script setup lang="ts">
type FilterOption = { label: string, value: string }

defineProps<{
  options: (string | FilterOption)[]
}>()

const modelValue = defineModel<string | null>({ default: null })

const getLabel = (option: string | FilterOption) =>
  typeof option === 'string' ? option : option.label

const getValue = (option: string | FilterOption) =>
  typeof option === 'string' ? option : option.value
</script>

<template>
  <div>
    <UButton
      class="cursor-pointer"
      :color="modelValue === null ? 'primary' : 'neutral'"
      :variant="modelValue === null ? 'outline' : 'subtle'"
      @click="modelValue = null"
    >
      Alle
    </UButton>
    <UButton
      v-for="option in options"
      :key="getValue(option)"
      class="cursor-pointer"
      :color="modelValue === getValue(option) ? 'primary' : 'neutral'"
      :variant="modelValue === getValue(option) ? 'outline' : 'subtle'"
      @click="modelValue = getValue(option)"
    >
      {{ getLabel(option) }}
    </UButton>
  </div>
</template>

<style scoped></style>
