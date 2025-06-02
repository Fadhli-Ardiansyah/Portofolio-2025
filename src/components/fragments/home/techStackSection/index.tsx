import ElementTechStack from "@/components/elements/element_techStack";
import Image from "next/image";
import { useEffect, useState } from "react";
import flower from "../../../../../public/img/1/flower.png";

const FragmentTechStackSection = () => {
    const [scrol, setSecrol] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setSecrol(scrollY / 1); // 1:1 rotasi dengan scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const techStack = [
        {
            id: "1",
            deskripsi: "ReactJS",
            img: "https://cdn.simpleicons.org/react",
        },
        {
            id: "2",
            deskripsi: "NextJS",
            img: "https://cdn.simpleicons.org/nextdotjs/white",
        },
        {
            id: "3",
            deskripsi: "TypeScript",
            img: "https://cdn.simpleicons.org/typescript",
        },
        {
            id: "4",
            deskripsi: "ExpressJS",
            img: "https://cdn.simpleicons.org/express/white",
        },
        {
            id: "5",
            deskripsi: "Prisma",
            img: "https://cdn.simpleicons.org/prisma/white",
        },
        {
            id: "6",
            deskripsi: "TailwindCSS",
            img: "https://cdn.simpleicons.org/tailwindcss",
        },
        {
            id: "7",
            deskripsi: "Bootstrap",
            img: "https://cdn.simpleicons.org/bootstrap",
        },
        {
            id: "8",
            deskripsi: "Figma",
            img: "https://cdn.simpleicons.org/figma",
        },
        {
            id: "9",
            deskripsi: "Git",
            img: "https://cdn.simpleicons.org/git",
        },
        {
            id: "10",
            deskripsi: "GitHub",
            img: "https://cdn.simpleicons.org/github/white",
        },
        {
            id: "11",
            deskripsi: "Vercel",
            img: "https://cdn.simpleicons.org/vercel/white",
        },
    ];

    return (
        <>
            <section className="flex justify-center px-2 mb-15">
                <div className="container flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <div className="w-[350px] h-[180px] relative bg overflow-hidden ">
                            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black" />
                            <h2 className="absolute top-33 left-32  font-mono md:text-lg z-10">
                                MY SKILLS
                            </h2>
                            <div className="absolute -top-4 -z-10">
                                <Image
                                    src={flower}
                                    alt=""
                                    className="w-[350px] h-[350px] -z-10 "
                                    style={{
                                        transform: `rotate(${scrol}deg)`,
                                        transition: "transform 0.5s linear",
                                    }}
                                />
                            </div>
                        </div>
                        <h1 className="text-center text-5xl mb-7 font-bold">
                            The Secret{" "}
                            <span className="bg-gradient-to-l to-[#eb5ceb] from-[#4CC9FE] text-transparent bg-clip-text">
                                Sauce
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 md:w-1/2">
                        {techStack.map((item) => (
                            <div key={item.id}>
                                <ElementTechStack
                                    title={item.deskripsi ?? ""}
                                    img={item.img}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentTechStackSection;
