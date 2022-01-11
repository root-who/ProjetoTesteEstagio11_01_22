import { BrowserRouter} from "react-router-dom";
import RoutesComponent from "./Routes";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Router = () =>{  

    return(
        <>
        <BrowserRouter>
            <RoutesComponent/>
        </BrowserRouter>
        </>
    )
}

export default Router;
