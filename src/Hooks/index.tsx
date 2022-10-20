import { createContext } from "react";
import { PropsProvider } from "../Types";
import { AuthProvider
 } from "./authHook/authHook";
const providerContext = createContext({});
export const Provider = ({ children }: PropsProvider) => {
    return (
        <providerContext.Provider value={{}}>
            <AuthProvider>{children}</AuthProvider>
        </providerContext.Provider>
    );
};
