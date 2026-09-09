import type { Session } from '~/types/session'

export const useSessions = () => {
  const data = useConferenceData()

  const searchQuery = ref<string>('')

  const sessions = computed(() => data.sessions)

  const filteredSessions = computed(() => {
    const query = searchQuery.value.toLowerCase().trim()
    if (!query) {
      return sessions.value
    }

    const filtered = sessions.value.filter(session =>
      session.title.toLowerCase().trim().includes(query)
      || session.abstract.toLowerCase().trim().includes(query),
    )

    return filtered
  })

  const findSessionById = (id: string | string[]): Session | undefined => {
    return sessions.value.find(session => session.id === id)
  }

  const findSessionsBySpeakerId = (speakerId: string): Session[] => {
    return sessions.value.filter(session => session.speakerIds.includes(speakerId))
  }

  return {
    searchQuery,
    sessions,
    filteredSessions,
    findSessionById,
    findSessionsBySpeakerId,
  }
}
