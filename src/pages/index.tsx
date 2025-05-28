import LayoutHome from "@/layouts/home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <LayoutHome />
        </>
    );
};

export default Home;
