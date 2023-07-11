import { FC } from "react";
interface LampProps {
    color: string;
    handleColorChange: (color: string) => void;
}

const Lamp: FC<LampProps> = ({color, handleColorChange}) => {
    const colorMatch: string[] | null = color.match(/-(.*?)-/);
    const stringName = colorMatch ? colorMatch[1] : '';
    return (
        <button key={color} onClick={() => handleColorChange(stringName)} className={`w-6 h-6 ${color} rounded-full`} />
    )
}

export default Lamp;