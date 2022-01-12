import React from "react";
import Typography from "@mui/material/Typography"
import "../../assets/css/home/index.css"
import { Button } from "@mui/material";



const Index = ({onButtonClick}) =>{


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