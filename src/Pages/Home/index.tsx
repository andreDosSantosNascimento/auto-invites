import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/authHook/authHook";

export const HomePage = () => {
    const {
        accessTokenCalendar,
        accessTokenSheets,
        handleSaveCalendarToken,
        handleSaveSheetsToken,
    } = useAuth();

    useEffect(() => {
 
        // eslint-disable-next-line
    }, []);

    return <></>;
};
