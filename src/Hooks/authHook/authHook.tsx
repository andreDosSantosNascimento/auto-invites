import { createContext, useContext, useEffect, useState } from "react";
import { PropsProvider } from "../../Types";
import { ContextInterface } from "./types";

const authContext = createContext({} as ContextInterface);
export const AuthProvider = ({ children }: PropsProvider) => {
    const [accessTokenSheets, setAccessTokenSheets] = useState(() => {
        const token = localStorage.getItem("@autoInvite/SheetsToken");
        return token ? JSON.parse(token) : "";
    });

    const [accessTokenCalendar, setAccessTokenCalendar] = useState(() => {
        const token = localStorage.getItem("@autoInvite/CalendarToken");
        return token ? JSON.parse(token) : "";
    });

    const oauthSignIn = (scope: string) => {
        const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        const form = document.createElement("form");

        form.setAttribute("method", "GET");
        form.setAttribute("action", oauth2Endpoint);

        type Params = { [p: string]: any };

        const params: Params = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            response_type: "token",
            scope: scope,
        };

        for (let p in params) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", p);
            input.setAttribute("value", params[p]);
            form.appendChild(input);
        }

        document.body.appendChild(form);
        form.submit();
    };

    const handleSaveSheetsToken = () => {
        localStorage.setItem(
            "@autoInvite/SheetsToken",
            JSON.stringify(accessTokenSheets)
        );
    };

    const handleSaveCalendarToken = () => {
        localStorage.setItem(
            "@autoInvite/CalendarToken",
            JSON.stringify(accessTokenCalendar)
        );
    };

    const handleSetTokenCalendar = (token: string) => {
        setAccessTokenCalendar(token);
    };

    const handleSetTokenSheets = (token: string) => {
        setAccessTokenSheets(token);
    };

    useEffect(() => {
        if (accessTokenCalendar) {
            handleSaveCalendarToken();
        }
        // eslint-disable-next-line
    }, [accessTokenCalendar]);

    useEffect(() => {
        if (accessTokenSheets) {
            handleSaveSheetsToken();
        }
        // eslint-disable-next-line
    }, [accessTokenSheets]);

    return (
        <authContext.Provider
            value={{
                oauthSignIn,
                handleSaveSheetsToken,
                handleSaveCalendarToken,
                handleSetTokenCalendar,
                handleSetTokenSheets,
                accessTokenCalendar,
                accessTokenSheets,
            }}
        >
            {children}
        </authContext.Provider>
    );
};
export const useAuth = () => useContext(authContext);
