import Styles from "@/styles/animate.module.css";

const FragmentSuprise = () => {
    return (
        <>
            <section className="relative mb-30 mt-10 md:mt-40">
                <div className="bg-[#eb5ceb81] w-full py-4 md:py-7 absolute rotate-6 md:rotate-3" />
                <div className="bg-[#4cc9feb1] w-full py-2 md:py-2 overflow-hidden -rotate-6 md:-rotate-3 hidden lg:block">
                    <h2
                        className={`${Styles.animate_marquee} text-white font-bold text-sm md:text-4xl`}>
                        FADHLI ARDIANSYAH FRONTEND DEVELOPER | NETWORK ENGINEER
                    </h2>
                </div>
                <div className="bg-[#4cc9feb1] w-full py-2 md:py-2 overflow-hidden -rotate-6 md:-rotate-3 block lg:hidden">
                    <h2
                        className={`${Styles.animate_marquee} text-white font-bold text-sm md:text-4xl`}>
                        FADHLI ARDIANSYAH FRONTEND DEVELOPER
                    </h2>
                </div>
            </section>
        </>
    );
};

export default FragmentSuprise;
