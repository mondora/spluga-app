import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { CompanyTeamContainer, Title, FieldLeft, FieldRight } from "./styled";
import { FormattedMessage } from "react-intl";
import { Icon, Button, Modal } from "antd";
import InviteForm from "../inviteForm";

export const CompanyTeam = ({ onInvite }) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleSubmit = data => {
        setVisible(false);
        onInvite(data);
    };

    return (
        <Fragment>
            <CompanyTeamContainer>
                <FieldLeft>
                    <Title>
                        <FormattedMessage id="c-companyTeam.title" />
                    </Title>
                </FieldLeft>
                <FieldRight>
                    <Button type="link" size="large" onClick={showModal}>
                        <Icon type="team" />
                        <FormattedMessage id="c-companyTeam.invite" />
                    </Button>
                </FieldRight>
                <Modal
                    title={<FormattedMessage id="c-inviteForm.title" />}
                    visible={visible}
                    footer={null}
                    onCancel={() => setVisible(false)}
                >
                    <InviteForm onSubmit={handleSubmit} />
                </Modal>
            </CompanyTeamContainer>
        </Fragment>
    );
};

CompanyTeam.propTypes = {
    onInvite: PropTypes.func.isRequired
};

export default CompanyTeam;
