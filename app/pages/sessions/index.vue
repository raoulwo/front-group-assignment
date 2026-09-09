<script setup lang="ts">
const {
  searchQuery,
  selectedLevel,
  selectedFormat,
  selectedTrack,
  selectedDate,
  allDates,
  filteredSessions,
} = useSessions()
const { tracks } = useTracks()

const levels = ['Einsteiger', 'Fortgeschritten', 'Experte']
const formats = ['Vortrag', 'Workshop', 'Podium']
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
        v-model="selectedTrack"
        class="mt-3 space-x-1"
        :options="tracks.map(track => ({ value: track.id, label: track.name }))"
      />
      <AppSearchFilter
        v-model="selectedLevel"
        class="mt-1 space-x-1"
        :options="levels"
      />
      <AppSearchFilter
        v-model="selectedFormat"
        class="mt-1 space-x-1"
        :options="formats"
      />
      <AppSearchFilter
        v-model="selectedDate"
        class="mt-1 space-x-1"
        :options="allDates"
      />

      <SessionCardList
        :sessions="filteredSessions"
        class="mt-16"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
