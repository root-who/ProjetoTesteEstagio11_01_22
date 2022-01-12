import React from "react";
import { useState } from "react";
import GraficoDeBarras from "../../components/GraficoDeBarras";
import Table from "../../components/Table";
import "../../assets/css/dashboard/index.css"
import Typography from "@mui/material/Typography"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import API_URL from '../../util/api'
import {useEffect} from "react";
import axios from 'axios';

const DashBoard=()=>{

    const [data, setData]= useState([{}])
    const [dataSeted, setDataSeted] = useState(true);
    const [DadosGrafico, setDadosGrafico] = useState({
                                labels: {
                                        categories:[]
                                        },
                                series: [
                                            { 
                                            name: "Faturamento do dia",
                                            data : []
                                            }
                                        ]
                                })


    function setGrafico(){
            const datas = JSON.parse(localStorage.getItem('data'));
            const myCategories = datas.map(x => x.dia);
            const myData = datas.map(x => x.valor);
            setDadosGrafico({
                        labels: {
                            categories: myCategories
                        },
                        series:[
                            {
                                name: "Faturamento do dia",
                                data: myData
                            }
                        ]
                    })
    }

    async function requestData(){
         axios({
            url: API_URL +"/faturamento/todos",
            method: "POST"
            }
        ).then((response)=>{
            console.log(response.data)
            localStorage.setItem('data', JSON.stringify(response.data));
            setData(response.data);
            setDataSeted(false);
        }).catch((error)=>{

        })
    }
    function spin(){
        if(DadosGrafico.labels.categories.length === 0){
            return (
                <>
                    <Box sx={{ display: 'flex', justifyContent:"center", margin:"13rem 0 14.5rem 0"}}>
                        <CircularProgress />
                    </Box>
                </>
            )
        }
        else{
            return(
                <>
                    <Typography variant="p" component="h2">Gráfico de vendas relacionando dias e valores</Typography>
                    <GraficoDeBarras DadosGrafico={DadosGrafico}/>
                    <Typography sx={{margin:"0.75rem auto"}} align="center" variant="p" component="h2">Tabela dos dias e valores</Typography>
                    <div className="dashboard_tabela_container">
                        <Table data={data}></Table>
                    </div>
                </>
            )
        }

        
    }
                

    useEffect(()=>{
        if(localStorage.getItem('data') === null){
            requestData();
        }else if(dataSeted){
            setGrafico();
            setData(JSON.parse(localStorage.getItem('data')));
            setDataSeted(false);
        }
    }, [data, dataSeted]);

    return(
        <>
        <div className="dashboard_container">
            {spin()}
        </div>

        </>
    )
}

export default DashBoard;