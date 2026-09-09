<script setup lang="ts">
const { speakers } = useSpeakers()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sprecher*innen" />
    <SpeakerCardList
      :speakers="speakers"
      class="p-8 lg:p-16"
    />
  </UContainer>
</template>

<style scoped></style>
