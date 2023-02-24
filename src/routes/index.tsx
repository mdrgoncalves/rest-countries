import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Detail } from "../pages/Detail";

import { Home } from "../pages/Home";

export const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}