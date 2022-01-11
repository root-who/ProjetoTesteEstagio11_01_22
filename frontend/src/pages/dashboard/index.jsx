import React from "react";
import { useState } from "react";
import GraficoDeBarras from "../../components/GraficoDeBarras";
import Table from "../../components/Table";
import "../../assets/css/dashboard/index.css"
import Typography from "@mui/material/Typography"

const DashBoard=()=>{

    // eslint-disable-next-line no-unused-vars
    const [data, setData]= useState([
        {dia:"1", valor:"2000"},
        {dia:"2", valor:"2000"},
        {dia:"3", valor:"2000"},
        {dia:"4", valor:"2000"},
        {dia:"5", valor:"2000"},
    ])

    return(
        <>
        <div className="dashboard_container">
            <Typography variant="p" component="h2">Gráfico de vendas relacionando dias e valores</Typography>
            <GraficoDeBarras/>
            <Typography sx={{margin:"0.75rem auto"}} align="center" variant="p" component="h2">Tabela dos dias e valores</Typography>
            <div className="dashboard_tabela_container">
                <Table data={data}></Table>
            </div>
        </div>

        </>
    )
}

export default DashBoard;