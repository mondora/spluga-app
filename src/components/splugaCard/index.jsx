import React from "react";
import { PropTypes } from "prop-types";
import { Container, AvatarContainer, Title, Subtitle, Description, Avatar } from "./styled";
import { FormattedMessage } from "react-intl";

export const SplugaCard = ({ auth, company, type }) => {
    const data = auth && auth.currentUser && auth.currentUser.profile ? auth.currentUser.profile.data : null;

    const n = 100;
    const companyName = company ? company.name : null;
    const companyLogo = company ? company.logo : null;

    const title = data && type === "user" ? data.name : companyName;
    const subTitle = data && type === "user" ? companyName : null;

    return (
        <Container>
            <Title> {title}</Title>
            <Subtitle>{subTitle}</Subtitle>

            <AvatarContainer>
                <Avatar
                    size="large"
                    src={data && type === "user" ? data.picture : `data:image/jpeg;base64,${companyLogo}`}
                />
                <Subtitle>
                    {type === "user" ? (
                        <FormattedMessage id="c-splugaCard.employee" />
                    ) : (
                        <FormattedMessage id="c-splugaCard.company" />
                    )}
                </Subtitle>
            </AvatarContainer>
            <Description>
                <FormattedMessage id="c-splugaCard.description" values={{ n: `${n}` }} />
            </Description>
        </Container>
    );
};

SplugaCard.defaultProps = {
    type: "user",
    company: { name: "" }
};

SplugaCard.propTypes = {
    auth: PropTypes.object.isRequired,
    company: PropTypes.object,
    /** whether type: "user", card is referred to user*/
    type: PropTypes.oneOf(["user", "company"])
};

export default SplugaCard;
