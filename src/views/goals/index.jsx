import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getGoals, addGoal } from "../../actions/goals";

import { PageContainer, Title } from "./styled";

import SplugaTable from "../../components/splugaTable";
import SplugaForm from "../../components/splugaForm";
import SplugaResult from "../../components/splugaResult";

export const Goals = ({
  auth,
  goals,
  goal,
  getGoalsStatus,
  getGoals,
  addGoalStatus,
  addGoal
}) => {
  useEffect(() => {
    if (!getGoals.started && !addGoalStatus.started) {
      getGoals();
    }
  }, [getGoals, addGoalStatus]);

  const onChange = data => {
    console.log("onChange");
  };

  const onSubmit = data => {
    const ownerId = auth.currentUser.id;
    addGoal(ownerId, data);
  };

  const serverError = null;

  const fields = [
    {
      name: "name",
      description: "Name",
      ref: {
        required: "this is required",
        minLength: {
          value: 2,
          message: "Min length is 2"
        }
      }
    },
    {
      name: "description",
      description: "Description",
      ref: {
        required: "this is required",
        minLength: {
          value: 2,
          message: "Min length is 2"
        }
      }
    },
    {
      name: "uom",
      description: "Unit of Measure",
      ref: {
        required: "this is required",
        minLength: {
          value: 2,
          message: "Min length is 2"
        }
      }
    }
  ];

  return goal ? (
    <PageContainer>
      <Title>Goals</Title>
      <SplugaResult title={"New Goal created"} />
    </PageContainer>
  ) : (
    <PageContainer>
      <Title>Goals</Title>
      <SplugaTable
        dataSourceName="goals"
        dataSource={goals}
        onChange={x => onChange(x)}
        loadingStatus={getGoalsStatus}
      />
      <SplugaForm
        title="Create Goals"
        fields={fields}
        serverError={serverError}
        onSubmit={x => onSubmit(x)}
      />
    </PageContainer>
  );
};

Goals.propTypes = {
  auth: PropTypes.object.isRequired,
  goals: PropTypes.array,
  goal: PropTypes.object,
  getGoalsStatus: PropTypes.object,
  getGoals: PropTypes.func,
  addGoalStatus: PropTypes.object,
  addGoal: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth,
  goals: state.getGoals.goals,
  goal: state.addGoal.goal,
  getGoalsStatus: state.getGoals.status,
  addGoalStatus: state.addGoal.status
});

export default connect(
  mapStateToProps,
  { getGoals, addGoal }
)(Goals);

/*
lettura/scrittura/modiufica goals
{"_id":{"$oid":"5d29cfea491c5f73367a0367"},"name":"Co2 saved","description":"Number of kilometres done","uom":"km"}
per i goal visto che sono comuni a tutti , su spluga-stitch definirei un ruolo di tipo “Users can read all data, but only write their own data“
Gli utenti posso aggiungere dati (leggere/scrivere goals),

-->solo chi ha creato goal lo può modificare nei ruoli di mongo stitch : ownerId: userId read e write
-->tutti gli user possono leggere i dati condivisi --> read: userId 

--> in mongo sono gia inseriti due goals, non hanno owner id (ad esempio per il mio user) per cui in teoria potrei solo leggerli e non potrei modificarli.

OWNER ID è IL MIO USER ID, IN OR CON COMPANY ID


--> nella UI:
- mostro i goals con ownerId dell'azienda (ora non c'èm owner id nei goals inseriti a mano per mondora) 
- do possibilita di modificare o aggiungerne dei miei (facendo isert di un goal con owner id del mio user)
*/
