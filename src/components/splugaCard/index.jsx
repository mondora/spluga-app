import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, AvatarContainer, CardTitle, CardSubtitle, CardDescription } from "./styled";
import { Avatar } from "antd";

//export SplugaCard for testing pourpose
export const SplugaCard = ({ auth, company, type }) => {
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
                <CardSubtitle>{type === "user" ? "Employee" : "Company"}</CardSubtitle>
            </AvatarContainer>
            <CardDescription>{`thanks for your help, n trees have been saved`}</CardDescription>
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
