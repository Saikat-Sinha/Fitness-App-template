$(function () {
    Highcharts.chart('charted', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            allowDecimals: true,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value ;
                }
            }
        },
        tooltip: {
            pointFormat: 'Average {series.name} produced <b>{point.y:,.0f}</b><br/> on day {point.x}'
        },
        exporting: { enabled: false },
        credits: {
      enabled: false
  },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
          showInLegend: false,
            name: 'Heartbeat',
            data: [69,
73, 77, 58, 73, 65, 74, 76, 72, 78, 71, 74, 67, 64, 78, 73, 67, 66, 64, 71, 72, 86, 72, 68, 70, 82, 84, 68, 71, 77, 78
]
        }]
    });
});
