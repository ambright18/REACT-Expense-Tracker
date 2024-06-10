
import Chart from 'react-apexcharts';



const options = {
    labels: ["Income", "Expense"],
    colors : ["#00ff00","#FF0000"],
    chart: {
        width: "50px",
    },
    states:{
        hover:{
            filter:{
                type: "none",
            },
        },
    },
    legend:{
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover:{mode: null},
    plotOptions :{
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#00ff00","#FF0000"],
    },
    tooltip:{
        enabled: true,
        theme: "dark",
        style:{
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "black",
        },         
    },
};


const TransactionChartSummary = ({expense =100, income = 100}) => {

    return <Chart
    options={options}
    series={[income,expense]}
    type='pie'
    width={'100%'}
    height={'100%'}
    />
}

export default TransactionChartSummary;