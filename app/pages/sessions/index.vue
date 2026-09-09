<script setup lang="ts">
const {
  searchQuery,
  selectedLevel,
  selectedFormat,
  selectedTrack,
  filteredSessions,
} = useSessions()
const { tracks } = useTracks()

const levels = ['Einsteiger', 'Fortgeschritten', 'Experte']
const formats = ['Vortrag', 'Workshop', 'Podium']

const setSelectedLevel = (level: string | null) => selectedLevel.value = level
const setSelectedFormat = (format: string | null) => selectedFormat.value = format
const setSelectedTrack = (trackId: string | null) => selectedTrack.value = trackId
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />

    <div class="p-8 lg:p-16">
      <AppSearchBar
        v-model="searchQuery"
        placeholder="Suche nach Titel oder Abstract..."
      />

      <AppSearchFilter
        class="mt-3 space-x-1"
        :options="tracks.map(track => ({ value: track.id, label: track.name }))"
        @select="setSelectedTrack"
      />
      <AppSearchFilter
        class="mt-1 space-x-1"
        :options="levels"
        @select="setSelectedLevel"
      />
      <AppSearchFilter
        class="mt-1 space-x-1"
        :options="formats"
        @select="setSelectedFormat"
      />

      <SessionCardList
        :sessions="filteredSessions"
        class="mt-16"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
