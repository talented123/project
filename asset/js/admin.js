




var xValues = ["USA", "NIGERIA", "ITALY", "ROME", "GHANA"];
var yValues = [55, 49, 20, 10, 35];
var barColors = ["red","green","brown","blue","pupple"];

new Chart("myChart", {
    type:"bar",
    data: {
        labels:xValues,
        datasets: [{
            backgroundColors: barColors,
            data: yValues
        }]
    },
    options:{}
});