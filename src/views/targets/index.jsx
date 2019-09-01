import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTargets } from "../../actions/targets";

import { PageContainer, Title } from "./styled";

import SplugaTable from "../../components/splugaTable";
import SplugaResult from "../../components/splugaResult";

export const Targets = ({ auth, targets, target, getTargetsStatus, getTargets }) => {
    useEffect(() => {
        if (!getTargetsStatus.ended && !getTargetsStatus.started) {
            getTargets();
        }
    }, [getTargets, getTargetsStatus]);

    const onChange = () => {};

    return target ? (
        <PageContainer>
            <Title>Targets</Title>
            <SplugaResult title={"New Target created"} />
        </PageContainer>
    ) : (
        <PageContainer>
            <Title>Targets</Title>
            <SplugaTable
                dataSourceName="targets"
                dataSource={targets}
                onChange={x => onChange(x)}
                loadingStatus={getTargetsStatus}
            />
        </PageContainer>
    );
};

Targets.propTypes = {
    auth: PropTypes.object.isRequired,
    targets: PropTypes.array,
    target: PropTypes.object,
    getTargets: PropTypes.func,
    getTargetsStatus: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    targets: state.getTargets.targets,
    target: state.addTarget.target,
    getTargetsStatus: state.addTarget.status
});

export default connect(
    mapStateToProps,
    { getTargets }
)(Targets);
