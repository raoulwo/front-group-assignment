<script setup lang="ts">
const cards = ref([
  {
    title: 'Sprecher*innen',
    description: 'Lerne mehr über die Sprecher*innen dieser Konferenz.',
    icon: 'i-lucide-users',
    to: '/speakers',
    class: 'lg:col-span-2',
    image: {
      path: 'https://placeholdit.com/600x400/dddddd/999999',
      width: 600,
      height: 400,
    },
    orientation: 'horizontal' as const,
  },
  {
    title: 'Räume',
    description: 'Erfahre mehr zu den Räumen, in denen Sessions abgehalten werden.',
    icon: 'i-lucide-house',
    to: '/rooms',
    variant: 'soft' as const,
  },
  {
    title: 'Lernpfade',
    description: 'Erfahre mehr zu den Lernpfaden dieser Konferenz.',
    icon: 'i-lucide-boxes',
    to: '/tracks',
    variant: 'soft' as const,
  },
  {
    title: 'Sessions',
    description: 'Suche nach interessanten Vorträgen, Workshops, und Podiumsdiskussionen.',
    icon: 'i-lucide-box',
    to: '/sessions',
    class: 'lg:col-span-2',
    image: {
      path: 'https://placeholdit.com/600x400/dddddd/999999',
      width: 600,
      height: 400,
    },
    orientation: 'horizontal' as const,
    reverse: true,
  },
])
</script>

<template>
  <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    >
      <UColorModeImage
        v-if="card.image"
        :light="card.image.path"
        :dark="card.image.path"
        :width="card.image.width"
        :height="card.image.height"
        :alt="card.title"
        loading="lazy"
        class="w-full"
      />
    </UPageCard>
  </UPageGrid>
</template>

<style scoped></style>
