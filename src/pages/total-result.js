import React from 'react';
import { Container } from '@material-ui/core';
import ResultChart from '../components/total-result/result-chart.js'

const TotalResult = ({ foodCFP, flightCFP, travelCFP }) => {

    return (
        <Container className="total-result-main-container tab-content">
            <h1>
                Your Total Carbon footprint from food, flight and Car Travel.

                {/* Result chart */}
                <ResultChart foodCFP={foodCFP} flightCFP={flightCFP} travelCFP={travelCFP} />
                
            </h1>
        </Container>
    );
}

export default TotalResult
