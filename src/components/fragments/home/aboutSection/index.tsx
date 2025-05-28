import ElementLine from "@/components/elements/element_line";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentAboutSection = () => {
    return (
        <>
            <section className="flex justify-center mt-10 p-2 md:p-5 intersect-once intersect:motion-preset-slide-up">
                <div className="container relative lg:flex md:justify-center transition-all duration-300 sm">
                    <div className="absolute ">
                        <ElementLine
                            title="F"
                            height="h-100"
                            heightSm=""
                            heightMd="h-80"
                            heightLg="h-90"
                        />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className=" lg:flex md:justify-between gap-13">
                        <div className="ml-10 lg:ml-0 lg:w-1/2 lg:text-right">
                            <h1
                                className={`text-2xl md:text-3xl mt-15 mr-10 ${lexend.className} transition-all duration-300`}>
                                About Me
                            </h1>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="mt-5 ml-10 lg:w-1/2 lg:h-[400px] flex items-center transition-all duration-300">
                            <div className="">
                                <p className=" md:text-lg ">
                                    Saya Fadhli Ardiansyah, seorang Web
                                    Developer dengan fokus pada pengembangan
                                    front end. Berpengalaman dalam membangun
                                    website responsif untuk perusahaan dan
                                    startup, saya selalu berkomitmen memberikan
                                    hasil yang fungsional dan efisien.
                                </p>
                                <br />
                                <p className=" md:text-lg ">
                                    Dengan pendekatan yang mengutamakan detail
                                    dan pengalaman pengguna, saya terus
                                    mengikuti perkembangan teknologi web. Saat
                                    ini saya terbuka untuk peluang kerja sama,
                                    proyek freelance, atau kolaborasi
                                    profesional lainnya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentAboutSection;
