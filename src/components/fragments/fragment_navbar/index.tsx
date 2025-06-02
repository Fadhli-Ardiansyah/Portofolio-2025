import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import fdh from "../../../../public/logo/fadhli.png";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // eslint-disable-next-line prefer-const
    let menuActive = isOpen ? "left-0" : "-left-100";

    return (
        <>
            <div className="flex justify-center fixed w-full top-0  z-50 py-5 px-2 ">
                <div className="flex container justify-between  items-center ">
                    <div className="w-[70px]">
                        <Image src={fdh} alt="" />
                    </div>
                    <div
                        className={`  fixed h-full w-100 translate-y-[42%]  transition-all duration-250 ${menuActive} bg-black/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:translate-y-0  md:static  md:flex md:w-auto md:items-center md:transition-none `}>
                        <div className="px-5 pt-3 mt-5 flex items-center justify-between md:hidden transition-all duration-50">
                            <h1 className="font-bold text-2xl ">
                                Fadhli Ardiansyah
                            </h1>

                            <i
                                className="bi bi-x text-5xl md:hidden"
                                onClick={() => handleToggle()}
                            />
                        </div>
                        <ul
                            className={` block px-5 mt-5 md:ml-0 md:mt-0 md:flex md:p-3 rounded-full
                             gap-15 md:border md:border-white/10 md:bg-white/5 md:backdrop-blur-sm`}>
                            <li
                                className={` cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200`}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="  cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="  cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/project">Project</Link>
                            </li>
                            <li className="  cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/skillss">Skills</Link>
                            </li>
                            <li className="  cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <button
                            className={` ${lexend.className}text-sm hidden md:block md:text-[15px] font-bold cursor-pointer     `}>
                            <i className="bi bi-github mr-2" />
                            Github
                        </button>
                    </div>
                    <div className="md:hidden">
                        <i
                            className={` bi bi-list text-4xl transition-all eas`}
                            onClick={() => handleToggle()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FragmentNavbar;
