<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const {
  searchQuery,
  selectedLevel,
  selectedFormat,
  selectedTrack,
  selectedDate,
  selectedSpeaker,
  allDates,
  filteredSessions,
} = useSessions()

const { speakers } = useSpeakers()
const { tracks } = useTracks()

const items = computed<SelectItem[]>(() => {
  const selected = speakers.value.map(speaker => ({
    label: speaker.name,
    value: speaker.id,
  }))

  selected.unshift({ label: 'Alle Sprecher', value: 'all' })

  return selected
})

const trackOptions = computed(() =>
  tracks.value.map(track => ({
    value: track.id,
    label: track.name,
  })),
)

const resetFilters = () => {
  searchQuery.value = ''
  selectedSpeaker.value = 'all'
  selectedTrack.value = null
  selectedLevel.value = null
  selectedFormat.value = null
  selectedDate.value = null
}
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />

    <div class="p-8 lg:p-16">
      <SessionFilters
        v-model:search-query="searchQuery"
        v-model:selected-speaker="selectedSpeaker"
        v-model:selected-track="selectedTrack"
        v-model:selected-level="selectedLevel"
        v-model:selected-format="selectedFormat"
        v-model:selected-date="selectedDate"
        :speaker-items="items"
        :track-options="trackOptions"
        :dates="allDates"
        @reset="resetFilters"  
      />

      <SessionCardList
        :sessions="filteredSessions"
        class="mt-16"
      />
    </div>
  </UContainer>
</template>
