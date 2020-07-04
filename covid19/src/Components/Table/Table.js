import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import Api from '../Api/index'
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const CovidTable = () => {
    const  [rows, setRows] = useState([]);
    
    useEffect(() => {
        Api.CountriesWhereCoronavirusHasSpread().then((response) => {
            let newRows = [];
            response.table.map(data => {
                console.log(data)
                newRows.push({
                    'country': data['Country'],
                    'cases': data['Cases'],
                    'deaths': data['Deaths']
                })
            })
            setRows(newRows)
        })
      }, []);
  
    return (
        (rows.length > 0) ? (<TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Cases</TableCell>
                        <TableCell align="right">Death</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.country}>
                            <TableCell component="th" scope="row">
                                {row.country}
                            </TableCell>
                            <TableCell align="right">{row.cases}</TableCell>
                            <TableCell align="right">{row.deaths}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>) : <div>No ROWS</div>
    );
  };
  
  export default CovidTable;