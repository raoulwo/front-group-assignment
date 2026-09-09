<script setup lang="ts">
defineProps<{
  options: string[]
}>()

const emit = defineEmits<{
  select: [option: string | null]
}>()
</script>

<template>
  <div>
    <UButton @click="emit('select', null)">
      Alle
    </UButton>
    <UButton
      v-for="option in options"
      :key="option"
      @click="emit('select', option)"
    >
      {{ option }}
    </UButton>
  </div>
</template>

<style scoped></style>
