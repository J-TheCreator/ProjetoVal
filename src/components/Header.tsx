import SideMenu from "./SideMenu";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-screen h-28 z-50 bg-[#ffffff] flex items-center justify-center border-b-[6px] border-[#e9f4f7] ">
            <div className="h-full w-full relative flex items-center">
                <SideMenu/>
                <a href="#" className='font-cCode ml-8 mt-3 text-[29px] text-[#0b0e22] hover:text-[#0b0e22] hover:scale-105 hover:underline transition-all duration-100'>About</a>

            </div>

            {/* Center Logo */}
            <div className="absolute flex flex-col items-center justify-center">
                <img className="h-24 w-24" src="./img/logo.png" alt="logo" />
                <p className='text-black text-2xl font-mono relative bottom-5'>Jett Tips</p>
            </div>

        </header>
    );
};
[];