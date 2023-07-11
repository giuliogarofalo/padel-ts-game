import { FC } from 'react';
import { useRoomContext } from '../context/useRoomContext';
import type { Color } from '../const';
import Lamp from './Lamp';

interface RoomProps {
  roomNumber: number;
}

const colors: string[] = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'];

const Room: FC<RoomProps> = ({ roomNumber }) => {
  const {rooms, setRooms} = useRoomContext();
  
  const roomState = rooms[roomNumber];
  const { isLampOn, lampColor } = roomState;

  const handleToggleLamp = () => {
    const updatedRooms = {
      ...rooms,
    [roomNumber]: { 
      ...roomState, 
      isLampOn: !isLampOn,
      lampColor: isLampOn ? undefined : lampColor,
    }};
    setRooms(updatedRooms);
  };

  const handleColorChange = (color: string) => {
    const updatedRooms = {
      ...rooms,
        [roomNumber]: { ...roomState, lampColor: color as Color },
    };
    setRooms(updatedRooms);
  };

  const roomStyle = isLampOn ? 'bg-gray-800' : 'bg-gray-100';

  return (
      <div className={`h-screen flex justify-center items-center wh-100 ${roomStyle}`}>
        {/* When the light is `on` the room in the background must be dark, otherwise the background must be a light color */}
        <div className="p-4 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Room {roomNumber + 1}</h1>
          <button onClick={handleToggleLamp} className="px-4 py-2 bg-blue-500 text-white rounded">
            {isLampOn ? 'Turn Off' : 'Turn On'}
          </button>
            <div className={`mt-4 w-20 h-20 rounded-full mx-auto bg-${lampColor}-500`} data-testid="lamp" />   
            <div className="mt-4 flex justify-center space-x-2">  
                {/* hen a lamp is `on` the lamp light can switch among the following colors: light-blue, red, yellow and green */}
                {isLampOn && colors.map((color)=> <Lamp key={color} handleColorChange={handleColorChange} color={color}  /> )}   
            </div>
        </div> 
        
      </div>
  );
};

export default Room;
