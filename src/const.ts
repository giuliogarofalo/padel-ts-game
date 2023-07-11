import { Dispatch, SetStateAction } from "react";

// define colors
export type Color = 'red' | 'green' | 'blue' | 'yellow' | undefined;

export interface RoomState {
  // Lamps can change their states between `on` and `off`
  isLampOn: boolean;
  lampColor: Color;
}

export interface RoomsContextProps {
  rooms: Record<number, RoomState>//{ [key: number]: RoomState };
  setRooms: Dispatch<SetStateAction<
    Record<number, RoomState>
  >>;
}