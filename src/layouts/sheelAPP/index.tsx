import { useRouter } from "next/router";
import FragmentNavbar from "@/components/fragments/fragment_navbar";
import FragmentFooter from "@/components/fragments/fragment_footer";

type ShellAppProps = {
    children: React.ReactNode;
};
const disableComponent = ["/_error"];

const LayoutSheelApp = (props: ShellAppProps) => {
    const { children } = props;
    const pathname = useRouter().pathname;

    return (
        <>
            {!disableComponent.includes(pathname) && <FragmentNavbar />}
            {children}
            {!disableComponent.includes(pathname) && <FragmentFooter />}
        </>
    );
};

export default LayoutSheelApp;
