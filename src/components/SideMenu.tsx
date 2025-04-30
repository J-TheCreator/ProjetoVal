import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function SideMenu() {

    const [isOpenMenu, setIsMenuOpen] = useState(false);
    const [isOpenMaps, setIsMapsOpen] = useState(false);

    const maps = ["Bind", "Haven", "Split", "Ascent", "Icebox", "Breeze", "Fracture", "Pearl", "Lotus", "Sunset", "Abyss"]

    return (
        <>
            {/* Menu Button  */}
            <a href="#" className=''>
                <button onClick={() => setIsMenuOpen(true)} className="ml-8 right-28 scale-110 hover:scale-105 transition-all duration-400 focus:outline-none border-none">
                    <Menu className="text-[#435680] h-10 w-auto" />
                </button>
            </a>

            {/* Menu */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg border-r transform transition-transform duration-300 ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-5 border-b border-black ">
                    <h1 className="text-2xl font-cCode text-black">MENU</h1>
                    <button className="bg-[#435680]" onClick={() => setIsMenuOpen(false)}><X /></button>
                </div>

                {/* Open botão maps */}
                <button onClick={() => setIsMapsOpen(!isOpenMaps)} className="font-cCode">MAPS</button>
                
                {/* All Maps Menu */}
                <div className={`fixed top-0 left-0 bg-sky-900 w-44 flex flex-col items-center mt-36 text-black font-cCode transform transition-transform duration-300 ${isOpenMaps ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex gap-1 mt-2 flex-col">
                        {maps.map((maps) => (
                            <li key={maps} className="text-[#0b0e22] text-2xl ml-4"><a href="#">{maps}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

