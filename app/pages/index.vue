<script setup lang="ts">
const { conference } = useConference()
</script>

<template>
  <UContainer>
    <HomePageHero :conference="conference" />
  </UContainer>
</template>

<style scoped></style>
