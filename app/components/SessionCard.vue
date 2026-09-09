<script setup lang="ts">
import type { Session } from '~/types/session'

const props = defineProps<{
  session: Session
}>()

const { findTrackById } = useTracks()
const { findRoomById } = useRooms()

const track = findTrackById(props.session.trackId)
const room = findRoomById(props.session.roomId)
</script>

<template>
  <UPageCard
    :ui="{ body: 'w-full' }"
    spotlight
  >
    <template #title>
      <div class="flex justify-between">
        <h1>
          {{ session.title }}
        </h1>

        <div class="flex items-center space-x-3 text-primary text-sm">
          <div
            v-if="track"
            class="flex items-center space-x-1"
          >
            <UIcon name="i-lucide-boxes" />
            <span>{{ track.name }}</span>
          </div>

          <div class="flex items-center space-x-1">
            <UIcon name="i-lucide-activity" />
            <span>{{ session.level }}</span>
          </div>

          <div class="flex items-center space-x-1">
            <UIcon name="i-lucide-book-open" />
            <span>{{ session.format }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #description>
      {{ session.abstract }}
    </template>

    <template #footer>
      <div class="text-sm flex space-x-4">
        <p class="flex items-center space-x-1">
          <UIcon name="i-lucide-calendar" />
          <span>{{ session.day }}</span>
        </p>

        <p class="flex items-center space-x-1">
          <UIcon name="i-lucide-clock" />
          <span>{{ session.startTime }}-{{ session.endTime }}</span>
        </p>

        <p
          v-if="room"
          class="flex items-center space-x-1"
        >
          <UIcon name="i-lucide-house" />
          <span>{{ room.name }}</span>
        </p>
      </div>
    </template>
  </UPageCard>
</template>

<style scoped></style>
