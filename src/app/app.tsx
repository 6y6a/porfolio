import { FC } from "react";
import { AppProps } from "./app.types";

export const App: FC<AppProps> = ({ children }) => {
    return <>{children}</>;
};
