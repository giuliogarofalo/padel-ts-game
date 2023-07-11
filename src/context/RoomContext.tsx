import { createContext, useState, FC, ReactNode } from 'react';
import { RoomsContextProps, RoomState } from '../const';

const RoomsContext = createContext<RoomsContextProps | undefined>(undefined);

const roomsMap = new Map();

[...Array(10)].forEach((_, index) => {
  roomsMap.set(index, { isLampOn: false, lampColor: undefined });
});

export const RoomProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<{ [key: number]: RoomState }>(Object.fromEntries(roomsMap));

  return <RoomsContext.Provider value={{ rooms, setRooms }}>{children}</RoomsContext.Provider>;
};

export default RoomsContext;
