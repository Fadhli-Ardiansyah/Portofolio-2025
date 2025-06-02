import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="antialiased bg-black text-white scroll-auto">
                <Main />

                <NextScript />
            </body>
        </Html>
    );
}
