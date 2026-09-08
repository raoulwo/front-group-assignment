<script setup lang="ts">
const { speakers } = useSpeakers()
const { conference } = useConference()
const { rooms } = useRooms()
const { sessions } = useSessions()
const { tracks } = useTracks()
</script>

<template>
  <div>
    <h1>Welcome to the homepage!</h1>
    <div
      v-for="speaker in speakers"
      :key="speaker.id"
    >
      {{ speaker.name }}
    </div>

    <p>{{ conference?.name ?? 'unknown' }}</p>

    <div
      v-for="room in rooms"
      :key="room.id"
    >
      {{ room.name }} {{ room.capacity }}
    </div>

    <div
      v-for="session in sessions"
      :key="session.id"
    >
      {{ session.abstract }}
    </div>

    <div
      v-for="track in tracks"
      :key="track.id"
    >
      {{ track.name }}
    </div>
  </div>
</template>

<style scoped></style>
