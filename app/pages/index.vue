<script setup lang="ts">
const { conference } = useConference()
</script>

<template>
  <UContainer>
    <HomePageHero :conference="conference" />
    <HomePageGrid class="px-8 lg:px-24 pb-32" />
  </UContainer>
</template>

<style scoped></style>
