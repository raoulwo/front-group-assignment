import type { Conference } from './conference'
import type { Room } from './room'
import type { Session } from './session'
import type { Speaker } from './speaker'
import type { Track } from './track'

export interface ConferenceData {
  conference: Conference
  tracks: Track[]
  rooms: Room[]
  speakers: Speaker[]
  sessions: Session[]
}
