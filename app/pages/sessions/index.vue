<script setup lang="ts">
const { sessions } = useSessions()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />
    <SessionCardList
      :sessions="sessions"
      class="p-8 lg:p-16"
    />
  </UContainer>
</template>

<style scoped></style>
