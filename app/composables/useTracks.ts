export const useTracks = () => {
  const data = useConferenceData()

  const tracks = computed(() => data.tracks)

  return {
    tracks,
  }
}
