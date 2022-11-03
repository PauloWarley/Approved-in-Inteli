import styled from "styled-components";

export const PageSection = styled.section`
    background-color: #f4f4f4;
    padding-top: 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-size: 36px;
    font-weight: 600;

    img{
        width: 25%;
    }
`;

export const PinkCard = styled.div`
    width: 60%;
    background-color: #FF4645;

    p{
        margin-left: 30%;
        margin-right: 5%;
    }
`

export const PurpleCard = styled.div`
    width: 80%;
    margin-top: 50px;
    background-color: #8853BC;
    margin-left: 50%;
    padding: 20px;
    padding-right: 10%;
    padding-left: 5%;
    font-weight: 400;

    a{
        text-decoration: underline;
    }
`;

export const WarningComponent = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 100px 0;

    svg{
        color: red;
        width: 100%;
    }

    p{
        color: #000;
        width: 50%;
        text-align: center;
        margin: 0 auto;
    }
`;