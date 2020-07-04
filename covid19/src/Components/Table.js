import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import Api from '../Api/index'


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
        <div></div>
    );
  };
  
  export default CovidTable;