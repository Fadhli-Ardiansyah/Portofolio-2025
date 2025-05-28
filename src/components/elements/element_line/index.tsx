type ElementLineProps = {
    title: string;
    height: string;
    heightSm: string;
    heightMd: string;
    heightLg: string;
};

const ElementLine = (props: ElementLineProps) => {
    return (
        <>
            <div className="w-[50px]">
                <div className="items-center flex flex-col ">
                    <div
                        className={`border-2 rounded-tl-2xl rounded-br-2xl w-13`}>
                        <h2 className="text-2xl/12 text-center font-bold ">
                            {props.title}
                        </h2>
                    </div>
                    {/* <div
                        className={`border w-0.5 h-100 sm:h-65 md:h-80 lg:h-90 `}
                    /> */}
                    <div
                        className={`border w-0.5  ${props.height} sm:${props.heightSm} md:${props.heightMd} lg:${props.heightLg} `}
                    />
                </div>
            </div>
        </>
    );
};

export default ElementLine;
