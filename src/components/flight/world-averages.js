import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import ChartDescription from '../reusable/chart-description.js'

const WorldAverages = ({ worldChartData, personAvgData }) => {
    console.log("WorldAverages -> personAvgData", personAvgData)
    console.log("WorldAverages -> worldChartData", worldChartData)

    const chartVersion = "Chart 2.0"
    const chartInfo = `Graph illustrates the Top 10 Countries with Annual Carbon footprint (in millions) emitted through travel Air flights in year 2018`

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    const options = {
        title: {
            // text: ""
        },
        axisY: {
            title: "Carbon footprint",
            includeZero: false,
            suffix: " M"
        },
        axisX: {
            title: "Country Name",
            labelAngle: 90
        },
        data: [
            {
                type: "line",
                dataPoints: personAvgData,
                showInLegend: true,
                legendText: "Carbon in Million Tonnes (Year 2018)",
            }
        ]
    }


    return (
        <div className="world-flight-averages">
            {/* chart */}
            <CanvasJSChart options={options} />
            {/* chart container */}
            <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
        </div>
    );
}

export default WorldAverages
