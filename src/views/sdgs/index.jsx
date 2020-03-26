import React, { useState } from "react";

import { useHover } from "../../lib/hooks";

import styled, { css } from "styled-components";

import SDG1 from "../sdgs/assets/E_PRINT_01.jpg";
import SDG3 from "../sdgs/assets/E_WEB_03.png";
import SDG3b from "../sdgs/assets/E_GIF_03.gif";
import SDG2 from "../sdgs/assets/E_WEB_02.png";
import SDG4 from "../sdgs/assets/E_WEB_04.png";
import SDG4b from "../sdgs/assets/E_GIF_04.gif";
import SDG5 from "../sdgs/assets/E_WEB_05.png";
import SDG6 from "../sdgs/assets/E_WEB_06.png";
import SDG7 from "../sdgs/assets/E_WEB_07.png";
import SDG8 from "../sdgs/assets/E_WEB_08.png";
import SDG8b from "../sdgs/assets/E_GIF_08.gif";
import SDG9 from "../sdgs/assets/E_WEB_09.png";
import SDG10 from "../sdgs/assets/E_WEB_10.png";
import SDG11 from "../sdgs/assets/E_WEB_11.png";
import SDG11b from "../sdgs/assets/E_GIF_11.gif";
import SDG12 from "../sdgs/assets/E_WEB_12.png";
import SDG12b from "../sdgs/assets/E_GIF_12.gif";
import SDG13 from "../sdgs/assets/E_WEB_13.png";
import SDG13b from "../sdgs/assets/E_GIF_13.gif";
import SDG14 from "../sdgs/assets/E_WEB_14.png";
import SDG14b from "../sdgs/assets/E_GIF_14.gif";
import SDG15 from "../sdgs/assets/E_WEB_15.png";
import SDG15b from "../sdgs/assets/E_GIF_15.gif";
import SDG16 from "../sdgs/assets/E_WEB_16.png";
import SDG17 from "../sdgs/assets/E_WEB_17.png";
import { Modal } from "antd";

const PageContainer = styled.div`
    margin: 32px;
`;

const Description = styled.div`
    margin: 8px;
    text-align: center;
`;

export const SdgsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
    grid-column-gap: 0px;
    align-items: stretch;
    justify-content: center;
    padding: 10px;
    width: 100%;
`;

export const Sdg = styled.button`
    width: 173px;
    height: 173px;
    background: transparent;
    border: none;
    cursor: pointer;

    ${props =>
        props.isUsed
            ? css`
                  &:hover {
                      filter: contrast(160%) brightness(100%);
                  }
              `
            : css`
                  filter: opacity(25%) grayscale(0.3);
              `}

    ${props => (props.isUsed ? css`` : css``)}

    img {
        width: 100%;
    }
