export const useRooms = () => {
  const data = useConferenceData()

  const rooms = computed(() => data.rooms)

  return {
    rooms,
  }
}
