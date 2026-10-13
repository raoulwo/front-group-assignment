<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Keine Ergebnisse gefunden',
  description: 'Versuche, deine Suchanfrage oder Filter anzupassen.',
})
</script>

<template>
  <div class="py-12 text-center">
    <h3 class="text-lg font-semibold">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-muted">
      {{ description }}
    </p>
  </div>
</template>