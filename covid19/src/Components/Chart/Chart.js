import Chart from "react-google-charts";
import Api from '../../Api/index'
import React, {useEffect, useState} from 'react';


const CovidChart = (props) => {
    const  [data, setdata] = useState([]);
    
    useEffect(() => {
        let newRows = [];
        Api.ReportsByCountries(props.country).then((response) => {
            newRows.push(['Number of people', 'Country'])
            newRows.push(['Deaths', response.report.deaths])
            newRows.push(['Cases', response.report.cases])
            setdata(newRows)
        })        
      }, []);
  
    return (
        (data.length > 0) ? (<div>
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={800}
                    height={700}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: 'Status of ' + props.country,
                        chartArea: { width: '30%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Number of people',
                        }
                    }}
                    legendToggle
                />
                </div>
        </div>) : <div>NO DATA</div>
    );
  };
  
  export default CovidChart;