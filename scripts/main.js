Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "MTA Monthly Subway, NYCT Bus and LIRR Ridership 2023",
      align: "center",
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://catalog.data.gov/dataset/mta-monthly-ridership-traffic-data-beginning-january-2008">data.gov</a>',
      align: "center",
    },
    xAxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      crosshair: true,
      accessibility: {
        description: "Months",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Riders",
      },
    },
    tooltip: {
      valueSuffix: " riders",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Subway",
        data: [
          88997973, 84364006, 101147710, 94267491, 104532854, 97823227, 91228642,
          94151472, 95324813, 104418785, 98545501, 97195684,
        ],
      },
      {
        name: "NYCT Bus",
        data: [
          28312599, 26621222, 31834944, 28689898, 31698626, 29098672, 27802733,
          28616725, 27842423, 29130543, 26572185, 24545828,
        ],
      },
      {
        name: "LIRR",
        data: [
          4632771, 4296380, 5235497, 4988126, 5634423, 5768267, 5517014, 5857735,
          5569954, 6032845, 5845388, 5860430,
        ],
      },
    ],
  })
  
  Highcharts.chart("container2", {
    title: {
      text: "MTA Monthly SIR and MIR Ridership 2023",
      align: "center",
    },
  
    subtitle: {
      text: 'Source: <a href="https://catalog.data.gov/dataset/mta-monthly-ridership-traffic-data-beginning-january-2008" target="_blank">data.gov</a>.',
      align: "left",
    },
  
    yAxis: {
      title: {
        text: "Number of Riders",
      },
    },
  
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
  
    plotOptions: {
      line: {
        enableMouseTracking: true,
      },
    },
  
    series: [
      {
        name: "SIR",
        data: [
          184342, 161777, 205880, 172132, 209461, 185529, 154544, 168546, 187959,
          216273, 201202, 182014,
        ],
      },
      {
        name: "MNR",
        data: [
          4474399, 3945780, 4868485, 4744572, 5351707, 5276518, 4960908, 5117147,
          4978317, 5637482, 5425451, 5360728,
        ],
      },
    ],
  
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  })
  