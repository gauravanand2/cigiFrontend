import React,{useEffect,useState,useMemo} from 'react';
import Axios from 'axios';
import {COLUMNS} from './column';
import {useTable} from 'react-table';
function Delete(){
    
    const [stockData,setStockdata]=useState([]);
    
    const getStockData=()=>{
        
    Axios.get("https://cigi.games/api/admin/check")
    .then((res)=>{
        const alldata=res.data.result;

        setStockdata(Object.values(alldata));
       
    });
   
    }
    function DeleteRecord(event,val){
      event.preventDefault();
      const id=val.id;    
     console.log(id);
      if(window.confirm(`Are your sure you want to Delete ${val.name} !!!`)){
      Axios.delete(`https://cigi.games/api/admin/delete/:${id}`,
      {params: { id: id } }
   
    ).then((response)=>{
        getStockData();
        
    });
    }
  }

    useEffect(()=>{
        getStockData();
    
    },[]);
    const columns=useMemo(()=> COLUMNS, [])
    const data=stockData;
    const proStockData=useTable({
      columns,
      data

    })
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=proStockData
  
    return(
        <section id="delete-content" className="modify">
        <div className="container">
         
        <h3 className="page-heading text-center mb-4">DELETE</h3>
              <table {...getTableProps()} className="table table-striped">
                <thead>
                   {headerGroups.map((headerGroup)=>(
                   <tr {...headerGroup.getHeaderGroupProps()}>
                     {
                       headerGroup.headers.map((column)=>(
                          <th{...column.getHeaderProps()}>{column.render('Header')}</th> 
                       ))
                     }
                   
                 </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                     {
                       rows.map((row)=>{
                         prepareRow(row)
                         return(<tr {...row.getRowProps()} onClick={(e)=>DeleteRecord(e,row.values)}>
                         
                            {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                         </tr>
                         )
                       })}
                     
              
                </tbody>
            </table>
            </div>

  
      </section>
    );

}

export default Delete;
