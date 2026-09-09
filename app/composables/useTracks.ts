import type { Track } from '~/types/track'

export const useTracks = () => {
  const data = useConferenceData()

  const tracks = computed(() => data.tracks)

  const findTrackById = (id: string | string[]): Track | undefined => {
    return tracks.value.find(track => track.id === id)
  }

  return {
    tracks,
    findTrackById,
  }
}
