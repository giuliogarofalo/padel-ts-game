import { useContext } from 'react';
import RoomsContext from './RoomContext';

const roomsMap = new Map();

[...Array(10)].forEach((_, index) => {
   // The initial status of the lamps is off
  roomsMap.set(index, { isLampOn: false, lampColor: undefined });
});

export const useRoomContext = () => {
  const context = useContext(RoomsContext);

  if (!context) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }

  return context;
};