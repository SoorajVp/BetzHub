import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
    const chartOptions = {
        series: [52.8, 26.8, 20.4],
        labels: ["Users", "Cuurent Bets", "Investments"],
        colors: ["#1C64F2", "#16BDCA", "#9061F9"],
        chart: {
            height: 420,
            type: "pie",
        },
        stroke: {
            colors: ["white"],
            lineCap: "",
        },
    };

    return (

        <Chart options={chartOptions} series={chartOptions.series} type="pie" height={420} />

    );
};

export default PieChart;
