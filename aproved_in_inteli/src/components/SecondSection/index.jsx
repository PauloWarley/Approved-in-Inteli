import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { ContentWrapper, ImgContainer, LineWrapper, MainText, PageSection, TextComponent, XComponent, Counter, CounterInfo, Mockup } from "./style";
import Image from "next/image";
import image_rounded_arabesque from "../../../public/images/rounded-arabesque.png";
import image_x from "../../../public/images/x.png"
import mockup from "../../../public/images/mockup.png"

function SecondSection() {

    return (
        <PageSection>
            <ContentWrapper>
                <ImgContainer>
                    <Image alt="rounded-arabesque" src={image_rounded_arabesque} />
                </ImgContainer>
                <LineWrapper>
                    <MainText>
                        Ansiedade, um sonho e tempo livre.
                    </MainText>
                    <TextComponent>
                        Isso era tudo que três devs aplicantes tinham e assim, o <strong>#InteliMeResponde</strong> nasceu. <br/><br/>
                        Um site para que o candidato coloque seu WhatsApp e seja avisado, junto de uma frase fofa, óbvio, assim que a página da nossa querida <strong>Dorothy</strong> mudar.
                    </TextComponent>
                </LineWrapper>
                <XComponent>
                    <Image alt="x" src={image_x} />
                </XComponent>
                <LineWrapper>
                    <TextComponent>
                        <strong>A primeira versão foi 100% feita na base da brincadeira e da velocidade.</strong> {"Confesso que nem ficou tão bom (a designer ainda tá aprendendo css)."} <br/> <br/>
                        <span>Depois de 8h de muito código e 13 usuários</span>, voilà, primeiro protótipo feito. <br/>
                        <small>Esse aqui embaixo u.u</small>
                    </TextComponent>
                    <Counter>
                        <CounterInfo>
                            <p>
                                <CountUp
                                    start={0}
                                    end={13}
                                    duration={2}
                                >
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                                </CountUp>
                            </p>
                            <span>Usuários cadastrados</span>
                        </CounterInfo>
                        <CounterInfo>
                            <p>
                                <CountUp
                                start={0}
                                end={8}
                                duration={1}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <span>Horas de trabalho</span>
                        </CounterInfo>
                    </Counter>
                </LineWrapper>
                <Mockup>
                    <Image alt="mockup" src={mockup} />
                </Mockup>
            </ContentWrapper>
        </PageSection>
    );
}

export default SecondSection;