import { useNavigate } from "react-router-dom";
import { Props } from "./types";


export const LoginPage = ({ oauthSignIn }: Props) => {
    const navegate = useNavigate();

    return (
        <div>
            <button onClick={() => oauthSignIn("https://www.googleapis.com/auth/drive.metadata.readonly")}>Logar</button>
            <button
                onClick={() => {
                    navegate("/");
                }}
            >
                ir
            </button>
        </div>
    );
};
