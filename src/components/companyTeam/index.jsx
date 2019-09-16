import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { CompanyTeamContainer, Title, FieldRight, FieldGrid } from "./styled";
import { FormattedMessage } from "react-intl";
import { Icon, Button, Modal } from "antd";
import InviteForm from "../inviteForm";
import UserTeam from "../userTeam";

export const CompanyTeam = ({ team, onInvite }) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleSubmit = data => {
        setVisible(false);
        onInvite(data);
    };
    team = team
        ? team.filter(user => {
              return user.id;
          })
        : null;

    return (
        <Fragment>
            <CompanyTeamContainer>
                <Title>
                    <FormattedMessage id="c-companyTeam.title" />
                </Title>
                <FieldRight>
                    <Button type="link" size="large" onClick={showModal}>
                        <Icon type="team" />
                        <FormattedMessage id="c-companyTeam.invite" />
                    </Button>
                </FieldRight>
                <FieldGrid>
                    {team ? team.map(user => <UserTeam user={user} key={user.id} id={user.id} />) : null}
                </FieldGrid>
            </CompanyTeamContainer>
            <Modal
                title={<FormattedMessage id="c-inviteForm.title" />}
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
            >
                <InviteForm onSubmit={handleSubmit} />
            </Modal>
        </Fragment>
    );
};

CompanyTeam.propTypes = {
    team: PropTypes.array,
    onInvite: PropTypes.func.isRequired
};

export default CompanyTeam;
