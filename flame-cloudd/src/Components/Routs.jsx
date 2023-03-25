import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Proxy from "../Pages/Proxy";

export default function Routs() {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route exact path="/proxyLocation" element={<Proxy />}></Route>
        </Routes>
    )
};
