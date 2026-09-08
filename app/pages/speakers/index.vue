<script setup lang="ts">
const { speakers } = useSpeakers()
</script>

<template>
  <UContainer>
    <UPageHeader title="Sprecher*innen" />
    <div class="p-8 lg:p-16 space-y-6">
      <NuxtLink
        v-for="speaker in speakers"
        :key="speaker.id"
        :to="`/speakers/${speaker.id}`"
        class="block"
      >
        <SpeakerCard :speaker="speaker" />
      </NuxtLink>
    </div>
  </UContainer>
</template>

<style scoped></style>
