import React from "react";
import Image from "next/image"
import { PageSection, PinkCard, PurpleCard, WarningComponent } from "./style";
import { CiWarning } from "react-icons/ci";
import image_curver_arrow from "../../../public/images/curver-arrow.png";

function FourthSection(){
    return(
        <PageSection>
            <PinkCard>
                <p>E aí, gostou? Se sim, quer nos ajudar a melhorar com sua opinião?</p>
            </PinkCard>
            <Image alt="curver-arrow" layout="fill" src={image_curver_arrow} />
            <PurpleCard>
                <p>
                    Só clicar <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/3fYuLesZi3rRkCmZ6">aqui</a> que você será redirecionado ao nosso forms. Gratidão {":)"}
                </p>
            </PurpleCard>
            <WarningComponent>
                <CiWarning size={100}/>
                <p>Atenção, nosso site é independente e não possui vínculo com o Inteli!</p>
            </WarningComponent>
        </PageSection>
    );
}

export default FourthSection;