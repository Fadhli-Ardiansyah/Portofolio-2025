import Link from "next/link";
import { useState } from "react";
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
    let menuActive = isOpen ? "left-0" : "-left-full";

    return (
        <>
            <div className="flex justify-center fixed w-full top-0  z-50 py-5 px-2 md:p-5">
                <div className="flex container justify-between items-center ">
                    <div>
                        <h1
                            className={` ${lexend.className} font-bold text-2xl bg-gradient-to-l to-[#4CC9FE] from-[#eb5ceb] text-transparent bg-clip-text`}>
                            Fadhli Ardiansyah
                        </h1>
                    </div>
                    <div
                        className={`  fixed h-full w-100 translate-y-[45%]  transition-all duration-250 ${menuActive}  md:translate-y-0  md:static  md:flex md:w-auto md:items-center md:transition-none bg-black md:bg-transparent`}>
                        <div className="px-5 mt-5 flex items-center justify-between md:hidden transition-all duration-50">
                            <h1 className="font-bold text-2xl ">
                                Fadhli Ardiansyah
                            </h1>

                            <i
                                className="bi bi-x text-5xl md:hidden"
                                onClick={() => handleToggle()}
                            />
                        </div>
                        <ul
                            className={` ${lexend.className} block px-5 mt-5 md:ml-0 md:mt-0 md:flex gap-10 bg-black md:bg-transparent`}>
                            <li
                                className={` font-semibold cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200`}>
                                <Link href="/asd">Home</Link>
                            </li>
                            <li className="  font-semibold cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/">About</Link>
                            </li>
                            <li className="  font-semibold cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/">Project</Link>
                            </li>
                            <li className="  font-semibold cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/">Skills</Link>
                            </li>
                            <li className="  font-semibold cursor-pointer mb-5 md:mb-0 text-white hover:text-slate-200">
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden ">
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
