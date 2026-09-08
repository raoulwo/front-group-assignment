<script setup lang="ts">
const route = useRoute()
const { findSpeakerById } = useSpeakers()

const speaker = findSpeakerById(route.params.id ?? '')
if (!speaker) {
  showError({
    status: 404,
    statusMessage: 'Sprecher*in nicht gefunden',
    fatal: true,
  })
}
</script>

<template>
  <UContainer v-if="speaker">
    <UPageHeader :title="speaker.name" />
  </UContainer>
</template>

<style scoped></style>
