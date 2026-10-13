
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'


const searchQuery = defineModel<string>('searchQuery', { required: true })
const selectedSpeaker = defineModel<string>('selectedSpeaker', { required: true })
const selectedTrack = defineModel<string | null>('selectedTrack', { required: true })
const selectedLevel = defineModel<string | null>('selectedLevel', { required: true })
const selectedFormat = defineModel<string | null>('selectedFormat', { required: true })
const selectedDate = defineModel<string | null>('selectedDate', { required: true })

defineProps<{
  speakerItems: SelectItem[]
  trackOptions: { value: string, label: string }[]
  dates: string[]
}>()

const levels = ['Einsteiger', 'Fortgeschritten', 'Experte']
const formats = ['Vortrag', 'Workshop', 'Podium']

defineEmits<{
    reset: []
    }>()

</script>

<template>
  <div>
    <AppSearchBar
      v-model="searchQuery"
      placeholder="Suche nach Titel oder Abstract..."
    />

    <AppSelect
      v-model="selectedSpeaker"
      :items="speakerItems"
      class="mt-3"
    />

    <AppSearchFilter
      v-model="selectedTrack"
      class="mt-3 space-x-1"
      :options="trackOptions"
    />

    <AppSearchFilter
      v-model="selectedLevel"
      class="mt-1 space-x-1"
      :options="levels"
    />

    <AppSearchFilter
      v-model="selectedFormat"
      class="mt-1 space-x-1"
      :options="formats"
    />

    <AppSearchFilter
      v-model="selectedDate"
      class="mt-1 space-x-1"
      :options="dates"
    />
    
    <UButton
      class="mt-6"
      color="neutral"
      variant="outline"
      icon="i-lucide-rotate-ccw"
      @click="$emit('reset')"
      >Filter zurücksetzen
    </UButton>

  </div>
</template>



