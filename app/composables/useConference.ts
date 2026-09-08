export const useConference = () => {
  const { data } = useConferenceData()

  const conference = computed(() => data.value?.conference ?? null)

  return {
    conference,
  }
}
