import type { Room } from '~/types/room'

export const useRooms = () => {
  const data = useConferenceData()

  const rooms = computed(() => data.rooms)

  const findRoomById = (id: string | string[]): Room | undefined => {
    return rooms.value.find(room => room.id === id)
  }

  return {
    rooms,
    findRoomById,
  }
}
