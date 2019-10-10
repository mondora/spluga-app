import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./styled";
import { FormattedMessage } from "react-intl";

export const ActivityResult = ({ activities }) => {
    return (
        <Container>
            <Title>
                <FormattedMessage id="c-activityResult.title" />
            </Title>
        </Container>
    );
};

ActivityResult.propTypes = {
    activities: PropTypes.array
};

export default ActivityResult;
