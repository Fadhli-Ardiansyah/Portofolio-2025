import FragmentExperience from "@/components/fragments/fragment_experience";
import FragmentSuprise from "@/components/fragments/fragment_suprise";
import FragmentAboutSection from "@/components/fragments/home/aboutSection";
import FragmentHeroSection from "@/components/fragments/home/heroSection.tsx";
import FragmentProjectSection from "@/components/fragments/home/projectSection";
import FragmentTechStackSection from "@/components/fragments/home/techStackSection";

const LayoutHome = () => {
    return (
        <>
            <FragmentHeroSection />
            <FragmentAboutSection />
            <FragmentProjectSection />
            <FragmentTechStackSection />
            <FragmentExperience />
            <FragmentSuprise />
        </>
    );
};

export default LayoutHome;
