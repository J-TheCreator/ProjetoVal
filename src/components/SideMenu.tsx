import { ChevronDown, Eye, Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";

export default function SideMenu() {
    const [isOpenMenu, setIsMenuOpen] = useState(false);
    const [isOpenMaps, setIsMapsOpen] = useState(false);

    // Mapas com suas cores e imagens
    const maps = [
        { name: "Bind", image: "img/bind.png", color: "text-[#C4A992]/80" },
        { name: "Split", image: "img/split.png", color: "text-[#AD9186]/80" },
        { name: "Ascent", image: "img/ascent.png", color: "text-[#C97974]/80" },
        { name: "Icebox", image: "img/icebox.png", color: "text-[#6380AE]/80" },
        { name: "Breeze", image: "img/breeze.png", color: "text-[#89838E]/80" },
        { name: "Haven", image: "img/heaven.png", color: "text-[#A47770]/80" },
        { name: "Fracture", image: "img/fracture.png", color: "text-[#303735]/80" },
        { name: "Pearl", image: "img/pearl.png", color: "text-[#5F889B]/80" },
        { name: "Lotus", image: "img/lotus.png", color: "text-[#3A5535]/80" },
        { name: "Sunset", image: "img/sunset.png", color: "text-[#894446]/80" },
        { name: "Abyss", image: "img/abyss.png", color: "text-[#C1A17F]/80" },
    ];

    // Bloqueio de rolagem ao abrir o menu
    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = 'hidden';  // Bloqueia a rolagem
        } else {
            document.body.style.overflow = 'auto';  // Permite a rolagem novamente
        }
    }, [isOpenMenu]);

    return (
        <>
            {/* Open Menu Button */}
            <button onClick={() => setIsMenuOpen(true)} className="bg-[#222324] ml-8 right-28 scale-110 hover:scale-105 transition-all duration-[250] focus:outline-none border-none">
                <Menu className="rounded-sm h-10 w-auto" />
            </button>

            {/* Menu */}
            <div className={`fixed top-0 left-0 w-96 min-h-screen max-h-screen overflow-y-auto bg-white transform transition-transform duration-200 z-50 ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Close Menu/Top Menu */}
                <div className="flex justify-between items-center p-5 border-b border-black">
                    <h1 className="text-2xl font-cCode text-black">MENU</h1>
                    <button className="bg-[#0b0e22] hover:border-[1.1px] focus:outline-none" onClick={() => setIsMenuOpen(false)}><X className="focus:outline-none border-none" /></button>
                </div>

                {/* Open Maps Button */}
                <div className="mx-2">
                    <button onClick={() => setIsMapsOpen(!isOpenMaps)} className="flex h-12 w-full mt-2 items-center font-cCode focus:outline-none hover:border-white border-[1.5]">MAPS
                        <ChevronDown className={`ml-2 transition-transform duration-300 ${isOpenMaps ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Maps Menu */}
                <div className={`overflow-hidden transition-[max-height] duration-700 mx-3 my-2 ${isOpenMaps ? 'max-h-[50rem]' : 'max-h-0 py-0'}`}>
                    <ul className="flex items-start p-4 rounded-lg gap-1 mt-2 flex-col w-full bg-[#0b0e22]">
                        {maps.sort((a, b) => a.name.localeCompare(b.name)).map((map) => (
                            <li key={map.name} className="self-stretch flex mr-3 items-center justify-between">
                                <a href="#" className={`text-white text-2xl font-cCode hover:text-blue-200 hover:underline ${map.color}`}>{map.name}</a>
                                <div className='flex items-center gap-2'>
                                    <img className="h-14 w-14 object-contain" src={map.image} alt={map.name + " imagem"} />
                                    <Eye />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
