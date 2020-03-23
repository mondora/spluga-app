import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 3px solid #bfbccb;
    margin: 10px;
    grid-column-start: 1;
    grid-column-end: 6;
    border-radius: 8px;
`;

const Name = styled.span`
    font-size: 14px;
    font-weight: 600;
    padding: 20px;
`;

const getLabels = label => {
    switch (label) {
        case "paperSaved":
            return "CARTA RISPARMIATA";
        case "waterSaved":
            return "ACQUA RISPARMIATA";
        case "busTravel":
            return "VIAGGIO IN BUS";
        case "trainTravel":
            return "VIAGGIO IN TRENO";
        case "bikeTravel":
            return "VIAGGIO IN BICI";
        case "trainig":
            return "TRAINING";
        case "co2Saved":
            return "CO2 SALVATA";
        case "openSourceCode":
            return "CODICE OPEN SOURCE";

        default:
    }
};

const getNames = goals => {
    if (goals) {
        return goals.map(x => getLabels(x.key));
    }
};

const CardContribution = cardGoals => {
    const goals = cardGoals.cardGoals;

    return <Container>{getNames(goals) && getNames(goals).map((x, index) => <Name key={index}>{x}</Name>)}</Container>;
};

export default CardContribution;
