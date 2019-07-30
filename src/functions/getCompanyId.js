//TODO
exports = function(companyId) {
	return companyId;
};

//da user voglio trovare i goals propri e quelli comuni , prendo i goal propri tramite ownerId e goal di tutte le aizende con %%true is company,
// queste ultime vengon ulteriormente filtarre tramite $in con codice azienda, devo salvare i codici di companies e generarli ogni volta che si iscrive una companty
//array of 1 object
const company = [{ name: "mondora srl sb", companyId: 1 }];
const company2 = { name: "2", companyId: 1 };
company.push(company2);
