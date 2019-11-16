import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import { INFO_MAIL } from "../../config";
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

                <FormattedHTMLMessage id="cookies.intro" />

                <Subtitle>
                    <FormattedMessage id="cookies.question1" />
                </Subtitle>
                <FormattedHTMLMessage id="cookies.answer1" />

                <Subtitle>
                    <FormattedMessage id="cookies.question2" />
                </Subtitle>
                <FormattedHTMLMessage id="cookies.answer2" />

                <Subtitle>
                    <FormattedMessage id="cookies.question3" />
                </Subtitle>
                <FormattedHTMLMessage id="cookies.answer3" />

                <Subtitle>
                    <FormattedMessage id="cookies.question4" />
                </Subtitle>
                <FormattedHTMLMessage id="cookies.answer4" values={{ email: INFO_MAIL }} />
            </TextContainer>
            <Footer />
        </Container>
    );
};

export default Cookie;
