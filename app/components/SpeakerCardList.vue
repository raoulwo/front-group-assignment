<script setup lang="ts">
import type { Speaker } from '~/types/speaker'

defineProps<{
  speakers: Speaker[]
}>()
</script>

<template>
  <div class="space-y-6">
    <NuxtLink
      v-for="speaker in speakers"
      :key="speaker.id"
      :to="`/speakers/${speaker.id}`"
      class="block"
    >
      <SpeakerCard :speaker="speaker" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
