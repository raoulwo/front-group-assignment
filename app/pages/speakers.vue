<script setup lang="ts">
const { speakers } = useSpeakers()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sprecher*innen" />
    <div class="p-8 lg:p-16 space-y-6">
      <SpeakerCard
        v-for="speaker in speakers"
        :key="speaker.id"
        :speaker="speaker"
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
