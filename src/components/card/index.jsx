import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, AvatarContainer, CardTitle, CardSubtitle, CardDescription } from "./styled";
import { Avatar } from "antd";

//export Card for testing pourpose
export const Card = ({ auth, company, type }) => {
    const data = auth && auth.currentUser && auth.currentUser.profile ? auth.currentUser.profile.data : null;

    return (
        <CardContainer>
            {data && type === "user" ? (
                <div>
                    <CardTitle> {data.name.toUpperCase()}</CardTitle>
                    <CardSubtitle>{company.name}</CardSubtitle>
                </div>
            ) : (
                <div style={{ marginBottom: 40 }}>
                    <CardTitle>{company.name.toUpperCase()}</CardTitle>
                </div>
            )}
            <AvatarContainer>
                <Avatar size={70} src={data && type === "user" ? data.picture : null} />
                <CardSubtitle>{type === "user" ? "Dipendente" : "Company"}</CardSubtitle>
            </AvatarContainer>
            <CardDescription>
                {`grazie al ${type === "user" ? "tuo" : "vostro"} aiuto sono stati salvati n alberi`}
            </CardDescription>
        </CardContainer>
    );
};

Card.defaultProps = {
    type: "user",
    company: { name: "" }
};

Card.propTypes = {
    auth: PropTypes.object.isRequired,
    company: PropTypes.object,
    /** whether type: "user", card is referred to user*/
    type: PropTypes.oneOf(["user", "company"])
};

export default Card;
