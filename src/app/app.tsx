import { FC } from "react";
import { AppProps } from "./app.types";
import { Layout } from "../shared";

export const App: FC<AppProps> = ({ children }) => {
    return <Layout>{children}</Layout>;
};
