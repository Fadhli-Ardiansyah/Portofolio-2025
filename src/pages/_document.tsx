import { Html, Head, Main, NextScript } from "next/document";
import favicon from "../../public/logo/favicons.png";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="shortcut icon"
                    href={favicon.src}
                    type="image/x-icon"
                />
            </Head>
            <body className="bg-black text-white scroll-auto">
                <Main />

                <NextScript />
            </body>
        </Html>
    );
}
