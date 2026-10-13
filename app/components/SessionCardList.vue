<script setup lang="ts">
import type { Session } from '~/types/session'

defineProps<{
  sessions: Session[]
}>()
</script>

<template>
  <div class="space-y-6">
    <template v-if="sessions.length > 0">
      <NuxtLink
        v-for="session in sessions"
        :key="session.id"
        :to="`/sessions/${session.id}`"
        class="block"
      >
        <SessionCard :session="session" />
      </NuxtLink>
    </template>

    <BaseEmptyState v-else />
  </div>
</template>