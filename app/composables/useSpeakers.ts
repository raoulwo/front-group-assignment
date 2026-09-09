import type { Speaker } from '~/types/speaker'

export const useSpeakers = () => {
  const data = useConferenceData()

  const speakers = computed(() => data.speakers)

  const findSpeakerById = (id: string | string[]): Speaker | undefined => {
    return speakers.value.find(speaker => speaker.id === id)
  }

  return {
    speakers,
    findSpeakerById,
  }
}
