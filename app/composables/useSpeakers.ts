export const useSpeakers = () => {
  const data = useConferenceData()

  const speakers = computed(() => data.speakers)

  const findSpeakerById = (id: string | string[]) => {
    return speakers.value.find(speaker => speaker.id === id)
  }

  return {
    speakers,
    findSpeakerById,
  }
}
