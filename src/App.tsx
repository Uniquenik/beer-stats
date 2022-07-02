import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyProducts from "./pages/myProducts";
import Statictics from "./pages/statistics";
import JsonForm from "./pages/jsonForm";
import Navigation from "./layouts/navigation";
import {Box} from "@mui/material";


function App() {

    return (
        <BrowserRouter>
            <Navigation>
                <Box px={6} py={7}>
                    <Routes>
                        <Route path={'/products'} element={<MyProducts/>}/>
                        <Route path={'/'} element={<Statictics/>}/>
                        <Route path={'/form'} element={<JsonForm/>}/>
                    </Routes>
                </Box>
            </Navigation>
        </BrowserRouter>
    );
}

export default App;
