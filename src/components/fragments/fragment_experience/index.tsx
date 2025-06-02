import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentExperience = () => {
    return (
        <>
            <section
                data-aos="fade-up"
                data-aos-duration="500"
                className="flex justify-center">
                <div
                    className={` ${lexend.className} container grid md:grid-cols-3 md:gap-30`}>
                    <div className="px-2 mb-5 md:mb-0 text-center">
                        <h2 className="text-2xl md:text-3xl ">3+</h2>
                        <p className="text-sm md:text-lg underline">
                            Years Experience{" "}
                        </p>
                    </div>
                    <div className="px-2 mb-5 md:mb-0 text-center">
                        <h2 className="text-2xl md:text-3xl ">6</h2>
                        <p className="text-sm md:text-lg underline">
                            Project Completed
                        </p>
                    </div>
                    <div className="px-2 mb-5 md:mb-0 text-center">
                        <h2 className="text-2xl md:text-3xl ">9</h2>
                        <p className="text-sm md:text-lg underline">
                            Technologies Mastered
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentExperience;
