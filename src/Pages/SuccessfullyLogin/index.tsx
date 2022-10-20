import axios from "axios";
import { Props } from "./types";

export const SuccessfullyLoginPage = ({ oauthSignIn }: Props) => {
    const token = JSON.parse(localStorage.getItem("@autoInvite/token") || "");
    const handleGetData = async (form: any) => {
        const input = form[0].value;

        const { data } = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${input}/values/A:D`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { values } = data;
        localStorage.setItem("@autoInvite/response", JSON.stringify(values));
    };

    return (
        <>
            <form
                action="#"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleGetData(e.target);
                }}
            >
                <input type="text" placeholder="Id da planilha" />
                <button type="submit">Buscar</button>
            </form>

            <button
                onClick={() =>
                    oauthSignIn("https://www.googleapis.com/auth/spreadsheets")
                }
            >
                Logar com Sheets
            </button>
        </>
    );
};
