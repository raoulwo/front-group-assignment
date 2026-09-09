import type { Session } from '~/types/session'

export const useSessions = () => {
  const data = useConferenceData()

  const searchQuery = ref<string>('')
  const selectedLevel = ref<string | null>(null)
  const selectedFormat = ref<string | null>(null)
  const selectedTrack = ref<string | null>(null)
  const selectedDate = ref<string | null>(null)

  const sessions = computed(() => data.sessions)

  const filteredSessions = computed(() =>
    sessions.value.filter((session) => {
      const query = searchQuery.value.toLowerCase().trim()

      const matchesSearch = !query
        || session.title.toLowerCase().trim().includes(query)
        || session.abstract.toLowerCase().trim().includes(query)

      const matchesLevel = !selectedLevel.value || selectedLevel.value === session.level
      const matchesFormat = !selectedFormat.value || selectedFormat.value === session.format
      const matchesTrack = !selectedTrack.value || selectedTrack.value === session.trackId
      const matchesDate = !selectedDate.value || selectedDate.value === session.day

      return matchesSearch && matchesLevel && matchesFormat && matchesTrack && matchesDate
    }),
  )

  const allDates = computed(() =>
    [...new Set(sessions.value.map(session => session.day))],
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
    selectedTrack,
    selectedDate,
    allDates,
    sessions,
    filteredSessions,
    findSessionById,
    findSessionsBySpeakerId,
  }
}
