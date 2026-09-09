import type { Session } from '~/types/session'

export const useSessions = () => {
  const data = useConferenceData()

  const searchQuery = ref<string>('')
  const selectedLevel = ref<string | null>(null)
  const selectedFormat = ref<string | null>(null)

  const sessions = computed(() => data.sessions)

  const filteredSessions = computed(() =>
    sessions.value.filter((session) => {
      const query = searchQuery.value.toLowerCase().trim()

      const matchesSearch = !query
        || session.title.toLowerCase().trim().includes(query)
        || session.abstract.toLowerCase().trim().includes(query)

      const matchesLevel = !selectedLevel.value || selectedLevel.value === session.level
      const matchesFormat = !selectedFormat.value || selectedFormat.value === session.format

      return matchesSearch && matchesLevel && matchesFormat
    }),
  )

  const findSessionById = (id: string | string[]): Session | undefined => {
    return sessions.value.find(session => session.id === id)
  }

  const findSessionsBySpeakerId = (speakerId: string): Session[] => {
    return sessions.value.filter(session => session.speakerIds.includes(speakerId))
  }

  return {
    searchQuery,
    selectedLevel,
    selectedFormat,
    sessions,
    filteredSessions,
    findSessionById,
    findSessionsBySpeakerId,
  }
}
