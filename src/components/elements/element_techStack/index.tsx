/* eslint-disable @next/next/no-img-element */
type ElementTechStackProps = {
    title: string;
    img: string;
};

const ElementTechStack = (props: ElementTechStackProps) => {
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="500">
                <button className="flex items-center py-1.5 px-6 border border-white/20 bg-white/10 rounded-full">
                    <div className="w-[20px] h-[20px] mr-2">
                        <img src={props.img} alt="" />
                    </div>
                    <p className="text-sm">{props.title}</p>
                </button>
            </div>
        </>
    );
};

export default ElementTechStack;
