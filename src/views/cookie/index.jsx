import React from "react";
import { FormattedMessage } from "react-intl";

import { INFO_EMAIL } from "../../config";
import { Container, Subtitle, TextContainer, Date } from "./styled.js";
import Footer from "../../components/landing/footer";
import PolicyHeader from "../../components/landing/policyHeader";

export const Cookie = () => {
    return (
        <Container>
            <PolicyHeader title="cookies.title" />
            <TextContainer>
                <Date>
                    <FormattedMessage id="cookies.lastUpdate" />
                </Date>

                <FormattedMessage id="cookies.intro" />

                <Subtitle>
                    <FormattedMessage id="cookies.question1" />
                </Subtitle>
                <FormattedMessage id="cookies.answer1" />

                <Subtitle>
                    <FormattedMessage id="cookies.question2" />
                </Subtitle>
                <FormattedMessage id="cookies.answer2" />

                <Subtitle>
                    <FormattedMessage id="cookies.question3" />
                </Subtitle>
                <FormattedMessage id="cookies.answer3" />

                <Subtitle>
                    <FormattedMessage id="cookies.question4" />
                </Subtitle>
                <FormattedMessage id="cookies.answer4" values={{ email: INFO_EMAIL }} />
            </TextContainer>
            <Footer />
        </Container>
    );
};

export default Cookie;
