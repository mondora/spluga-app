import React from "react";

import styled from "styled-components";
import Sdg from "../../components/sdg";
import { sdgs } from "./sdgs-structure/index";

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

//11 12 13 14 15 3 4 8
const Sdgs = () => {
    return (
        <PageContainer>
            <div>{"Qual è il fine dell'SDG? Clicca sui box per conoscerli."}</div>
            <SdgsContainer>
                {sdgs.map((sdg, index) => (
                    <Sdg
                        key={index}
                        sdgIcon={sdg.sdgIcon}
                        sdgGif={sdg.sdgGif}
                        isUsed={sdg.isUsed}
                        alt={`sdg-${index}`}
                        description={sdg.description}
                    />
                ))}
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
