<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()
const { findSessionById } = useSessions()
const { findSpeakersByIds } = useSpeakers()
const { findTrackById } = useTracks()
const { findRoomById } = useRooms()

const session = findSessionById(route.params.id ?? '')
if (!session) {
  throw createError({
    status: 404,
    statusMessage: 'Session nicht gefunden',
    fatal: true,
  })
}

const speakers = findSpeakersByIds(session.speakerIds)
const track = findTrackById(session.trackId)
const room = findRoomById(session.roomId)

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Sessions',
    icon: 'i-lucide-box',
    to: '/sessions',
  },
  {
    label: session.title,
    icon: 'i-lucide-link',
    to: `/sessions/${session.id}`,
  },
])
</script>

<template>
  <UContainer v-if="session">
    <UPageHeader :title="session.title" />
    <UBreadcrumb
      :items="items"
      class="mt-4"
    />

    <div class="p-8 lg:p-16">
      <div class="flex items-center justify-between">
        <h2 class="text-4xl font-bold mb-8">
          Abstract
        </h2>
        <div class="text-primary text-lg flex space-x-4 mb-4">
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

      <p>{{ session.abstract }}</p>

      <section>
        <h2 class="my-8 text-4xl font-bold">
          Details
        </h2>

        <div class="space-y-1">
          <p class="flex items-center space-x-2">
            <UIcon name="i-lucide-calendar" />
            <span>{{ session.day }}</span>
          </p>

          <p class="flex items-center space-x-2">
            <UIcon name="i-lucide-clock" />
            <span>{{ session.startTime }}-{{ session.endTime }}</span>
          </p>

          <p
            v-if="room"
            class="flex items-center space-x-2"
          >
            <UIcon name="i-lucide-house" />
            <span>{{ room.name }}</span>
          </p>
        </div>
      </section>

      <h2 class="mt-8 text-4xl font-bold">
        Sprecher*innen
      </h2>

      <SpeakerCardList
        v-if="speakers.length > 0"
        class="mt-8"
        :speakers="speakers"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
