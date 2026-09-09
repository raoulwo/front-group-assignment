<script setup lang="ts">
const {
  searchQuery,
  selectedLevel,
  filteredSessions,
} = useSessions()

const levels = ['Einsteiger', 'Fortgeschritten', 'Experte']

const setSelectedLevel = (level: string | null) => {
  selectedLevel.value = level
}
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />

    <div class="p-8 lg:p-16">
      <AppSearchBar v-model="searchQuery" />

      <AppSearchFilter
        class="mt-2 space-x-1"
        :options="levels"
        @select="setSelectedLevel"
      />

      <SessionCardList
        :sessions="filteredSessions"
        class="mt-16"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
