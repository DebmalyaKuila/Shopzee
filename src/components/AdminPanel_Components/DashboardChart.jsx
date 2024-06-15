import React from 'react'
import { Card } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker }from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August','September','October','November','December'];

const d = new Date();
let month = d.getMonth();

const labels=months.splice(0,month+1)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: 'Yearly Analysis',
        },
    }
};

const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
        },
        {
            label: 'Revenue',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderColor: 'rgb(0, 0, 255)',
            backgroundColor: 'rgba(0, 0, 235, 0.3)',
        },
    ],
};

const DashboardChart = () => {
    return<Card ><Line style={{width:530}} options={options} data={data} /></Card> 
}

export default DashboardChart
