export const useTracks = () => {
  const { data } = useConferenceData()

  const tracks = computed(() => data.value?.tracks ?? [])

  return {
    tracks,
  }
}
