import LayoutHome from "@/layouts/home";
import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import favicon from "../../public/logo/favicons.png";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>Fadhli Ardiansyah</title>
                <link
                    rel="shortcut icon"
                    href={favicon.src}
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="Portofolio Fadhli Ardiansyah 2025"
                />
                <meta name="keywords" content="Fadhli Ardiansyah" />
            </Head>
            <LayoutHome />
        </>
    );
};

export default Home;
