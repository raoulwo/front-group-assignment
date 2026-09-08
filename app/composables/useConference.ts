export const useConference = () => {
  const data = useConferenceData()

  const conference = computed(() => data.conference)

  return {
    conference,
  }
}
