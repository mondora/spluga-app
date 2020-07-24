import React from "react";
import { FormattedMessage } from "react-intl";

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

                <FormattedMessage id="privacy.intro" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question1" />
                </Subtitle>
                <FormattedMessage id="privacy.answer1" />

                <Subtitle>
                    <FormattedMessage id="privacy.question2" />
                </Subtitle>
                <FormattedMessage id="privacy.answer2" />

                <Subtitle>
                    <FormattedMessage id="privacy.question3" />
                </Subtitle>
                <FormattedMessage id="privacy.answer3" />

                <Subtitle>
                    <FormattedMessage id="privacy.question4" />
                </Subtitle>
                <FormattedMessage id="privacy.answer4" />

                <Subtitle>
                    <FormattedMessage id="privacy.question5" />
                </Subtitle>
                <FormattedMessage id="privacy.answer5" />

                <Subtitle>
                    <FormattedMessage id="privacy.question6" />
                </Subtitle>
                <FormattedMessage id="privacy.answer6" />

                <Subtitle>
                    <FormattedMessage id="privacy.question7" />
                </Subtitle>
                <FormattedMessage id="privacy.answer7" />

                <Subtitle>
                    <FormattedMessage id="privacy.question8" />
                </Subtitle>
                <FormattedMessage id="privacy.answer8" />

                <Subtitle>
                    <FormattedMessage id="privacy.question9" />
                </Subtitle>
                <FormattedMessage id="privacy.answer9" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question10" />
                </Subtitle>
                <FormattedMessage id="privacy.answer10" />

                <Subtitle>
                    <FormattedMessage id="privacy.question11" />
                </Subtitle>
                <FormattedMessage id="privacy.answer11" />

                <Subtitle>
                    <FormattedMessage id="privacy.question12" />
                </Subtitle>
                <FormattedMessage id="privacy.answer12" />

                <Subtitle>
                    <FormattedMessage id="privacy.question13" />
                </Subtitle>
                <FormattedMessage id="privacy.answer13" />

                <Subtitle>
                    <FormattedMessage id="privacy.question14" />
                </Subtitle>
                <FormattedMessage id="privacy.answer14" values={{ email: INFO_EMAIL }} />

                <Subtitle>
                    <FormattedMessage id="privacy.question15" />
                </Subtitle>
                <FormattedMessage id="privacy.answer15" values={{ email: INFO_EMAIL }} />
            </TextContainer>
            <Footer />
        </Container>
    );
};

export default Privacy;
