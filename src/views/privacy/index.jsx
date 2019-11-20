import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import { INFO_EMAIL } from "../../config";
import { Container, TextContainer, Date, Subtitle } from "./styled.js";
import Footer from "../../components/landing/footer";
import PolicyHeader from "../../components/landing/policyHeader";

export const Privacy = () => {
    return (
        <Container>
            <PolicyHeader title="privacy.title" />
            <TextContainer>
                <Date>
                    <FormattedMessage id="privacy.lastUpdate" />
                </Date>

                <FormattedHTMLMessage id="privacy.intro" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question1" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer1" />

                <Subtitle>
                    <FormattedMessage id="privacy.question2" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer2" />

                <Subtitle>
                    <FormattedMessage id="privacy.question3" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer3" />

                <Subtitle>
                    <FormattedMessage id="privacy.question4" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer4" />

                <Subtitle>
                    <FormattedMessage id="privacy.question5" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer5" />

                <Subtitle>
                    <FormattedMessage id="privacy.question6" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer6" />

                <Subtitle>
                    <FormattedMessage id="privacy.question7" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer7" />

                <Subtitle>
                    <FormattedMessage id="privacy.question8" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer8" />

                <Subtitle>
                    <FormattedMessage id="privacy.question9" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer9" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question10" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer10" />

                <Subtitle>
                    <FormattedMessage id="privacy.question11" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer11" />

                <Subtitle>
                    <FormattedMessage id="privacy.question12" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer12" />

                <Subtitle>
                    <FormattedMessage id="privacy.question13" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer13" />

                <Subtitle>
                    <FormattedMessage id="privacy.question14" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer14" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question15" />
                </Subtitle>
                <FormattedHTMLMessage id="privacy.answer15" values={{ email: INFO_EMAIL }} />
            </TextContainer>
            <Footer />
        </Container>
    );
};

export default Privacy;
