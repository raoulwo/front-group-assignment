<script setup lang="ts">
const { searchQuery, filteredSessions } = useSessions()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />

    <div class="p-8 lg:p-16">
      <AppSearchBar v-model="searchQuery" />

      <SessionCardList
        :sessions="filteredSessions"
        class="mt-16"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
