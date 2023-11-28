import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
    const getChartOptions = () => {
        return {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'User active by Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        };
    };

    return (
        <div id="line-chart" className='pt-4' style={{ width: '100%' }}>
            <Chart options={getChartOptions()} series={getChartOptions().series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
