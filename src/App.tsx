import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './components/Room';
import NavBar from './components/NavBar';
import { RoomProvider } from './context/RoomContext';
import { FC } from 'react';

const rooms = Array.from({ length: 10 }, (_, index) => index);

const App: FC = () => {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
    <Router>
      <RoomProvider>
        <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
          <NavBar />
        </div>
        <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
          <Routes>
            {rooms.map(room => (
                <Route key={room} path={`/room-${room+1}`} element={<Room roomNumber={room} />} />
            ))}
          </Routes>
        </div>
      </RoomProvider>

    </Router>
     </div>
  );
}

export default App;