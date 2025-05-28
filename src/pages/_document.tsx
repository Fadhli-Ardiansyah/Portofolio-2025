import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="antialiased bg-black text-white h-[100000]">
                <Main />

                <NextScript />
            </body>
        </Html>
    );
}
