import ElementCard from "@/components/elements/element_card";
import { Lexend } from "next/font/google";
import gnk from "../../../../../public/img/projects/gnk.png";
import xitkj from "../../../../../public/img/projects/xitkj2.png";
import ElementLine from "@/components/elements/element_line";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentProjectSection = () => {
    return (
        <>
            <section className="flex justify-center px-2 mt-40 mb-60">
                <div className="container relative">
                    <div className="absolute">
                        <ElementLine
                            title="D"
                            height="h-200 sm:h-250 md:h-120 lg:h-150 xl:h-160"
                        />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="flex  transition-all duration-300">
                        <span
                            className={`${lexend.className} ml-10 mt-15  text-2xl md:text-3xl bg-gradient-to-l transition-all duration-300`}>
                            My Top Projects
                        </span>
                    </div>
                    <div className="ml-10 mt-10 md:gap-5  md:flex">
                        {/* <div className="columns-1 md:gap-10 md:columns-2 xl:columns-4 mt-10"> */}
                        <ElementCard
                            title="Web Kelas XI TKJ 2"
                            description="by Fadhli | 2023"
                            image={xitkj}
                            link="https://xtkj-2.vercel.app/"
                        />

                        <ElementCard
                            title="PT. Griya Nawasena Konsultan"
                            description="on Progress | 2025 - 2026"
                            image={gnk}
                            link="https://pt-griya-nawasena-konsultan.vercel.app/"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentProjectSection;
