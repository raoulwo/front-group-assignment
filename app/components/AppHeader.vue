<script setup lang="ts"></script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </template>

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
