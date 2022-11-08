import React, { useRef } from "react";
import { ContentContainer, Maintext, PageSection, PersonContainer, PersonText, SmallText, TextComponent } from "./style";
import Image from "next/image";
import mockup from "../../../public/images/mockup.png"

import image_thirdsection from "../../../public/images/thirdsection.png"
import image_paulo from "../../../public/images/paulo.png"
import image_Keylla from "../../../public/images/Keylla.png"
import image_mauricio from "../../../public/images/mauricio.png"

function ThirdSection() {

    const myRef = useRef(null);

    return (
        <PageSection>
            <ContentContainer>
                <SmallText>
                    {"eu falei que foi primeira versão hein, não vale julgar (muito)."}
                </SmallText>
                <TextComponent>
                    Como foi um processo muito legal e divertido, <strong>decidimos falar sério e criar outro</strong> {"(bonito dessa vez né?)."} 
                    <br/>

                    Assim nasceu o que você está lendo agora.
                    <span>&#127881;</span>
                </TextComponent>
                <Maintext id="quem-somos">
                    <span>Apresentando o time de milhões em 3...2...1</span>
                    <Image alt="thirdsection" layout="fill" src={image_thirdsection} />
                </Maintext>
                <PersonContainer>
                    <Image alt="paulo" layout="fill" src={image_paulo} />
                    <PersonText>
                        <span>Paulo Warley</span>
                        <p>FullStack Dev, idealizador do <strong>InteliMeResponde</strong> e responsável por juntar essa equipe maravilhosa.</p>
                    </PersonText>
                </PersonContainer>
                <PersonContainer>
                    <PersonText>
                        <span>Keylla Oliveira</span>
                        <p>{"Designer UX/UI (com um pé no Front-end) e criadora de todo o design."}</p>
                    </PersonText>
                    <Image alt="Keylla" layout="fill" src={image_Keylla} />
                </PersonContainer>
                <PersonContainer>
                    <Image alt="mauricio" layout="fill" src={image_mauricio} />
                    <PersonText ref={myRef}>
                        <span>Maurício Azevedo</span>
                        <p>FullStack Dev, nosso anjo do React JS e tudo que envolva Front-end.</p>
                    </PersonText>
                </PersonContainer>
            </ContentContainer>
        </PageSection>
    );
}

export default ThirdSection;