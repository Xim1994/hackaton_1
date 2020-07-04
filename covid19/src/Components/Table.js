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
    const { data, setData } = useState();  
    const rows = []
    
    useEffect(() => {
        Api.CountriesWhereCoronavirusHasSpread().then(response => {
            response.table.map(data => {
                rows.push({
                    'Country': data['Country'],
                    'Cases': data['Cases'],
                    'Deaths': data['Deaths']
                })
            })
            console.log(rows)
        })
      }, []);
  
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Cases</TableCell>
                        <TableCell align="right">Death</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.country}
                            </TableCell>
                            <TableCell align="right">{row.cases}</TableCell>
                            <TableCell align="right">{row.death}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
  };
  
  export default CovidTable;