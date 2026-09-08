export const useSpeakers = () => {
  const data = useConferenceData()

  const speakers = computed(() => data.speakers)

  return {
    speakers,
  }
}
