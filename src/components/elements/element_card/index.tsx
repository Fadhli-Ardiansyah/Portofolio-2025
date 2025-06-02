import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ElementCardProps = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
};

const ElementCard = (props: ElementCardProps) => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className=" mb-5 rounded-md transition-all duration-300  md:w-1/2">
                <div className="border border-white/20 p-2 rounded">
                    <div className="border border-white/30 rounded">
                        <Link href={props.link}>
                            <Image
                                className="bg-center bg-cover rounded-t"
                                src={props.image}
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="bg-white/10 border border-white/20 backdrop-blur-sm px-2 pt-2 pb-5 md:h-full">
                        <h2 className="mt-3  font-bold">{props.title}</h2>
                        <p className="text-sm md:text-[15px]">
                            {props.description}
                        </p>
                        <Link href={props.link}>
                            <button className="mt-5 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded text-sm md:text-[15px] cursor-pointer transition-all duration-300">
                                visit page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ElementCard;
