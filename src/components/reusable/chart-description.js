import React from 'react';

/* Contains the description of a chart */

const ChartDescription = ({ chartNumber, chartInfo, axisX, axisY }) => {
    return (
        <div className="chart-container">

            <div className="axis">
                <p className="">X-Axis: {axisX} </p>
                <p className="">Y-Axis: {axisY} </p>
            </div>
            <p className="chart-version">Chart Version: {chartNumber}</p>
            <p className="chart-info">
                <i>
                    {chartInfo}
                </i>
            </p>
        </div>
    );
}


export default ChartDescription;
