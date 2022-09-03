import { AppProps as ApplicationProps } from "next/app";

export interface AppProps extends ApplicationProps {
    children: React.ReactNode;
}
