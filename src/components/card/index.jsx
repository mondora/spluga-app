import React from "react";
import { PropTypes } from "prop-types";
import {
    CardContainer,
    AvatarContainer,
    CardTitle,
    CardSubtitle,
    CardDescription
} from "./styled";
import { Avatar } from "antd";

const Card = ({ auth, company, type = false }) => {
    const data =
        auth.currentUser && auth.currentUser.profile
            ? auth.currentUser.profile.data
            : null;

    console.log("auth", auth);

    return (
        <CardContainer>
            {data && type ? (
                <div>
                    <CardTitle> {data.name.toUpperCase()}</CardTitle>
                    <CardSubtitle>{company.companies[0].name}</CardSubtitle>
                </div>
            ) : (
                <div>
                    <CardTitle>
                        {company.companies[0].name.toUpperCase()}
                    </CardTitle>
                </div>
            )}
            <AvatarContainer>
                <Avatar size={70} src={data ? data.picture : null} />
                <CardSubtitle>{type ? "Dipendente" : ""}</CardSubtitle>
            </AvatarContainer>
            <CardDescription>
                {`grazie al ${
                    type ? "tuo" : "vostro"
                } aiuto sono stati salvati n alberi`}
            </CardDescription>
        </CardContainer>
    );
};

Card.propTypes = {
    auth: PropTypes.object,
    company: PropTypes.object,
    /** whether the selected type is true, card is referred to user*/
    type: PropTypes.bool
};

export default Card;
