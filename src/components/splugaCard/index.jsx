import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, AvatarContainer, CardTitle, CardSubtitle, CardDescription, Avatar } from "./styled";
import { FormattedMessage } from "react-intl";

//export SplugaCard for testing pourpose
export const SplugaCard = ({ auth, company, type }) => {
    const data = auth && auth.currentUser && auth.currentUser.profile ? auth.currentUser.profile.data : null;

    //TODO: n will be taken from the achieved acitvities
    const n = 100;
    const companyName = company ? company.name : null;
    const companyLogo = company ? company.logo : null;
    return (
        <CardContainer>
            {data && type === "user" ? (
                <div>
                    <CardTitle> {data.name.toUpperCase()}</CardTitle>
                    <CardSubtitle>{companyName}</CardSubtitle>
                </div>
            ) : (
                <div style={{ marginBottom: 40 }}>
                    <CardTitle>{companyName}</CardTitle>
                </div>
            )}
            <AvatarContainer>
                <Avatar
                    size="large"
                    src={data && type === "user" ? data.picture : `data:image/jpeg;base64,${companyLogo}`}
                />
                <CardSubtitle>
                    {type === "user" ? (
                        <FormattedMessage id="c-splugaCard.employee" />
                    ) : (
                        <FormattedMessage id="c-splugaCard.company" />
                    )}
                </CardSubtitle>
            </AvatarContainer>
            <CardDescription>
                <FormattedMessage id="c-splugaCard.description" values={{ n: `${n}` }} />
            </CardDescription>
        </CardContainer>
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
