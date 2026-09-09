<script setup lang="ts">
type FilterOption = { label: string, value: string }

defineProps<{
  options: (string | FilterOption)[]
}>()

const emit = defineEmits<{
  select: [option: string | null]
}>()

const getLabel = (option: string | FilterOption) =>
  typeof option === 'string' ? option : option.label

const getValue = (option: string | FilterOption) =>
  typeof option === 'string' ? option : option.value
</script>

<template>
  <div>
    <UButton
      class="cursor-pointer"
      @click="emit('select', null)"
    >
      Alle
    </UButton>
    <UButton
      v-for="option in options"
      :key="getValue(option)"
      class="cursor-pointer"
      @click="emit('select', getValue(option))"
    >
      {{ getLabel(option) }}
    </UButton>
  </div>
</template>

<style scoped></style>
