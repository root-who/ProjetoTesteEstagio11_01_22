import Index from "./pages/index";
import DashBoard from "./pages/dashboard";
import Header from "./components/Header";
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";

const RoutesComponent = ()=>{

const navigation = useNavigate();

    function onLogoClick(){
        navigation('/');
    }

    function onButtonClick(){
        navigation('/dashboard');
    }

        return(
            <>
            <Header onLogoClick={onLogoClick}></Header>
            <Routes>
                <Route exact path="/" element={<Index onButtonClick={onButtonClick}/>}></Route>
                <Route path="/dashboard" element={<DashBoard/>}></Route>
            </Routes>
            <Footer/>
            </>
        )
}

export default RoutesComponent