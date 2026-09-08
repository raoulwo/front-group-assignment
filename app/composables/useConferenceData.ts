import conferenceJson from '~/data/conference-data.json'
import type { ConferenceData } from '~/types/conference-data'

const data = conferenceJson as ConferenceData

export const useConferenceData = () => {
  return data
}
