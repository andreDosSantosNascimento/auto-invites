import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Hooks/authHook/authHook";
import { HomePage } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { SuccessfullyLoginPage } from "../Pages/SuccessfullyLogin";

export const Router = () => {
    const { oauthSignIn } = useAuth();
    return (
        <Routes>
            <Route
                path="/login"
                element={<LoginPage oauthSignIn={oauthSignIn} />}
            />
            <Route
                path="/SuccessfullyLogin"
                element={<SuccessfullyLoginPage oauthSignIn={oauthSignIn} />}
            />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
