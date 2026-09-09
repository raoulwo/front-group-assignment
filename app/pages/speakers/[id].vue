<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()
const { findSpeakerById } = useSpeakers()
const { findSessionsBySpeakerId } = useSessions()

const speaker = findSpeakerById(route.params.id ?? '')
if (!speaker) {
  throw createError({
    status: 404,
    statusMessage: 'Sprecher*in nicht gefunden',
    fatal: true,
  })
}

const sessions = findSessionsBySpeakerId(speaker.id)

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Sprecher*innen',
    icon: 'i-lucide-user',
    to: '/speakers',
  },
  {
    label: speaker.name,
    icon: 'i-lucide-link',
    to: `/speakers/${speaker.id}`,
  },
])
</script>

<template>
  <UContainer v-if="speaker">
    <UPageHeader :title="speaker.name" />
    <UBreadcrumb
      :items="items"
      class="mt-4"
    />

    <div class="p-8 lg:p-16">
      <div class="flex items-center justify-between">
        <h2 class="text-4xl font-bold mb-8">
          Bio
        </h2>
        <div class="text-primary text-lg flex space-x-4 mb-4">
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

      <p>{{ speaker.bio }}</p>

      <h2 class="mt-8 text-4xl font-bold mb-4">
        Sessions
      </h2>

      <SessionCardList
        v-if="sessions.length > 0"
        class="mt-8"
        :sessions="sessions"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
