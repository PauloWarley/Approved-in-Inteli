import styled from "styled-components";

export const PageSection = styled.section`
    background-color: #f4f4f4;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`;

export const ContentContainer = styled.div`
    width: 80%;
    position: relative;
`;

export const TextComponent = styled.p`
    font-size: 30px;

    span{
        font-size: 100px;
    }
`

export const SmallText = styled.small`
    font-size: 16px;
    display: block;
    margin: 30px 0;
`;

export const Maintext = styled.h2`
    padding: 70px 0 70px 30px;
    background-color: #ff4645;
    color: #fff;
    display: flex;
    width: 90%;
    position: relative;
    margin-bottom: 100px;
    
    span{
        display: block;
        font-size: 48px;
        font-weight: 600;
        width: 35%;
    }

    img{
        position: absolute;
        right: -7.5%;
        bottom: -7.5%;
    }
`

export const PersonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 40%;
        height: 40%;
    }
`;

export const PersonText = styled.div`
    span{
        font-weight: 600;
        font-size: 48px;
    }

    P{
        strong{
            color: #240c54;
        }
    }

    width: 45%;
    font-size: 36px;
`