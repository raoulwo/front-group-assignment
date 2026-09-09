import type { Session } from '~/types/session'

export const useSessions = () => {
  const data = useConferenceData()

  const sessions = computed(() => data.sessions)

  const findSessionsBySpeakerId = (speakerId: string): Session[] => {
    return sessions.value.filter(session => session.speakerIds.includes(speakerId))
  }

  return {
    sessions,
    findSessionsBySpeakerId,
  }
}
