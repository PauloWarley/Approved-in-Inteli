import styled from "styled-components";

export const PageSection = styled.section`
    background-color: #f4f4f4;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 80%;
`;

export const WelcomeText = styled.h2`
    font-size: 40px;
    font-weight: 400;
    margin: 10px 0;
    width: 60%;
`;

export const SmallText = styled.small`
    font-size: 16px;
`;

export const LineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &:nth-child(1){
        margin-top: 50px;
    }
`;

export const TextComponent = styled.p`
    font-size: 32px;
    width: 100%;
    margin-right: 20%;
`;

export const InputGroup = styled.div`
    background-color: rgba(136, 83, 188, 0.5);
    color: #fff;
    border-radius: 23.5px;
    display: flex;
    align-items: center;
`

export const TextInput = styled.input`
    background: transparent;
    border: 0;
    color: #fff;
    width: 230px;
    font-size: 22px;
    padding: 10px 20px;
    font-family: 'Montserrat', 'Sans-Serif';

    &:focus{
        outline: none;
    }

    ::placeholder{
        color: #fff;
        opacity: 1;
    }
`

export const SubmitButton = styled.button`
    background-color: #fff;
    height: 47px;
    border-radius: 0 23.5px 23.5px 0;
    color: #8853BC;
    border: 0;
    font-weight: 800;
    font-size: 25px;
    padding: 0 20px;
    font-family: 'Montserrat', 'Sans-Serif';
    display: flex;
    align-items: center;

    &:hover{
        background-color: #8853BC;
        color: #fff;
    }
`;

export const SliderText = styled.div`
    margin-left: 80%;
    margin-bottom: 50px;
    text-align: center;

    svg{
        color: #FF4645;
    }
`;