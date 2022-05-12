import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Assets from "./Pages/Assets";


export default function Adresses() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Home />} />
                <Route path="/assets" element={<Assets />} />
            </Routes>
        </BrowserRouter>
    )
    
}