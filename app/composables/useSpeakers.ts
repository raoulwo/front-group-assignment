export const useSpeakers = () => {
  const { data } = useConferenceData()

  const speakers = computed(() => data.value?.speakers ?? [])

  return {
    speakers,
  }
}
