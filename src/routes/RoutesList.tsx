import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { LogAndRegBase } from "../pages/LogAndRegBase";
import { LoginPage } from "../pages/LoginPage";


export function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<LogAndRegBase />}>
                <Route index element={<LoginPage />}/>
                <Route path="register"/>
            </Route>
        </Routes>
    )
}