import type { Speaker } from '~/types/speaker'

export const useSpeakers = () => {
  const data = useConferenceData()

  const speakers = computed(() => data.speakers)

  const findSpeakerById = (id: string | string[]): Speaker | undefined => {
    return speakers.value.find(speaker => speaker.id === id)
  }

  const findSpeakersByIds = (ids: string[]): Speaker[] => {
    return ids
      .map(id => findSpeakerById(id))
      .filter((speaker): speaker is Speaker => speaker !== undefined)
  }

  return {
    speakers,
    findSpeakerById,
    findSpeakersByIds,
  }
}
