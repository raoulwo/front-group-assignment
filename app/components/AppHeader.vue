<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Mein Programm',
    to: '/program',
    active: route.path.startsWith('/program'),
  },
  {
    label: 'Sprecher*innen',
    to: '/speakers',
    active: route.path.startsWith('/speakers'),
  },
  {
    label: 'Räume',
    to: '/rooms',
    active: route.path.startsWith('/rooms'),
  },
  {
    label: 'Lernpfade',
    to: '/tracks',
    active: route.path.startsWith('/tracks'),
  },
  {
    label: 'Sessions',
    to: '/sessions',
    active: route.path.startsWith('/sessions'),
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/raoulwo/front-group-assignment"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>

<style scoped></style>
