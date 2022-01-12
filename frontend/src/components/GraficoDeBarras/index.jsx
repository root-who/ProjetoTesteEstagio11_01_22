//import axios from 'axios';
//import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';




const GraficoDeBarras = ({DadosGrafico}) =>{
    
    
    // eslint-disable-next-line no-unused-vars
    
    
    const options = {
        plotOptions:{
            bar: {
                horizontal: false
            }
        }
    }

    function spin(){
    
            return( 
<>
            <Chart
                options={{...options, xaxis: DadosGrafico.labels}}
                series={DadosGrafico.series}
                type="line"
                height="240"
            />
            </>
        )
    }
    
    return (
        spin()
    )
}

export default GraficoDeBarras;