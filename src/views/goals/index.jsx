import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSharedGoals, getUserGoals, addUserGoal } from "../../actions/goals";

import { PageContainer } from "./styled";

export const Goals = ({
	auth,
	goal,
	getSharedGoals,
	getUserGoals,
	addUserGoal
}) => {
	useEffect(() => {
		getUserGoals({});
	}, [getUserGoals]);

	return (
		<PageContainer>
			{/*}
			user GOALS / MY company goals:
  {console.log(goal.goals)} */}
			{goal.goals === undefined || goal.goals.length === 0
				? "   I have no goal  "
				: `my goals: ${goal.goals[0].name}`}
		</PageContainer>
	);
};

Goals.propTypes = {
	auth: PropTypes.object.isRequired,
	goal: PropTypes.object,
	getUserGoals: PropTypes.func,
	getSharedGoals: PropTypes.func,
	addUserGoal: PropTypes.func
};

const mapStateToProps = state => ({
	auth: state.auth,
	goal: state.readGoal,
	write: state.writeGoal
});

//connecting my component at these functions (state, actionCreators)
export default connect(
	mapStateToProps,
	{ getSharedGoals, getUserGoals, addUserGoal }
)(Goals);

/*
lettura/scrittura/modiufica goals
{"_id":{"$oid":"5d29cfea491c5f73367a0367"},"name":"Co2 saved","description":"Number of kilometres done","uom":"km"}

per i goal visto che sono comuni a tutti , su spluga-stitch definirei un ruolo di tipo “Users can read all data, but only write their own data“
Gli utenti posso aggiungere dati (leggere/scrivere goals),

-->solo chi ha creato goal lo può modificare nei ruoli di mongo stitch : ownerId: userId read e write
-->tutti gli user possono leggere i dati condivisi --> read: userId 

--> in mongo sono gia inseriti due goals, non hanno owner id (ad esempio per il mio user) per cui in teoria potrei solo leggerli e non potrei modificarli.


--> nella UI:
- mostro i goals con ownerId dell'azienda (ora non c'èm owner id nei goals inseriti a mano per mondora) 
- do possibilita di modificare o aggiungerne dei miei (facendo isert di un goal con owner id del mio user)
*/
