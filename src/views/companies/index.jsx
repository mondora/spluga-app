import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PageContainer } from "./styled";
import { getCompany, addCompany } from "../../actions/companies";
import { connect } from "react-redux";

import { Typography } from "antd";

import FormCompany from "../../components/formCompany";

const { Title } = Typography;
export const Companies = ({ company, getCompany, addCompany, auth }) => {
	//componentDidUpdate, quando c'è aggiornamento di getCompany richiama getCompany, in questo caso richiama getCompany() anyway
	useEffect(() => {
		getCompany({});
	}, [getCompany]);

	return (
		<PageContainer>
			MY COMPANY:
			{company.companies === undefined ||
			company.companies.length === 0 ? (
				<FormCompany auth={auth} addCompany={addCompany} />
			) : (
				<Title>{`my company name: ${company.companies[0].name}`}</Title>
			)}
		</PageContainer>
	);
};

Companies.propTypes = {
	auth: PropTypes.object.isRequired,
	company: PropTypes.object,
	getCompany: PropTypes.func,
	addCompany: PropTypes.func
};

const mapStateToProps = state => ({
	auth: state.auth,
	company: state.read,
	write: state.write
});

//connecting my component at these functions (state, actionCreators)
export default connect(
	mapStateToProps,
	{ getCompany, addCompany }
)(Companies);

/*

L’utente entra se non ha una azienda la deve creare altrimenti solo in modifica

utente entra, chiamo getCompany, se ritorna vuoto significa che non ha un'azienda, quindi gli mostro/abilito l'input per fargliene inserire una, setCompany,
o updateCompany(se cambiassi azienda, non resetto i dati dell'utente perchè fino a li per l'azienda ha creato impatto 
pero tolgo che c'è un documento per quell'azienda riferito a lui) ???

Campi 

{name: "nome Azienda"}


se non appartengo ad un'azienda mi ritorna un array vuoto --> company (che è state.read) .companies[0].name 
mi dara undefined perche non esiste (primo elemento dell'array è un documento), sarebbe array(1)

company.companies è un array vuoto

getCompany({ name: "mondora srl sb" });
getCompany({ name: "mondora srl sb" }, { limit: 1 })

auth.currentUser.id  -> ownerId

const handleSubmit = () =>
		addCompany({ name: "mondora srl sb" }, auth.currentUser.id);

*/
