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
                className="mb-5 md:mb-0 rounded-md transition-all duration-300 relative">
                <div className="absolute bottom-0  right-0 w-[99%] h-[98%] bg-gradient-to-l to-[#4cc9fe] from-[#eb5ceb] blur-[5px]  -z-10" />
                <div className="">
                    <Link href={props.link}>
                        <Image
                            className="bg-center bg-cover rounded-t"
                            src={props.image}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="bg-[#1f1f1f] px-2 pt-2 pb-5 rounded-b-md">
                    <h2 className="mt-3  font-bold">{props.title}</h2>
                    <p className="text-sm md:text-[15px]">
                        {props.description}
                    </p>
                    <Link href={props.link}>
                        <button className="mt-5 px-4 py-2 bg-[#eb5ceb] font-bold rounded text-sm md:text-[15px] cursor-pointer">
                            visit page
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ElementCard;
