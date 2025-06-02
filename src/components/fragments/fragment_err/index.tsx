import { useEffect, useState } from "react";

import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const FragmentErr = () => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                setCount(count - 1);
                console.log(count);
            }, 1000);
        }
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
    });

    return (
        <>
            <section className="flex justify-center items-center h-screen">
                <div className={`${lexend.className} text-center w-full`}>
                    <h1 className="text-9xl mb-2">404</h1>
                    <h2 className="text-2xl font-bold">Coming Soon</h2>
                    <h2 className="text-xl mb-20">
                        Kembali Ke Halaman Utama {count}
                    </h2>
                    <div className="relative">
                        <div className="absolute flex justify-around w-full py-3 text-xl font-bold bg-[#eb5ceb81] rotate-3">
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                        </div>
                        <div className="flex py-3 justify-around text-xl font-bold bg-[#4cc9feb1] -rotate-3">
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                            <h1>ERROR PAGE</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FragmentErr;
