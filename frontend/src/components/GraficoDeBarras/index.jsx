//import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const GraficoDeBarras = ({data}) =>{
    
    // eslint-disable-next-line no-unused-vars
    const [DadosGrafico, setDadosGrafico] = useState({
                                labels: {
                                        categories:["dia 1","dia 2","dia 3"]
                                        },
                                series: [
                                            { 
                                            name: "Total de vendas por dia",
                                            data : ["1000", "2000", "3000"]
                                            }
                                        ]
                                })

    useEffect(()=>{
                                 
    }, [DadosGrafico]);

    
    const options = {
        plotOptions:{
            bar: {
                horizontal: false
            }
        }
    }
//.categories.length
    function spin(){
    
        if(!DadosGrafico){
            return( 
                <>
                <Box sx={{ display: 'flex', ml: "15%", mt: "10%"}}>
                    <CircularProgress />
                </Box>
                </>
            )
        }
        else return (
            <Chart
                options={{...options, xaxis: DadosGrafico.labels}}
                series={DadosGrafico.series}
                type="bar"
                height="240"
            />
        )
    }
    
    return (
        spin()
    )
}

export default GraficoDeBarras;