export const useRooms = () => {
  const { data } = useConferenceData()

  const rooms = computed(() => data.value?.rooms ?? [])

  return {
    rooms,
  }
}
