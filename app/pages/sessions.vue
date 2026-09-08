<script setup lang="ts">
const { sessions } = useSessions()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sessions" />

    <div class="p-8 lg:p-16 space-y-6">
      <NuxtLink
        v-for="session in sessions"
        :key="session.id"
        :to="`/sessions/${session.id}`"
        class="block"
      >
        <SessionCard :session="session" />
      </NuxtLink>
    </div>
  </UContainer>
</template>

<style scoped></style>
