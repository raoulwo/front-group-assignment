<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <UInput
    :value="modelValue"
    placeholder="Suche..."
    class="w-full"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
