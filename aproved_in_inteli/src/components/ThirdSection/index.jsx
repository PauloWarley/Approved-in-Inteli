import React, { useRef } from "react";
import { ContentContainer, Maintext, PageSection, PersonContainer, PersonText, SmallText, TextComponent } from "./style";

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

                    Assim nasceu o que você está lendo agora."
                    <span>&#127881;</span>
                </TextComponent>
                <Maintext id="quem-somos">
                    <span>Apresentando o time de milhões em 3...2...1</span>
                    <img src="./images/thirdsection.png" />
                </Maintext>
                <PersonContainer>
                    <img src="./images/paulo.png" />
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
                    <img src="./images/Keylla.png" />
                </PersonContainer>
                <PersonContainer>
                    <img src="./images/mauricio.png" />
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