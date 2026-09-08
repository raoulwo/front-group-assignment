export const useSessions = () => {
  const { data } = useConferenceData()

  const sessions = computed(() => data.value?.sessions ?? [])

  return {
    sessions,
  }
}
