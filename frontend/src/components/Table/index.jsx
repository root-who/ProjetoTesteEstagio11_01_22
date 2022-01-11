import React from "react";
import "../../assets/css/table/index.css";

const Table =({data})=>{
    return(
        <>
            <div className="table-responsive">
                    <table className="table table-striped table-sm mb-2">
                        <thead>
                            <tr>
                                <th className="table_header">Dia</th>
                                <th className="table_header">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            data.map((value, index)=>{
                                return(
                                    <tr key={index}>
                                        <td className="table_data">{value.dia}</td>
                                        <td className="table_data">{value.valor}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
        
        </>
    )


}

export default Table;