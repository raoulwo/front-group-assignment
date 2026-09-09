import type { Session } from '~/types/session'

export const useSessions = () => {
  const data = useConferenceData()

  const sessions = computed(() => data.sessions)

  const findSessionById = (id: string | string[]): Session | undefined => {
    return sessions.value.find(session => session.id === id)
  }

  const findSessionsBySpeakerId = (speakerId: string): Session[] => {
    return sessions.value.filter(session => session.speakerIds.includes(speakerId))
  }

  return {
    sessions,
    findSessionById,
    findSessionsBySpeakerId,
  }
}
