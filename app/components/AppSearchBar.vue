<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <UInput
    :value="modelValue"
    :placeholder="placeholder ?? 'Suche...'"
    class="w-full"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
