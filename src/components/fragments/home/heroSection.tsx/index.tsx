// import TypeIt from "typeit-react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentHeroSection = () => {
    return (
        <>
            <section className=" h-screen flex justify-center transition-all duration-300">
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
                                className={` ${lexend.className} backdrop-blur-sm bg-white/10 border border-white/10 text-sm md:text-[15px] font-bold py-2 px-4 rounded cursor-pointer  hover:motion-preset-shake  hover:bg-white/20 duration-500 `}>
                                <i className="bi bi-envelope mr-2 " />
                                Hubungi Saya
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentHeroSection;
