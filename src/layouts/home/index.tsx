import FragmentAboutSection from "@/components/fragments/home/aboutSection";
import FragmentHeroSection from "@/components/fragments/home/heroSection.tsx";
import FragmentProjectSection from "@/components/fragments/home/projectSection";

const LayoutHome = () => {
    return (
        <>
            <FragmentHeroSection />
            <FragmentAboutSection />
            <FragmentProjectSection />
        </>
    );
};

export default LayoutHome;
