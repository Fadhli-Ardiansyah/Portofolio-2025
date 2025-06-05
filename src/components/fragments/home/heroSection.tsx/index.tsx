import { Lexend } from "next/font/google";
// import Link from "next/link";
import copy from "copy-to-clipboard";
import { useState } from "react";
import Image from "next/image";
import profile from "../../../../../public/img/1/profile.png";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentHeroSection = () => {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const [clipBoard, setclipBoard] = useState(false);
    const [clipBoardNo, setclipBoardNo] = useState(false);
    const gmail = "dilahfadhli@gmail.com";
    const no = "+62 8953 4616 0370";

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleHide = () => {
        setHide(!hide);
    };

    const handleClipboard = () => {
        copy(gmail);
        setclipBoard(!clipBoard);

        setTimeout(() => {
            setclipBoard(false);
        }, 2000);
    };

    const handleClipboardNo = () => {
        copy(no);
        setclipBoardNo(!clipBoardNo);

        setTimeout(() => {
            setclipBoardNo(false);
        }, 2000);
    };

    const handleDirectGmail = () => {
        const gmail = "dilahfadhli@gmail.com";
        window.location.href = `mailto:${gmail}`;
    };

    const openSection = open ? "bottom-30" : "-bottom-200";
    const clipboard = clipBoard ? "bi-check2-all disable" : "bi-copy";
    const clipboardNo = clipBoardNo ? "bi-check2-all disable" : "bi-copy";
    const hideSection = hide ? "bi-eye" : "bi-eye-slash";
    const hideElement = hide ? "opacity-0" : "opacity-100";

    return (
        <>
            <section className=" h-screen flex flex-col justify-center items-center transition-all duration-300 relative overflow-hidden">
                <div className="container flex items-center justify-center p-2 md:p-0 ">
                    <div className="absolute top-50 md:top-80 w-1/2 h-1/3 md:h-1/7 rounded-full bg-gradient-to-l to-[#eb5ceb] from-[#4CC9FE] blur-[200px] -z-10 motion-translate-y-loop-25 motion-duration-8000" />
                    <div className="">
                        <div className="text-center">
                            <h1
                                className={`${lexend.className} mb-5 text-4xl md:text-5xl font-bold text-white`}>
                                Ubah Ide Bisnismu Jadi Realita
                            </h1>
                            <h2
                                className={` ${lexend.className} mb-5 text-2xl md:text-3xl font-bold text-white `}>
                                Saya Fadhli Ardiansyah{" "}
                                <span className="text-[20px] md:text-text-2xl text-[#4CC9FE]">
                                    Frontend Developer | Network Engineer{" "}
                                </span>
                            </h2>
                            <p className="mt-2 md:text-lg text-slate-200">
                                membantu brand, UMKM, dan profesional, membangun
                                solusi digital yang efektif mulai dari website,
                                landing page, hingga desain UI/UX.
                            </p>
                        </div>
                        <div className="text-center  mt-5 ">
                            <button
                                onClick={() => handleOpen()}
                                className={` ${lexend.className} backdrop-blur-sm bg-white/10 border border-white/10 text-sm md:text-[15px] font-bold py-2 px-4 rounded cursor-pointer  hover:motion-preset-shake  hover:bg-white/20 duration-500 `}>
                                <i className="bi bi-envelope mr-2 " />
                                Hubungi Saya
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`${openSection} absolute w-[80%] md:w-[60%] xl:w-[45%] bg-[#23232390] backdrop-blur-sm border border-white/20 rounded p-2 transition-all duration-500`}>
                    <div className="flex justify-between items-center">
                        <i
                            onClick={() => handleHide()}
                            className={`${hideSection} bi text-xl cursor-pointer`}
                        />
                        <h1 className="text-xl text-center">Hubungi Saya</h1>
                        <i
                            onClick={() => handleOpen()}
                            className="bi bi-x text-4xl cursor-pointer"
                        />
                    </div>
                    <div className="">
                        <div className="mt-2 py-5 grid md:grid-cols-2 gap-3 border-y border-white/20">
                            <div className="mt-3 flex justify-center relative">
                                <div className="absolute flex justify-center items-center w-full h-full border border-white/20 rounded -z-10">
                                    <h1 className="text-7xl font-bold">?</h1>
                                </div>
                                <Image
                                    className={` ${hideElement} rounded shadow-sm transition-all duration-500`}
                                    src={profile}
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <div className="p-2 mt-3 h-[50px] flex  items-center border border-white/20 rounded relative">
                                    <i
                                        onClick={() => handleClipboard()}
                                        className={` ${clipboard} bi cursor-pointer mr-3`}
                                    />
                                    <p>dilahfadhli5@gmail.com</p>
                                </div>

                                <div className="p-2 mt-3 h-[50px] flex  items-center border border-white/20 rounded relative">
                                    <i
                                        onClick={() => handleClipboardNo()}
                                        className={` ${clipboardNo} bi cursor-pointer mr-3`}
                                    />
                                    <p>+62 8953 4616 0370</p>
                                </div>

                                <div
                                    onClick={() => handleDirectGmail()}
                                    className="p-2 mt-5 h-[50px] flex  items-center border border-white/20 rounded cursor-pointer hover:bg-white/5 duration-200">
                                    <i className="bi bi-envelope mr-3" />
                                    <p>email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentHeroSection;
