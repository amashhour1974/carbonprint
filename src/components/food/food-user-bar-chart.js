import React, {} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import ChartDescription from '../reusable/chart-description.js';


export default function FoodUserBarChart({ checkAddBtn, foodList }) {

    let userCarbonArray = []
    let tempUserCarbonArray = []

    let avgCarbonArray = []
    let tempAvgCarbonArray = []

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartVersion = "Chart 1.0"
    const chartInfo = "This graph illustrates the comparison between carbon footprint generated by you vs average carbon footprint of specified food generated by world per year."


     if (checkAddBtn) {
        document.getElementById("food-user-multiple-bar-chart").style.display = "block"
        foodList.forEach(element => {
            tempUserCarbonArray.push({
                label: element.product,
                y: element.userCarbonPrint
            })
            tempAvgCarbonArray.push({
                label: element.product,
                y: element.avgCarbonPrint
            })
        });

        userCarbonArray = tempUserCarbonArray
        avgCarbonArray = tempAvgCarbonArray
        tempAvgCarbonArray = tempUserCarbonArray = []

        if (foodList.length == 0) {
            document.getElementById("food-user-multiple-bar-chart").style.display = "none"
        }

    }

    const options = {
        animationEnabled: true,
        animationDuration: 2000,
        title: {
            text: "Your Carbon Footprint vs World Average Carbon Footprint"
        },
        backgroundColor: "#fff",
        axisY: {
            title: "Carbon Footprint (Kgs)",
            padding: 220,
            titleWrap: true,
            margin: 10
        },
        axisX: {
            title: "food name",
            titleWrap: true,
            margin: 10,
            labelAngle: 0,
            interval: 1
        },
        data: [{
            type: "bar",
            showInLegend: true,
            name: "Your Carbon Footprint",
            color: "#8FAABB", // corn flower blue
            dataPoints: userCarbonArray
        },
        {
            type: "bar",
            showInLegend: true,
            name: "Average Carbon footprint of world",
            color: "#FFB6C1", //light pink
            dataPoints: avgCarbonArray
        },
        {
            type: "bar",
            showInLegend: true,
            name: "",
            color: "#B08BEB",
            dataPoints: ""
        }]
    }

    return (
        <div id="food-user-multiple-bar-chart" className="chart" style={{ display: "none" }}>
            {userCarbonArray.length >= 1 ? <CanvasJSChart options={options} /> : null} 
            {/* chart container */}
            <ChartDescription chartNumber ={chartVersion} chartInfo = {chartInfo} />
        </div>
    )
}