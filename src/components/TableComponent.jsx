import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import DataTable,{ defaultThemes,createTheme } from 'react-data-table-component';
import Subdomain from './table_components/Subdomain.component';


const TableContainer=styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;

`;

const StatusCodeEle=styled.div`
    color:white;
    padding: 5px;
    border-radius: 5px;
`
const IpEle=styled.div`
    color:#4C21FB;
    background-color: #ADD8E6;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
`

const PortsContainer=styled.div`
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    background-color: #9198e5;
    flex-wrap: wrap;
`

const TitleContainer=styled.div`
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

function TableComponent({data,domain}) {
    console.log(domain)
    const columns = [
        {
            name: 'Subdomain',
            grow:4,
            selector: row =>{
                // console.log(row.tech_stack_detect.slice(1,-1).split(","))
                const data = { subdomain:row.subdomain_name, cname:row.cname, tech_stack_detect:row.tech_stack_detect.slice(1,-1).split(","), content_type:row.content_type, webserver:row.webserver}
                return <Subdomain data={data} />
            }
        },
        {
            name: 'Status',
            wrap:true,
            selector: row => {
                const num = parseInt(row.status_code)
                return (<StatusCodeEle style={num<300?{backgroundColor: "#23c523"}:{backgroundColor: "#d73434"}}>{num}</StatusCodeEle>)
            },
            sortable:true,
        },
        {
            name: 'Title',
            grow:1,
            wrap:true,
            selector: row => (<TitleContainer style={{color:'black',fontSize:"16px"}}>
                {row.page_title}
            </TitleContainer>)
        },
        {
            name: 'IP',
            grow:2,
            selector: row => <IpEle><b>{row.ip}</b></IpEle>
        },
        {
            name: 'Ports',
            grow:2,
            selector: row => {
                
                return <PortsContainer>{
                    row.ports.split(",").map((item,index)=>{
                        return <IpEle style={{marginLeft:"8px"}} key={index}><b>{item}</b></IpEle>
                    })
                }</PortsContainer>
                //return row.ports
            }
        },
        {
            name: 'Content-Length',
            selector: row => <p style={{color:'black',fontSize:"16px"}}>{row.content_length}</p>
        },
        {
            name: 'Screenshot',
            grow:2,
            wrap:true,
            selector: row => <img width="150px" height="150px" src={`http://127.0.0.1:8000/${row.screenshot_path}`} />
        },
        {
            name: 'Response Time',
            selector: row => <p style={{color:'black',fontSize:"16px"}}>{parseFloat(row.response_time,3).toFixed(1)} ms</p>
        }
        // {
        //     name: 'Action',
        //     selector: row => <p style={{color:'red'}}>{row.action}</p>
        // }
    ];

    const customStyles = {
        table: {
            style: {
                // background: "linear-gradient(#e66465, #9198e5)",
                // backgroundRepeat: "no-repeat",
            },
        },
        tableWrapper: {
            style: {
                display: 'table',
                
                //margin: "15px",
            },
        },
        headRow: {
            style: {
                color:"black",
                background:"#bad5db",
                fontSize: "18px",
                fontWidth: "bold"
            },
        },
        headCells: {
            style: {
            },
        },
        cells: {
            style: {
            },
        }
    };

    createTheme('dark', {
        background: {
          default: 'transparent',
        },
      });
    
  return (
        <TableContainer>
            <DataTable 
                fixedHeader
                columns={columns} 
                data={data}
                customStyles={customStyles}
                theme="dark"
                selectableRows
                
                // fixedHeader
                // fixedHeaderScrollHeight="300px"
                />
        </TableContainer>
  );
}

export default TableComponent;
