export interface Session {
  id: string
  title: string
  abstract: string
  trackId: string
  speakerIds: string[]
  day: string
  startTime: string
  endTime: string
  roomId: string
  level: 'Einsteiger' | 'Fortgeschritten' | 'Experte'
  format: 'Vortrag' | 'Workshop' | 'Podium'
}
