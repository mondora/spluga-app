import React from "react";
import { PageContainer, LinkContainer, TextContainer } from "./styled";

export const Footer = () => {
    return (
        <PageContainer>
            <TextContainer>
                Copyright © 2018 mondora. All Rights Reserved. mondora s.r.l. S.B. - Via Uberto Visconti di Modrone 33 -
                20122 Milano c.f. e p. iva 03680680968 cap. soc. 105.000 i.v. - Rea n. 1694989 soggetta all’attività di
                direzione e coordinamento di TeamSystem S.p.A., codice fiscale e iscrizione presso la CCIAA di Pesaro n.
                01035310414
            </TextContainer>
            <TextContainer>
                <LinkContainer href="/privacy">Privacy policy</LinkContainer> |
                <LinkContainer href="/cookie">Cookie</LinkContainer>
            </TextContainer>
        </PageContainer>
    );
};

export default Footer;
