<script setup lang="ts">
import type { Speaker } from '~/types/speaker'

defineProps<{
  speaker: Speaker
}>()
</script>

<template>
  <UPageCard
    :ui="{ body: 'w-full' }"
    spotlight
  >
    <template #title>
      <div class="flex justify-between">
        <h1>
          {{ speaker.name }}
        </h1>

        <div class="flex items-center space-x-3 text-primary text-sm">
          <div class="flex items-center space-x-1">
            <UIcon name="i-lucide-user" />
            <span>{{ speaker.title }}</span>
          </div>

          <div class="flex items-center space-x-1">
            <UIcon name="i-lucide-briefcase" />
            <span>{{ speaker.company }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #description>
      {{ speaker.bio }}
    </template>
  </UPageCard>
</template>

<style scoped></style>
