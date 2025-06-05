import LayoutContact from "@/layouts/contact";
import Head from "next/head";
import favicon from "../../../public/logo/favicons.png";

const contact = () => {
    return (
        <>
            <Head>
                <title>Fadhli Ardiansyah - Contact</title>
                <link
                    rel="shortcut icon"
                    href={favicon.src}
                    type="image/x-icon"
                />
                <meta name="description" content="Contact Fadhli Ardiansyah" />
            </Head>
            <LayoutContact />
        </>
    );
};

export default contact;
