import { BrowserRouter} from "react-router-dom";
import RoutesComponent from "./Routes";
import React from "react";


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
