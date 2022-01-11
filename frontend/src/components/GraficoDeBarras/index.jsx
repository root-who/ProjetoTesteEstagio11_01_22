//import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const BarChart = () =>{
    
    // eslint-disable-next-line no-unused-vars
    const [DadosGrafico, setDadosGrafico] = useState()

    useEffect(()=>{
        
    }, []);

    
    const options = {
        plotOptions:{
            bar: {
                horizontal: false
            }
        }
    }

    function spin(){
        if(DadosGrafico.labels.categories.length === 0 ){
            return( 
                <Box sx={{ display: 'flex', ml: "15%", mt: "10%"}}>
                    <CircularProgress />
                </Box>
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

export default BarChart;