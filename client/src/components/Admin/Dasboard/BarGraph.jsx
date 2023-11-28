import React from 'react';
import Chart from 'react-apexcharts';

const BarGraph = () => {
    const getChartOptions = () => {
        return {
            series: [{
                name: "Sales",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
            }],
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded"
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            }
        };
    };

    return (
        <div id="bar-graph" style={{ width: '100%' }}>
            <Chart options={getChartOptions()} series={getChartOptions().series} type="bar" height={350} />
        </div>
    );
};

export default BarGraph;
