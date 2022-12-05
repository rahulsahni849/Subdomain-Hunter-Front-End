import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import DataTable,{ defaultThemes,createTheme } from 'react-data-table-component';
import data from '../app_data/table_data';

const TableContainer=styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
`;

const InputFormContainer=styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    flex: 7;
`

const ButtonFormContainer=styled.div`
    flex:1;
    margin: 10px;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-self: center;
`


function TableComponent() {
    //Subdomain,status,Title,IP,Ports,ContentLength,screenshot,Response Time,Action
    const columns = [
        {
            name: 'Subdomain',
            selector: row => <p style={{color:'red'}}>{row.subdomain}</p>
        },
        {
            name: 'Status',
            selector: row => {
                return (<p style={{color:'blue'}}>{parseInt(row.status)}</p>)
                //return row.status
            },
            sortable:true,
        },
        {
            name: 'Title',
            selector: row => <p style={{color:'red'}}>{row.title}</p>
        },
        {
            name: 'IP',
            selector: row => <p style={{color:'red'}}>{row.ip}</p>
        },
        {
            name: 'Ports',
            selector: row => <p style={{color:'red'}}>{row.ports}</p>
        },
        {
            name: 'Content-Length',
            selector: row => <p style={{color:'red'}}>{row.content_length}</p>
        },
        {
            name: 'Screenshot',
            selector: row => <p style={{color:'red'}}>{row.screenshot}</p>
        },
        {
            name: 'Response Time',
            selector: row => <p style={{color:'red'}}>{row.response_time}</p>
        },
        {
            name: 'Action',
            selector: row => <p style={{color:'red'}}>{row.action}</p>
        }
    ];

    const customStyles = {
        table: {
            style: {
            },
        },
        tableWrapper: {
            style: {
                display: 'table',
                background:"white"
            },
        },
        headRow: {
            style: {
                color:"black",
                background:"#bad5db"
            },
        },
        headCells: {
            style: {
            },
        },
        cells: {
            style: {
            },
        },
        // contextMenu: {
        //     style: {
        //         backgroundColor: "red",
        //         fontSize: '18px',
        //         fontWeight: 400,
        //         paddingLeft: '16px',
        //         paddingRight: '8px',
        //         transform: 'translate3d(0, -100%, 0)',
        //         transitionDuration: '125ms',
        //         transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        //         willChange: 'transform',
        //     },
        //     activeStyle: {
        //         transform: 'translate3d(0, 0, 0)',
        //     },
        // },
    };

    createTheme('dark', {
        background: {
          default: 'transparent',
        },
      });
    
  return (
        <TableContainer>
            <DataTable 
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
