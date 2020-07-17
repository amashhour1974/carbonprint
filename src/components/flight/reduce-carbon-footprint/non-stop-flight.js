import React from 'react';
import Fact from '../../reusable/facts.js'
import CanvasJSReact from '../../../assets/canvasjs.react';
import ChartDescription from '../../reusable/chart-description.js';

const NonStopFlight = () => {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartVersion = "Chart 3.0"
    const chartInfo = "This Chart illustrates the carbon footprint released by One-Way Economy Class Air Flight from Madrid, Spain to Vancouver, Canada (Connecting Flight (Susceptible to increased distance) VS Direct Flight (8427 Kms)). With Connecting Flight it released around ~787Kgs of carbon whereas direct flight produces ~630Kgs (25% less) of carbon"

    const connectingOptions = {
        title: {
            // text: ""
        },
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                toolTipContent: "<strong>{indexLabel} = {y} Kgs for 8427Kms</strong>",
                legendText: "{indexLabel}",
                dataPoints: [
                    { y: "787", indexLabel: "connecting flight" },
                    { y: "630", indexLabel: "Direct Flight (25% less carbon emission)" }
                ]
            }
        ]
    }

    return (
        <div className="reduce-carbon-foot-print non-stop-flight-container">
            <h2>Go for the Nonstop Flight</h2>
            <p>
                It may cost a little extra, but flying nonstop is better for the environment. Not only does it save you valuable time by sparing you a connection, but one flight uses less energy than two. Planes use around 25% of fuel during takeoff and are much more fuel-efficient once cruising altitude is reached.
            </p>
            {/* Fact container */}
            <Fact message="Driving your family from San Francisco to Los Angeles emits fewer carbon than flying. To tip the balance further, take-off and landing use more fuel than cruising does, so shorter flights like this one end up being even less efficient than a cross-country route" />
           
            <div class="chart">
                <h2>Carbon-Emission of Direct Flights V/S Connecting FLights</h2>
                <CanvasJSChart options={connectingOptions} />
                <ChartDescription chartNumber={chartVersion} chartInfo={chartInfo} />
            </div>
        </div>
    );
}

export default NonStopFlight
