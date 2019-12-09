import React from "react";
import PropTypes from "prop-types";
import { TipsContainer, Title, Avatar, Tip, Subtitle, TipContainer, TitleContainer } from "./styled";
import { FormattedMessage } from "react-intl";

export const SplugaTips = ({ isCompany }) => {
    return (
        <>
            <TipsContainer>
                <TitleContainer>
                    <Title>
                        {isCompany ? (
                            <FormattedMessage id="c-splugaTips.title.company" />
                        ) : (
                            <FormattedMessage id="c-splugaTips.title.user" />
                        )}
                    </Title>
                    <Subtitle>
                        <FormattedMessage id="c-splugaTips.subtitle" />
                    </Subtitle>
                </TitleContainer>

                <TipContainer>
                    <Avatar src="https://image.flaticon.com/icons/svg/1039/1039778.svg" />
                    <Tip>
                        <FormattedMessage id="c-splugaTips.tip1" />
                    </Tip>
                </TipContainer>
                <TipContainer>
                    <Avatar src="https://image.flaticon.com/icons/svg/401/401121.svg"></Avatar>
                    <Tip>
                        <FormattedMessage id="c-splugaTips.tip2" />
                    </Tip>
                </TipContainer>
                <TipContainer>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgNvIPm3HeDvQnzkSVkrAmgnuhoW-eTmZTuZSYI5xRuk83Z3TFQ"></Avatar>
                    <Tip>
                        <FormattedMessage id="c-splugaTips.tip3" />
                    </Tip>
                </TipContainer>
                <TipContainer>
                    <Avatar src="https://i0.wp.com/esfstream.com/wp-content/uploads/2018/04/zero-carbon.png?fit=251%2C201&ssl=1"></Avatar>
                    <Tip>
                        <FormattedMessage id="c-splugaTips.tip4" />
                    </Tip>
                </TipContainer>
            </TipsContainer>
        </>
    );
};

SplugaTips.propTypes = {
    isCompany: PropTypes.bool
};

export default SplugaTips;
