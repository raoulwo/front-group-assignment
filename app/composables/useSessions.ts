export const useSessions = () => {
  const data = useConferenceData()

  const sessions = computed(() => data.sessions)

  return {
    sessions,
  }
}
