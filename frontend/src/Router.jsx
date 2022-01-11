import { BrowserRouter,Routes, Route,} from "react-router-dom";
import React from "react";
import Index from "./pages/index";
import DashBoard from "./pages/dashboard";

const Router = () =>{
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Index/>}><Index/></Route>
            <Route exact path="/dashboard"  element={<DashBoard/>}><DashBoard/></Route>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default Router;
