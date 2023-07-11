import { Link } from "react-router-dom";
import { useRoomContext } from "../context/useRoomContext";

const NavBar = () => {

    const {rooms} = useRoomContext();
    
    return(
        <ul className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
            {Object.entries(rooms).map(([key, value]) => (
                <li key={key} className="bg-slate-100 shadow-md rounded-md px-4 py-3">
                    <Link
                    to={`/room-${parseInt(key)+1}`}
                    className="text-black-200 hover:text-white transition-all duration-200"
                    >
                    Room {parseInt(key)+1} - {value.isLampOn ? 'lamp on' : 'lamp off'} {value.lampColor !== undefined ? ` - ${value.lampColor}` : null}
                    </Link>
                </li>
            ))}
        </ul>  
    )
}

export default NavBar;