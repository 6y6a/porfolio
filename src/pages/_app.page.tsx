import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import { App } from "../app";

const Application = ({ Component, pageProps, router, ...rest }: AppProps) => {
    return (
        <App
            pageProps={pageProps}
            Component={Component}
            router={router}
            {...rest}
        >
            <Component {...pageProps} />
        </App>
    );
};

export default Application;
