import TypeIt from "typeit-react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentHeroSection = () => {
    return (
        <>
            <section className="mt-40 mb-10 md:mt-60 md:mb-50 flex justify-center transition-all duration-300">
                <div className="container relative p-2 md:p-0">
                    <div className="bg-gradient-to-l to-[#4CC9FE] from-[#eb5ceb] -z-10 blur-[150px] translate-y-[-10%] left-[15%] absolute w-[70%] h-[50%] rounded-2xlfull" />
                    <div className="text-center">
                        <h1
                            className={`${lexend.className} text-4xl md:text-5xl font-bold text-white`}>
                            Ubah Ide Bisnismu Jadi Realita
                        </h1>
                        <h2
                            className={` ${lexend.className} text-2xl md:text-3xl font-bold text-white `}>
                            Saya Fadhli Ardiansyah{" "}
                            <span className="text-[#4CC9FE]">
                                <TypeIt>
                                    Frontend Developer | Network Engineer{" "}
                                </TypeIt>
                            </span>
                        </h2>
                        <p className="mt-2 md:text-lg text-slate-200">
                            membantu brand, UMKM, dan profesional, membangun
                            solusi digital yang efektif mulai dari website,
                            landing page, hingga desain UI/UX.
                        </p>
                    </div>
                    <div className="text-center mt-5">
                        <button
                            className={` ${lexend.className} bg-[#4CC9FE] text-sm md:text-[15px] font-bold py-2 px-4 rounded cursor-pointer  hover:motion-preset-shake   `}>
                            Hubungi Saya
                        </button>
                    </div>
                </div>
            </section>
            <div className="sticky top-0 bg-black z-10 w-full h-20 md:h-19" />
        </>
    );
};

export default FragmentHeroSection;
