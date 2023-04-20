//https://www.w3schools.com/js/js_graphics_chartjs.asp
var xValues = [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];

new Chart("analyse_chart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478, 2022],
        borderColor: "red",
        fill: false
      }, { 
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000, 6666],
        borderColor: "green",
        fill: false
      }, { 
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100, 3009],
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });