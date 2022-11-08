import React, { useState } from "react";
import {ProjectMonitor, ContentContainer, FormComponent, InputGroup, LineWrapper, PageSection, SliderText, SmallText, SubmitButton, TextComponent, TextInput, WelcomeText } from "./style";
// import MyIcon from "./../../images/firstsection.svg";
import { AiOutlineSend, AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";

function FirstSection() {

    const [number, setNumber] = useState('');
    const [modal, setModal] = useState('')
    const [statusProject, setStatusProject] = useState({})

    async function getProjectMonitor(){
      var response = (await axios.get('/api/getprojectstatus')).data.response[0]
      setStatusProject(response)
    }

    function modalConclusion(id){
      var texto = [
        'Cadastro Realizado Com Sucesso!',
        'Erro ao Cadastrar!',
        'Número já Cadastrado!'
      ]
  
      return(
        <div id={'background'} style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(20,20,20, 0.4)',
          display: 'flex',
          flexDirection: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5px'
        }} onClick={(e)=> e.target.id == 'background'?setModal(<></>):''}>
          <div style={{
            width: '40%',
            height: '20%',
            backgroundColor: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            fontFamily: "'Courier New', Courier, monospace",
            color: '#2c263d',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px'
          }}>
            {texto[id]}
          </div>
        </div>
      )
    }
  
    async function sendPhone(){
      var response = await axios.post('/api/createuser', {number})
      if ( response.status == 200){
        setModal(modalConclusion(2))
      }
      if ( response.status == 201){
        setModal(modalConclusion(0))
      }
      if ( response.status == 203){
        setModal(modalConclusion(1))
      }
  
    }

    useEffect(() => {
      getProjectMonitor()
    }, 1)

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
                    {/* <MyIcon /> */}
                </LineWrapper>
                <LineWrapper>
                    <TextComponent>
                        {"Se você também está morrendo de ansiedade e quer ser avisado(a) assim que a página da Dorothy mudar, coloca seu número aqui ó:"}
                    </TextComponent>
                    <InputGroup>
                        <TextInput type="text" placeholder="(00) 00000-0000" onChange={(e) => setNumber(e.target.value)}/>
                        <SubmitButton onClick={() => sendPhone()} ><AiOutlineSend onClick={() => sendPhone()} /></SubmitButton>
                    </InputGroup>
                </LineWrapper>
                <LineWrapper>
                    <SliderText>
                        <p>vem descobrir como esse babado aconteceu</p>
                        <AiOutlineArrowDown size={25} />
                    </SliderText>
                </LineWrapper>
            </ContentContainer>
            {modal}
            <ProjectMonitor>
              <table>
                <thead>
                  <tr>
                    <th>Vagas</th>
                    <th>Incrições</th>
                    <th>Restante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{statusProject?.vagas}</td>
                    <td>{statusProject?.inscricoes}</td>
                    <td>{statusProject?.vagas - statusProject?.inscricoes}</td>
                  </tr>
                </tbody>
              </table> 
              <br/>
              <div><span>Saúde & Bem-Estar : <strong>{statusProject?.saude}</strong></span></div><br/>
              <div><span> Clima : <strong>{statusProject?.clima}</strong> </span></div><br/>
              <div><span> Segurança Urbana : <strong>{statusProject?.seguranca}</strong></span></div><br/>
              <small>{moment(statusProject?.createdDate).format('hh:mm D, MMM, YYYY')}</small><br/>
            </ProjectMonitor>

        </PageSection>
    );
}

export default FirstSection;