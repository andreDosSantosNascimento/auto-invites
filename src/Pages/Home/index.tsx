import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/authHook/authHook";
import { Container } from "./style";

export const HomePage = () => {
    const [sheet, setSheet] = useState([]);
    const [events, setEvents] = useState<any>([]);
    const sheetsScope = "https://www.googleapis.com/auth/spreadsheets";
    const calendarScope = "https://www.googleapis.com/auth/calendar";
    const navegate = useNavigate();

    const {
        accessTokenCalendar,
        accessTokenSheets,
        oauthSignIn,
        handleSetTokenCalendar,
        handleSetTokenSheets,
    } = useAuth();

    let url: String[] = [];

    const handleOnSubmit = async (e: any) => {
        let values: any = [];
        const [spreadsheetId, range] = e.target;

        if (spreadsheetId.value && range.value) {
            const { data } = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId.value}/values/${range.value}`,
                {
                    headers: { Authorization: `Bearer ${accessTokenSheets}` },
                }
            );
            values = data.values;
            if (values) {
                setSheet(values);
            }
        }
    };

    const handleInsertEvent = async (body: any, index: number) => {
        const { calendarId, ...rest } = body;
        const response = await axios.post(
            `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
            { ...rest },
            {
                headers: {
                    Authorization: `Bearer ${accessTokenCalendar}`,
                },
            }
        );
        if (response.status === 200) {
            events.splice(index, 1);
            setEvents([...events]);    
        }
    };

    useEffect(() => {
        if (sheet) {
            const handleEvent = sheet.map((currentElement, index) => {
                const [
                    titulo,
                    dia,
                    horaComeco,
                    horaFim,
                    donoEmail,
                    aplicadorName,
                    aplicadorEmail,
                    convidadoName,
                    convidadoEmail,
                    description,
                ] = currentElement;

                let body = {};

                if (index) {
                    body = {
                        calendarId: donoEmail,
                        summary: `${titulo} - ${convidadoName}`,
                        location: "",
                        description: `Aplicador: ${aplicadorName}\n${description}`,
                        start: {
                            dateTime: `${dia}T${horaComeco}-03:00`,
                            timeZone: "America/Sao_Paulo",
                        },
                        end: {
                            dateTime: `${dia}T${horaFim}-03:00`,
                            timeZone: "America/Sao_Paulo",
                        },
                        recurrence: [],
                        attendees: [
                            { email: aplicadorEmail },
                            { email: convidadoEmail },
                        ],
                        reminders: {
                            useDefault: false,
                            overrides: [
                                { method: "email", minutes: 24 * 60 },
                                { method: "popup", minutes: 10 },
                            ],
                        },
                    };

                    return body;
                }

                return body;
            });
            handleEvent.splice(0, 1);
            setEvents(handleEvent);
        }
        // eslint-disable-next-line
    }, [sheet]);

    useEffect(() => {
        // eslint-disable-next-line
        url = window.location.href.replaceAll("&", "/").split("/");

        if (url.length > 4) {
            const scope = url[url.length - 1];
            let token =
                url
                    .find((current) => current.includes("#access_token="))
                    ?.replace("#access_token=", "") || "";

            if (scope === "calendar") {
                handleSetTokenCalendar(token);
                navegate("/");
            } else {
                handleSetTokenSheets(token);
                navegate("/");
            }
        }

        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <div className="buttons">
                <button
                    onClick={() => oauthSignIn(sheetsScope)}
                    disabled={accessTokenSheets ? true : false}
                >
                    Acesso ao Sheets
                </button>
                <button
                    onClick={() => oauthSignIn(calendarScope)}
                    disabled={accessTokenCalendar ? true : false}
                >
                    Acesso ao Calendar
                </button>
            </div>
            {accessTokenCalendar && accessTokenSheets && (
                <form
                    action="#"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleOnSubmit(e);
                    }}
                >
                    <input type="text" placeholder="Spreadsheet ID" />
                    <input type="text" placeholder="Range" />
                    <button type="submit">Buscar dados</button>
                </form>
            )}
            {sheet && (
                <ul>
                    {events.map((current: any, index: number) => {
                        return (
                            <li key={index}>
                                <h3>{current.summary}</h3>
                                <button
                                    onClick={() =>
                                        handleInsertEvent(current, index)
                                    }
                                >
                                    Criar
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </Container>
    );
};
