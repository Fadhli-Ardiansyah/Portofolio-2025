import Image from "next/image";
import Link from "next/link";
import instagram from "../../../../public/icons/instagram.svg";
import github from "../../../../public/icons/github.svg";
import facebook from "../../../../public/icons/facebook.svg";
import linked from "../../../../public/icons/linked.svg";

const FragmentFooter = () => {
    return (
        <>
            <div className=" bg-[#111827] text-white ">
                <div className=" flex justify-center pt-15 pb-15 ">
                    <div className=" container md:flex px-5">
                        <div className="w-full  md:w-1/2 ">
                            <h2 className="text-white font-bold text-2xl mb-4">
                                Fadhli Ardiansyah
                            </h2>
                            <p className="text-slate-200">
                                Bantu Bisnismu Tampil Lebih Profesional dan
                                Digital Siap Pakai
                            </p>
                            <div className="hidden lg:flex  mt-4  ">
                                <Link
                                    href="/"
                                    className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                    <Image src={instagram} alt="" />
                                </Link>
                                <Link
                                    href="/"
                                    className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                    <Image src={facebook} alt="" />
                                </Link>
                                <Link
                                    href="/"
                                    className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                    <Image src={github} alt="" />
                                </Link>
                                <Link
                                    href="/"
                                    className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                    <Image src={linked} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:flex md:justify-center md:w-xs ">
                            <div className="">
                                <h2 className="font-bold text-2xl mb-4 mt-5 lg:mt-0">
                                    Links
                                </h2>
                                <ul>
                                    <li className="mb-2 text-slate-200">
                                        <Link href="/">Beranda</Link>
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        <Link href="/">About</Link>
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        <Link href="/">Skills</Link>
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        <Link href="/">Project</Link>
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        <Link href="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:flex md:justify-center md:w-xs">
                            <div className="">
                                <h2 className="font-bold text-2xl mb-4 mt-5 lg:mt-0">
                                    Contact
                                </h2>
                                <ul>
                                    <li className="mb-2 text-slate-200">
                                        Indonesia | Jakarta
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        FadhliArdiansyah@gmail.com
                                    </li>
                                    <li className="mb-2 text-slate-200">
                                        +628123456789
                                    </li>
                                </ul>
                                <div className="flex lg:hidden  mt-5  ">
                                    <Link
                                        href="/"
                                        className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                        <Image src={instagram} alt="" />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                        <Image src={facebook} alt="" />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                        <Image src={github} alt="" />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-9 h-9 bg-white rounded-full mr-3 p-2 hover:scale-115 duration-300">
                                        <Image src={linked} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" border-t-stone-600 ">
                    <h2 className="text-center border-t-1 p-3">
                        © 2025 Portfolio Saya. Hak Cipta Dilindungi.
                    </h2>
                </div>
            </div>
        </>
    );
};

export default FragmentFooter;
