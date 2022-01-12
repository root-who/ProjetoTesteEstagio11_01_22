import React from "react";
import Typography from "@mui/material/Typography"
import "../../assets/css/home/index.css"
import { Button } from "@mui/material";
import API_URL from '../../util/api'
import {useEffect} from "react";
import axios from 'axios';


const Index = ({onButtonClick}) =>{

    async function requestData(){
        console.log("aqui")
         axios({
            url: API_URL +"/faturamento/todos",
            method: "POST"
            }
        ).then((response)=>{
            localStorage.set("data", JSON.stringify(response.data));
        }).catch((error)=>{

        })
    }

    useEffect(()=>{
        if(localStorage.getItem("data") === null){
            requestData();  
            console.log(localStorage.getItem("data"))   
        }else console.log(localStorage.getItem("data"))    
        
    }, []);

    return(
        <>
        <div className="container_index">
            <Typography variant="h2" component="h1">Sobre o projeto:</Typography>
            <Typography variant="p" component="h5">
                O projeto consiste em uma relação de dias e valores, que serão representados em um gráfico e uma tabela, desenvolvidos em React.js no frontend e Java no Backend, utilizando também Postegree como Banco de Dados, Netlify no Host da aplicação e Heroku para a API.
            </Typography>
            <Button onClick={onButtonClick} sx={{margin: "3rem 0 3rem 0"}} variant="contained">Ir para o DashBoard</Button>
        </div>
        </>
    )
}

export default Index;