`;
//11 12 13 14 15 3 4 8
const Sdgs = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [visible8, setVisible8] = useState(false);
    const [visible9, setVisible9] = useState(false);
    const [visible10, setVisible10] = useState(false);
    const [visible11, setVisible11] = useState(false);
    const [visible12, setVisible12] = useState(false);
    const [visible13, setVisible13] = useState(false);
    const [visible14, setVisible14] = useState(false);
    const [visible15, setVisible15] = useState(false);
    const [visible16, setVisible16] = useState(false);
    const [visible17, setVisible17] = useState(false);

    const [hoverRef3, isHovered3] = useHover();
    const [hoverRef4, isHovered4] = useHover();
    const [hoverRef8, isHovered8] = useHover();
    const [hoverRef11, isHovered11] = useHover();
    const [hoverRef12, isHovered12] = useHover();
    const [hoverRef13, isHovered13] = useHover();
    const [hoverRef14, isHovered14] = useHover();
    const [hoverRef15, isHovered15] = useHover();

    const renderDescription = index => {
        index === 1 && setVisible(true);
        index === 2 && setVisible2(true);
        index === 3 && setVisible3(true);
        index === 4 && setVisible4(true);
        index === 5 && setVisible5(true);
        index === 6 && setVisible6(true);
        index === 7 && setVisible7(true);
        index === 8 && setVisible8(true);
        index === 9 && setVisible9(true);
        index === 10 && setVisible10(true);
        index === 11 && setVisible11(true);
        index === 12 && setVisible11(true);
        index === 13 && setVisible13(true);
        index === 14 && setVisible14(true);
        index === 15 && setVisible15(true);
        index === 16 && setVisible16(true);
        index === 17 && setVisible17(true);
    };

    return (
        <PageContainer>
            <div>{"Qual è il fine dell'SDG? Clicca sui box per conoscerli."}</div>
            <SdgsContainer>
                <Sdg onClick={() => renderDescription(1)} onKeyPress={() => renderDescription(1)} isUsed={false}>
                    <img src={SDG1} alt="sdg-1" />
                </Sdg>
                <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                    Nonostante i notevoli progressi nella lotta contro la povertà a partire dal 1990, più di 800 milioni
                    di persone, il 70% dei quali sono donne, vivono ancora in condizioni di estrema povertà. La nuova
                    Agenda per lo sviluppo sostenibile si pone l'obiettivo di eliminare la povertà estrema entro il
                    2030. Oltre l'obiettivo di sradicare la povertà estrema, l’Obiettivo 1 riguarda un approccio globale
                    alla povertà nel suo complesso, ma pone anche un bersaglio sulle singole realtà nazionali di
                    povertà. I poveri sono particolarmente vulnerabili alle crisi economiche e politiche, alle
                    problematiche di biodiversità e degli ecosistemi, delle catastrofi naturali e della violenza. Per
                    garantire che i popoli fuggiti alla povertà non ricadano di nuovo in essa, questo obiettivo prevede
                    anche misure per rafforzare la resilienza al sostentamento e i sistemi di sicurezza sociale.
                    <br />
                    <br />
                    <b>Obiettivo 1: porre fine alla povertà in tutte le sue forme in tutto il mondo </b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(2)} onKeyPress={() => renderDescription(2)}>
                    <img src={SDG2} alt="sdg-2" />
                </Sdg>
                <Modal visible={visible2} onOk={() => setVisible2(false)} onCancel={() => setVisible2(false)}>
                    Anche se la situazione è migliorata in numerosi paesi, molte persone soffrono ancora la fame e la
                    malnutrizione in tutto il mondo. La denutrizione colpisce quasi 800 milioni di persone in tutto il
                    mondo - la maggior parte dei quali donne e bambini. L'obiettivo del 2030 dell’ Agenda è quello di
                    porre fine alla fame e tutte le forme di malnutrizione in tutto il mondo entro i prossimi 15 anni.
                    In considerazione della rapida crescita della domanda globale di cibo, si stima che la produzione
                    alimentare mondiale dovrà essere raddoppiata entro il 2050. Circa il 70% delle persone che sono
                    denutrite devono direttamente o indirettamente all'agricoltura il loro sostentamento, quindi sono i
                    piccoli agricoltori a rischio di denutrizione. Oltre l'obiettivo di eliminare la fame, l’Obiettivo 2
                    mira a porre fine a tutte le forme di malnutrizione. La qualità del cibo è altrettanto importante
                    quanto la quantità di cibo. L’Obiettivo 2 mira anche agli aspetti economici, come ad esempio a
                    raddoppiare la produttività agricola e il reddito dei piccoli agricoltori entro il 2030. Inoltre, è
                    dotato di disposizioni in materia di agricoltura sostenibile per prevenire un aumento della
                    produzione di cibo che possa danneggiare l'ambiente.
                    <br />
                    <br />
                    <b>
                        Obiettivo 2: porre fine alla fame, realizzare la sicurezza alimentare e una migliore nutrizione
                        e promuovere l'agricoltura sostenibile
                    </b>
                </Modal>

                <Sdg
                    ref={hoverRef3}
                    onClick={() => renderDescription(3)}
                    onKeyPress={() => renderDescription(3)}
                    isUsed={true}
                >
                    {isHovered3 ? <img src={SDG3b} alt="sdg-3b" /> : <img src={SDG3} alt="sdg-3" />}
                </Sdg>
                <Modal visible={visible3} onOk={() => setVisible3(false)} onCancel={() => setVisible3(false)}>
                    Gli Obiettivi di sviluppo del millennio (MDG) hanno dato un contributo significativo al
                    miglioramento della salute globale, per esempio nella lotta contro le malattie come l'AIDS, la
                    tubercolosi e la malaria. Ad esempio, il numero di morti per malaria è sceso del 60% a partire dal
                    2000. Tuttavia, i risultati non sono riusciti a soddisfare le aspettative in molti settori, come la
                    riduzione della mortalità infantile e materna. L'esperienza degli OSM ha dimostrato che i problemi
                    di salute devono essere visti nel contesto, non in forma isolata. Formazione e sicurezza alimentare
                    influenzano l'efficacia dei programmi di assistenza sanitaria. L’Obiettivo 3 continua lungo le
                    stesse linee degli MDG, ad esempio per quanto riguarda la mortalità infantile e materna, così come
                    le malattie trasmissibili, come l'AIDS, la malaria e la tubercolosi, includendo anche disposizioni
                    in materia di lotta contro le malattie non trasmissibili, come il diabete e la prevenzione degli
                    incidenti stradali e abuso di droghe. Tutte le persone dovrebbero avere accesso ai servizi sanitari
                    e ai farmaci di buona qualità. Un altro obiettivo per il 2030 è quello di garantire l'accesso
                    universale alla salute sessuale e riproduttiva, compresa la pianificazione familiare, l'informazione
                    e l'educazione.
                    <br />
                    <br />
                    <b>Obiettivo 3: Garantire una vita sana e promuovere il benessere per tutti a tutte le età </b>
                </Modal>

                <Sdg
                    ref={hoverRef4}
                    onClick={() => renderDescription(4)}
                    onKeyPress={() => renderDescription(4)}
                    isUsed={true}
                >
                    {isHovered4 ? <img src={SDG4b} alt="sdg-4b" /> : <img src={SDG4} alt="sdg-4" />}
                </Sdg>
                <Modal visible={visible4} onOk={() => setVisible4(false)} onCancel={() => setVisible4(false)}>
                    La comunità internazionale ha ribadito l'importanza della formazione e istruzione di buona qualità
                    per il miglioramento delle condizioni di vita delle persone, delle comunità e intere società.
                    Partendo dalle molte lezioni utili dei Millennium Development Goals (MDG), il nuovo obiettivo di
                    sviluppo sostenibile 4 va oltre l'istruzione primaria dei bambini, evidenziando in particolare il
                    legame tra istruzione di base e la formazione professionale. Inoltre, sottolinea l'equità e la
                    qualità dell'istruzione in un approccio di apprendimento per tutta la vita, due aspetti che non sono
                    state affrontate nel MDG. Obiettivo 4 mira a garantire che tutti i bambini, gli adolescenti e gli
                    adulti - soprattutto quelle più emarginate e vulnerabili - abbiano accesso all'istruzione e
                    formazione adeguate alle loro esigenze e al contesto in cui vivono. Questo rende l'istruzione un
                    fattore che contribuisce a rendere il mondo più sicuro, sostenibile e interdipendente.
                    <br />
                    <br />
                    <b>
                        Obiettivo 4: Garantire un'istruzione di qualità inclusiva e paritaria e di promuovere
                        opportunità di apprendimento permanente per tutti
                    </b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(5)} onKeyPress={() => renderDescription(5)}>
                    <img src={SDG5} alt="sdg-5" />
                </Sdg>
                <Modal visible={visible5} onOk={() => setVisible5(false)} onCancel={() => setVisible5(false)}>
                    La disuguaglianza di genere è uno dei maggiori ostacoli allo sviluppo sostenibile, alla crescita
                    economica e alla riduzione della povertà. Grazie all’ OSM 3 sulla parità di genere e l'empowerment
                    delle donne, i progressi nella possibilità alle bambine di iscriversi a scuola e l'integrazione
                    delle donne nel mercato del lavoro, sono stati stato considerevoli. L’OSM 3 ha dato alla questione
                    della parità di genere grande visibilità, ma sono ancora sensibili questioni importanti come la
                    violenza contro le donne, le disparità economiche e la bassa partecipazione delle donne al processo
                    decisionale politico. Il Goal 5 sostiene le pari opportunità tra uomini e donne nella vita
                    economica, l'eliminazione di tutte le forme di violenza contro le donne e le ragazze, l'eliminazione
                    dei matrimoni precoci e forzati, e la parità di partecipazione a tutti i livelli.
                    <br />
                    <br />
                    <b>Obiettivo 5. Raggiungere la parità di genere e l'empowerment di tutte le donne e le ragazze</b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(6)} onKeyPress={() => renderDescription(6)}>
                    <img src={SDG6} alt="sdg-6" />
                </Sdg>
                <Modal visible={visible6} onOk={() => setVisible6(false)} onCancel={() => setVisible6(false)}>
                    L'accesso all'acqua potabile e ai servizi igienici è un diritto umano e, insieme con le risorse
                    idriche, un fattore determinante in tutti gli aspetti dello sviluppo sociale, economico e
                    ambientale. Gli OSM del 2000 contenevano obiettivi su acqua e servizi igienici potabile, ma non
                    hanno affrontato altri aspetti fondamentali per lo sviluppo sostenibile, come la gestione delle
                    risorse idriche, la gestione delle acque reflue, la qualità dell'acqua onde prevenire i disastri
                    legati all'acqua. Oltre a accesso all'acqua potabile e servizi igienici, il Goal 6 comprende quindi
                    ulteriori obiettivi come la protezione e il ripristino degli ecosistemi legati all'acqua (tra cui
                    montagne, foreste, zone umide, fiumi e laghi). Obiettivo 6 mira a migliorare la qualità dell'acqua e
                    ridurre l'inquinamento delle acque, in particolare quello da sostanze chimiche pericolose. Si
                    sostiene anche la cooperazione transfrontaliera, come la chiave per la gestione delle risorse
                    idriche in modo integrato a tutti i livelli.
                    <br />
                    <br />
                    <b>
                        Obiettivo 6: Garantire la disponibilità e la gestione sostenibile delle risorse idriche e
                        servizi igienico-sanitari per tutti
                    </b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(7)} onKeyPress={() => renderDescription(7)}>
                    <img src={SDG7} alt="sdg-7" />
                </Sdg>
                <Modal visible={visible7} onOk={() => setVisible7(false)} onCancel={() => setVisible7(false)}>
                    L'accesso all'energia è un prerequisito essenziale per raggiungere molti obiettivi di sviluppo
                    sostenibile che si estendono ben al di là del settore energetico, come ad esempio l'eliminazione
                    della povertà, aumentare la produzione alimentare, la fornitura di acqua pulita, miglioramento della
                    sanità pubblica, migliorando l'istruzione, la creazione di opportunità economiche e l'emancipazione
                    delle donne. Allo stato attuale, 1,6 miliardi di persone in tutto il mondo non hanno accesso
                    all'energia elettrica. L’Obiettivo 7 sostiene in tal modo l'accesso universale e affidabile ai
                    servizi di produzione di energia moderni a prezzi accessibili. Dato che lo sviluppo sostenibile
                    dipende lo sviluppo economico e dal clima, l’obiettivo 7 mira ad un notevole aumento della quota di
                    energie rinnovabili nell’ambito delle energie globali e un raddoppiamento del tasso globale di
                    miglioramento dell'efficienza energetica. Un altro obiettivo è quello di promuovere la ricerca nelle
                    energie rinnovabili, nonché l’ investimento in infrastrutture e tecnologie di energia pulita.
                    <br />
                    <br />
                    <b>
                        Obiettivo 7: Assicurare l'accesso all'energia a prezzi accessibili, affidabile, sostenibile e
                        moderno per tutti
                    </b>
                </Modal>

                <Sdg
                    ref={hoverRef8}
                    onClick={() => renderDescription(8)}
                    onKeyPress={() => renderDescription(8)}
                    isUsed={true}
                >
                    {isHovered8 ? <img src={SDG8b} alt="sdg-8b" /> : <img src={SDG8} alt="sdg-8" />}
                </Sdg>
                <Modal visible={visible8} onOk={() => setVisible8(false)} onCancel={() => setVisible8(false)}>
                    Secondo i dati attuali, oltre 200 milioni di persone in tutto il mondo sono disoccupati, soprattutto
                    giovani. L'occupazione e la crescita economica svolgono un ruolo significativo nella lotta alla
                    povertà. La promozione di una crescita sostenibile e la creazione di sufficienti posti di lavoro
                    dignitoso e rispettoso dei diritti umani sono di fondamentale importanza non solo per i paesi in via
                    di sviluppo ma anche per le economie emergenti e quelle industrializzate. L’Obiettivo 8 comprende
                    obiettivi sul sostegno della crescita economica, aumentando la produttività economica e la creazione
                    di posti di lavoro dignitosi. Esso prevede anche la lotta contro il lavoro forzato e la fine della
                    schiavitù moderna e traffico di esseri umani entro il 2030. La crescita economica sostenibile non
                    deve avvenire a scapito dell'ambiente, ed è per questo che l’obiettivo 8 mira anche a una migliore
                    efficienza dei consumi delle risorse globali e della produzione prevenendo un degrado ambientale
                    legato alla crescita economica.
                    <br />
                    <br />
                    <b>
                        Obiettivo 8: Promuovere una crescita economica duratura, inclusiva e sostenibile, la piena e
                        produttiva occupazione e un lavoro dignitoso per tutti
                    </b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(9)} onKeyPress={() => renderDescription(9)}>
                    <img src={SDG9} alt="sdg-9" />
                </Sdg>
                <Modal visible={visible9} onOk={() => setVisible9(false)} onCancel={() => setVisible9(false)}>
                    Gli investimenti in infrastrutture sostenibili e nella ricerca scientifica e tecnologica aumentano
                    la crescita economica, creano posti di lavoro e promuovono la prosperità. I progetti
                    infrastrutturali che costano miliardi sono previsti per i prossimi 15 anni, in particolare nei paesi
                    in via di sviluppo e nelle economie emergenti. L’Obiettivo 9 mira pertanto a costruire
                    infrastrutture resistenti, promuovere l'industrializzazione e promuovere l'innovazione. Maggiore
                    efficienza delle risorse da utilizzare e una maggiore adozione di tecnologie pulite e rispettose
                    dell'ambiente e processi industriali necessari per rendere le infrastrutture e le industrie
                    sostenibili entro il 2030. L’Obiettivo 9 mira a sostenere lo sviluppo della tecnologia, la ricerca e
                    l'innovazione soprattutto nei paesi in via di sviluppo, fornire a piccole industrie e aziende un
                    maggiore accesso ai servizi finanziari e di credito a prezzi accessibili, e aumentare l'integrazione
                    di queste aziende nei mercati. Mira anche a sostenere l'accesso universale e accessibile a internet
                    nei paesi meno sviluppati del mondo.
                    <br />
                    <br />
                    <b>
                        Obiettivo 9: Costruire infrastrutture resistenti, promuovere l'industrializzazione inclusiva e
                        sostenibile e promuovere l'innovazione
                    </b>
                </Modal>

                <Sdg isUsed={false} onClick={() => renderDescription(10)} onKeyPress={() => renderDescription(10)}>
                    <img src={SDG10} alt="sdg-10" />
                </Sdg>
                <Modal visible={visible10} onOk={() => setVisible10(false)} onCancel={() => setVisible10(false)}>
                    Le disuguaglianze a livello globale sono enormi e presentano uno dei maggiori ostacoli allo sviluppo
                    sostenibile e alla lotta contro la povertà. La disuguaglianza all'interno di molti paesi è in
                    aumento negli ultimi anni. Le disuguaglianze limitano le opportunità di partecipare alla vita dei
                    gruppi sociali e di dare un contributo significativo alla vita sociale, culturale, politica ed
                    economica. Pertanto, l’obiettivo 10 si concentra sulla riduzione delle disuguaglianze all'interno
                    dei paesi e tra i paesi. In concreto, l’obiettivo 10 mira alla crescita del reddito delle classi più
                    povere per il raggiungimento di responsabilizzazione e di inclusione sociale, economica e politica
                    per tutti entro il 2030. L’Obiettivo 10 mira a garantire le pari opportunità attraverso
                    l'eliminazione delle leggi discriminatorie, le politiche e le pratiche, facilitando una più
                    regolarizzata e sicura migrazione umana attraverso l'attuazione di adeguate politiche di migrazione.
                    L’obiettivo prevede anche una maggiore rappresentanza e una maggiore voce dei paesi in via di
                    sviluppo nel processo decisionale all'interno delle istituzioni economiche e finanziarie
                    internazionali.
                    <br />
                    <br />
                    <b>Obiettivo 10: Ridurre le disuguaglianze all'interno e tra i paesi</b>
                </Modal>

                <Sdg
                    ref={hoverRef11}
                    onClick={() => renderDescription(11)}
                    onKeyPress={() => renderDescription(11)}
                    isUsed={true}
                >
                    {isHovered11 ? <img src={SDG11b} alt="sdg-11b" /> : <img src={SDG11} alt="sdg-11" />}
                </Sdg>
                <Modal visible={visible11} onOk={() => setVisible11(false)} onCancel={() => setVisible11(false)}>
                    L’urbanizzazione globale è uno degli sviluppi più significativi del 21 ° secolo. Più della metà
                    della popolazione mondiale vive in città, una percentuale che si prevede di aumentare al 70% entro
                    il 2050. Sono le città a guidare le economie locali e nazionali, come centri di prosperità dove si
                    concentra oltre l’80% delle attività economiche globali. L’Urbanizzazione pone anche grandi sfide.
                    Le città hanno un enorme impatto ambientale. Occupano solo il tre per cento della superficie del
                    mondo, ma sono responsabili per tre quarti del consumo di risorse globale e il 75% delle emissioni
                    globali. L’obiettivo 11 mira a ridurre gli effetti negativi dell'impatto ambientale delle città, in
                    particolare in termini di qualità dell'aria e gestione dei rifiuti. Essa richiede forme più
                    inclusive e sostenibili di urbanizzazione, basate in particolare su un approccio partecipativo,
                    integrato e sostenibile alla pianificazione urbana. Inoltre, esso mira a garantire l'accesso
                    universale a spazi verdi e pubblici sicuri e inclusivi, soprattutto per le donne ei bambini, gli
                    anziani e le persone con disabilità, e di fornire l'accesso ai sistemi di trasporto sicuri e
                    convenienti.
                    <br />
                    <br />
                    <b>
                        Obiettivo 11: rendere le città e gli insediamenti umani inclusivi, sicuri, flessibili e
                        sostenibili
                    </b>
                </Modal>

                <Sdg
                    ref={hoverRef12}
                    onClick={() => renderDescription(12)}
                    onKeyPress={() => renderDescription(12)}
                    isUsed={true}
                >
                    {isHovered12 ? <img src={SDG12b} alt="sdg-12b" /> : <img src={SDG12} alt="sdg-12" />}
                </Sdg>
                <Modal visible={visible12} onOk={() => setVisible12(false)} onCancel={() => setVisible12(false)}>
                    La popolazione mondiale attualmente consuma più risorse rispetto a quelle che gli ecosistemi siano
                    in grado di fornire. Per lo sviluppo sociale ed economico che rientri nella capacità di carico degli
                    ecosistemi, sono necessari cambiamenti fondamentali nel modo in cui le società producono e
                    consumano. L’Obiettivo 12 in attuazione del quadro decennale dei programmi su modelli di consumo e
                    di produzione sostenibili, mira alla gestione ecologica dei prodotti chimici e di tutti i rifiuti,
                    nonché a una sostanziale riduzione della produzione di rifiuti attraverso misure quali il
                    riciclaggio. L’Obiettivo 12 ha anche lo scopo di dimezzare lo spreco alimentare, incoraggiare le
                    imprese ad adottare pratiche sostenibili e promuovere politiche in materia di appalti pubblici
                    sostenibili.
                    <br />
                    <br />
                    <b>Obiettivo 12: Garantire modelli di consumo e produzione sostenibili</b>
                </Modal>

                <Sdg
                    ref={hoverRef13}
                    onClick={() => renderDescription(13)}
                    onKeyPress={() => renderDescription(13)}
                    isUsed={true}
                >
                    {isHovered13 ? <img src={SDG13b} alt="sdg-13b" /> : <img src={SDG13} alt="sdg-13" />}
                </Sdg>
                <Modal visible={visible13} onOk={() => setVisible13(false)} onCancel={() => setVisible13(false)}>
                    Il cambiamento climatico è una sfida chiave in materia di sviluppo sostenibile. Il riscaldamento del
                    clima terrestre sta provocando cambiamenti nel sistema climatico globale che minacciano la
                    sopravvivenza di ampie fasce di popolazione nei paesi meno sviluppati, mentre le infrastrutture e
                    alcuni settori economici sono vulnerabili ai rischi dei cambiamenti climatici, in particolare, nelle
                    regioni sviluppate. Inoltre, i cambiamenti nei cicli delle precipitazione e di temperatura stanno
                    colpendo anche ecosistemi come le foreste, i terreni agricoli, le regioni di montagna e degli
                    oceani, così come le piante, gli animali e le persone che vi abitano. L'anidride carbonica globale
                    (CO2) è aumentata di oltre il 50% tra il 1990 e il 2012. L’Obiettivo 13 invita i paesi a dotarsi di
                    misure di protezione del clima nelle loro politiche nazionali e a prestarsi reciproca assistenza per
                    rispondere alle sfide quando necessario. L’obiettivo 13 è favorevole al rafforzamento della
                    resilienza alle calamità naturali legate al clima e riafferma l'impegno assunto dai paesi sviluppati
                    a mobilitare ogni anno 100 miliardi di dollari congiuntamente da tutte le fonti, entro il 2020, per
                    aiutare i paesi in via di sviluppo ad adattarsi ai cambiamenti climatici.
                    <br />
                    <br />
                    <b>
                        Obiettivo 13: adottare misure urgenti per combattere il cambiamento climatico e le sue
                        conseguenze
                    </b>
                </Modal>

                <Sdg
                    ref={hoverRef14}
                    onClick={() => renderDescription(14)}
                    onKeyPress={() => renderDescription(14)}
                    isUsed={true}
                >
                    {isHovered14 ? <img src={SDG14b} alt="sdg-14b" /> : <img src={SDG14} alt="sdg-14" />}
                </Sdg>
                <Modal visible={visible14} onOk={() => setVisible14(false)} onCancel={() => setVisible14(false)}>
                    Inquinamento e sfruttamento eccessivo dei nostri oceani sono la causa di sempre maggiori problemi,
                    quali una grave minaccia per la biodiversità, l'acidificazione degli oceani e l’aumento dei rifiuti
                    di plastica. Oltre alla pesca industriale e l'utilizzo commerciale delle risorse marine, il
                    cambiamento climatico sta mettendo gli ecosistemi marini sotto pressione sempre in aumento. Una
                    continua crescita della popolazione mondiale sarà ancora più legata al problema delle risorse marine
                    in futuro. L’Obiettivo 14 mira a ridurre in modo significativo tutti i tipi di inquinamento marino,
                    riducendo al minimo l'acidificazione degli oceani entro il 2025, affrontando in modo sostenibile la
                    gestione e la protezione degli ecosistemi marini e costieri. Esso mira inoltre, entro il 2020, a
                    regolamentare la raccolta in modo efficace e a bloccare la pesca eccessiva, ponendo fine alla pesca
                    illegale e non regolamentata e le pratiche di pesca distruttive. Inoltre, obiettivo 14 tende a
                    vietare determinati tipi di sovvenzioni alla pesca.
                    <br />
                    <br />
                    <b>
                        Obiettivo 14: conservare e utilizzare in modo durevole gli oceani, i mari e delle risorse marine
                        per lo sviluppo sostenibile
                    </b>
                </Modal>

                <Sdg
                    ref={hoverRef15}
                    onClick={() => renderDescription(15)}
                    onKeyPress={() => renderDescription(15)}
                    isUsed={true}
                >
                    {isHovered15 ? <img src={SDG15b} alt="sdg-15b" /> : <img src={SDG15} alt="sdg-15" />}
                </Sdg>
                <Modal visible={visible15} onOk={() => setVisible15(false)} onCancel={() => setVisible15(false)}>
                    La conservazione e l'uso sostenibile della biodiversità sono di vitale importanza per lo sviluppo
                    sociale ed economico, nonché per la sopravvivenza dell'umanità. Tuttavia, vi è un evidente e
                    continuo declino della biodiversità con una perdita della superficie forestale che minaccia la
                    prosperità umana, con un impoverimento delle popolazioni rurali povere - comprese le comunità
                    indigene e locali - particolarmente colpite. Biodiversità e foreste contribuiscono alla riduzione
                    della povertà e sono alla base della sicurezza alimentare e della salute umana, poiché assicurano
                    aria pulita e acqua, assorbendo le emissioni di CO2 oltreché lo sviluppo ambientale. L’obiettivo 15
                    è finalizzato alla conservazione, restauro e uso sostenibile degli ecosistemi, con l'obiettivo di
                    fermare la deforestazione, assicurare il ripristino delle foreste degradate e sostanzialmente
                    aumentare il rimboschimento entro il 2020. Inoltre, partecipa alla lotta alla desertificazione entro
                    il 2030 e al ripristino dei terreni interessati dalla desertificazione, siccità e inondazioni. Per
                    proteggere la biodiversità, l’obiettivo 15 chiede misure urgenti per porre fine bracconaggio e il
                    traffico di specie animali e vegetali protette.
                    <br />
                    <br />
                    <b>
                        Obiettivo 15: proteggere, restaurare e promuovere l'uso sostenibile degli ecosistemi terrestri,
                        gestire in modo sostenibile le foreste, lotta alla desertificazione, e fermare e invertire il
                        degrado del suolo e arrestare la perdita di biodiversità
                    </b>
                </Modal>

                <Sdg onClick={() => renderDescription(16)} onKeyPress={() => renderDescription(16)}>
                    <img src={SDG16} alt="sdg-16" />
                </Sdg>
                <Modal visible={visible16} onOk={() => setVisible16(false)} onCancel={() => setVisible16(false)}>
                    E’ evidente che senza una comunità pacifica e inclusiva e una governance efficace, lo sviluppo non
                    può essere sostenibile. Ad esempio, i paesi colpiti da conflitti sono i più lontani dal
                    raggiungimento degli SDG, mentre in molti altri paesi il ristabilimento delle istituzioni di pace e
                    responsabili ha contribuito notevolmente al raggiungimento degli SDG. L’Obiettivo 16 entro il 2030
                    mira pertanto a promuovere società pacifiche e inclusive. Come tale, essa sostiene di ridurre ogni
                    forma di violenza, comprese la tortura e la lotta contro tutte le forme di criminalità organizzata.
                    Inoltre, obiettivo 16 prevede di ridurre in modo significativo corruzione e concussione, così come
                    flussi finanziari illeciti e di armi. Per garantire che le società siano pacifiche e inclusive,
                    L’Obiettivo 16 ha anche lo scopo di promuovere le istituzioni inclusive e lo stato di diritto, e di
                    garantire la parità di accesso alla giustizia.
                    <br />
                    <br />
                    <b>
                        Obiettivo 16: promuovere società pacifiche e inclusivi per lo sviluppo sostenibile, fornire
                        l'accesso alla giustizia per tutti e costruire istituzioni efficaci, responsabili e inclusive a
                        tutti i livelli
                    </b>
                </Modal>

                <Sdg onClick={() => renderDescription(17)} onKeyPress={() => renderDescription(17)}>
                    <img src={SDG17} alt="sdg-17" />
                </Sdg>
                <Modal visible={visible17} onOk={() => setVisible17(false)} onCancel={() => setVisible17(false)}>
                    Il successo dell'attuazione dei 17 obiettivi di sviluppo sostenibile dipende da un quadro di
                    finanziamento globale che va al di là degli impegni ufficiali di assistenza allo sviluppo. Accanto a
                    finanziamenti pubblici e privati, la sfera politica dovrebbe assicurare un maggiore contributo al
                    raggiungimento degli obiettivi in questione. Nel mese di luglio 2015, la comunità internazionale ha
                    predisposto un nuovo quadro per il finanziamento e l'attuazione dello sviluppo sostenibile.
                    L’Obiettivo 17 invita i paesi sviluppati a rinnovare il loro impegno di destinare lo 0,7% del
                    reddito lordo nazionale all'aiuto pubblico allo sviluppo. Ha lo scopo di garantire una maggiore
                    mobilitazione delle risorse interne per ridurre la dipendenza dal sostegno straniero, così come una
                    maggiore collaborazione internazionale nel campo delle scienze, tecnologia e innovazione, e la
                    promozione di un sistema commerciale multilaterale equo. L’Obiettivo 17 sostiene anche il
                    miglioramento della stabilità macroeconomica e la coerenza delle politiche nell'interesse di uno
                    sviluppo sostenibile.
                    <br />
                    <br />
                    <b>
                        Obiettivo 17: Rafforzare le modalità di attuazione e di rivitalizzare il partenariato globale
                        per lo sviluppo sostenibile
                    </b>
                </Modal>
            </SdgsContainer>
            <Description>
                <div>{`Nel settembre 2015 più di 150 leader internazionali si sono incontrati alle Nazioni Unite per contribuire allo sviluppo globale, promuovere il benessere umano e proteggere l'ambiente.`}</div>
                <div>{` La comunità degli Stati ha approvato l'Agenda 2030 per uno sviluppo sostenibile, i cui elementi essenziali sono i 17 obiettivi di sviluppo sostenibile (SDGs, Sustainable Development Goals) e i 169 sotto-obiettivi, i quali mirano a porre fine alla povertà, a lottare contro l'ineguaglianza e a crescere lo sviluppo sociale ed economico. Inoltre riprendono aspetti di fondamentale importanza per lo sviluppo sostenibile quali l'affrontare i cambiamenti climatici e costruire società pacifiche entro l'anno 2030. Gli SDG hanno validità universale, vale a dire che tutti i Paesi devono fornire un contributo per raggiungere gli obiettivi in base alle loro capacità. Spluga si basa sui Sustainable Development Goals per aiutare le aziende e le persone a misurare e migliorare il proprio impegno verso la società e l'ambiente, permettendo di valutare il contributo dato e contribuire a rendere il mondo un posto migliore.`}</div>
                <div> {`Clicca sulle icone dei 17 Goals per saperne di più!`}</div>
                <a
                    href={"https://www.aics.gov.it/home-ita/settori/obiettivi-di-sviluppo-sostenibile-sdgs/"}
                    target={"_blank"}
                >
                    {"visita la pagina ufficiale per maggiori informazioni sugli SDGs"}
                </a>
            </Description>
        </PageContainer>
    );
};

export default Sdgs;
