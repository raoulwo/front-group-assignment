<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Mein Programm',
    to: '/program',
    active: route.path.startsWith('/program'),
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
