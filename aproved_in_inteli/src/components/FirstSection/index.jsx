import React, { useState } from "react";
import { ContentContainer, FormComponent, InputGroup, LineWrapper, PageSection, SliderText, SmallText, SubmitButton, TextComponent, TextInput, WelcomeText } from "./style";
import MyIcon from "./../../images/firstsection.svg";
import { AiOutlineSend, AiOutlineArrowDown } from "react-icons/ai";


function FirstSection() {

    const [number, setNumber] = useState('');


    return (
        <PageSection id="home">
            <ContentContainer>
                <LineWrapper>
                    <WelcomeText>
                        {"Olá candidato(a), bem-vindo à página de resultado por wpp*"}
                        <SmallText>
                            <br/>{"*WhatsApp man :)"}
                        </SmallText>
                    </WelcomeText>
                    <MyIcon />
                </LineWrapper>
                <LineWrapper>
                    <TextComponent>
                        {"Se você também está morrendo de ansiedade e quer ser avisado(a) assim que a página da Dorothy mudar, coloca seu número aqui ó:"}
                    </TextComponent>
                    <InputGroup>
                        <TextInput type="text" placeholder="(00) 00000-0000" onChange={(e) => setNumber(e.target.value)}/>
                        <SubmitButton><AiOutlineSend /></SubmitButton>
                        {console.log(number)}
                    </InputGroup>
                </LineWrapper>
                <LineWrapper>
                    <SliderText>
                        <p>vem descobrir como esse babado aconteceu</p>
                        <AiOutlineArrowDown size={25} />
                    </SliderText>
                </LineWrapper>
            </ContentContainer>
        </PageSection>
    );
}

export default FirstSection;