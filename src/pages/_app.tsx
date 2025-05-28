import "bootstrap-icons/font/bootstrap-icons.css";
import LayoutSheelApp from "@/layouts/sheelAPP";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LayoutSheelApp>
            <Component {...pageProps} />
        </LayoutSheelApp>
    );
}
