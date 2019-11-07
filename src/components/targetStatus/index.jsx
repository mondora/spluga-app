import React from "react";
import PropTypes from "prop-types";
import { Avatar, Progress, Badge } from "antd";
import moment from "moment";
import { useIntl } from "react-intl";

import { AvatarContainer, NameContainer, UserTeamContainer, RoleContainer } from "./styled";

export const TargetStatus = ({ target }) => {
    const { name, value, actual, endDate } = target;
    const percent = parseInt((actual / value) * 100);
    const intl = useIntl();

    const count = moment(endDate).diff(moment(), "days");
    const style = count < 10 ? {} : { backgroundColor: "#52c41a" };
    const title = intl.formatMessage({ id: "c-targetStatus.daysLeft" });
    return (
        <UserTeamContainer>
            <AvatarContainer>
                <Badge count={count} title={title} style={style}>
                    <Avatar size="large" />
                </Badge>
            </AvatarContainer>
            <NameContainer>{name}</NameContainer>
            <RoleContainer>
                <Progress percent={percent} />
            </RoleContainer>
        </UserTeamContainer>
    );
};

TargetStatus.propTypes = {
    target: PropTypes.object.isRequired
};

export default TargetStatus;
