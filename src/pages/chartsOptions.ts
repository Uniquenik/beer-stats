import Highcharts from "highcharts";

export type ChartData = {
    name: string,
    y: number
}

export const optionsPie: Highcharts.Options = {
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    legend: {
        layout: 'vertical',
        align: "right",
        verticalAlign: 'middle'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Top 10 malt in ingredients',
        align: 'left',
        margin: 28,
        style: {fontWeight:'600', fontSize: '18px'}
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    }
};

export const optionsColumn: Highcharts.Options = {
    chart: {
        plotShadow: false,
        type: 'column'
    },
    yAxis: [{
        gridLineColor: 'transparent',
        title: {
            text: 'abv (%)'
        }
    }],
    xAxis: [{
        title: {
            text: 'Types'
        }
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Alcohol by volume',
        align: 'left',
        margin: 56,
        style: {fontWeight:'600', fontSize: '18px'}
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    }
};

export const optionsLine: Highcharts.Options = {
    chart: {
        plotShadow: false,
        type: 'line',
    },
    yAxis: [{
        visible: false
    }],
    xAxis: [{
        visible: false
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'New sort by year',
        align: 'left',
        margin: 20,
        style: {fontWeight:'600', fontSize: '18px'}
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false
            },
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    }
};