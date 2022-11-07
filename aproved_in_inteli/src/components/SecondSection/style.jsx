import styled from "styled-components";

export const PageSection = styled.section`
    background-color: #240c54;
    color: #fff;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    width: 80%;
`

export const LineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ImgContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    position: relative;
    left: -12.5%;
    top: 0;

    img{
        width: 125%;
    }
`;

export const MainText = styled.h2`
    font-weight: 800;
    font-size: 50px;
    width: 30%;
    margin: 0;
    margin-right: 15%;
`;

export const TextComponent = styled.p`
    width: 55%;
    font-size: 30px;
    margin: 0;
    font-weight: 300;

    span{
        background-color: #ff4645;
    }

    small{
        font-size: 18px;
    }
`;

export const XComponent = styled.div`
    position: relative;
    left: -12.5%;
    top: 0;
    margin-bottom: 50px;
`

export const Counter = styled.div`
    margin-left: 15%;
    background-color: #ff4645;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const CounterInfo = styled.div`
    width: 100%;
    text-align: center;

    p{
        margin: 0;
        font-size: 50px;
        font-weight: 800;
    }
`

export const Mockup = styled.div`
    width: 125%;
    position: relative;
    left: -12.5%;
    margin-top: 100px;
    background: linear-gradient(180deg, rgba(36,12,84,1) 50%, rgba(244,244,244,1) 50%);

    display: flex;
    justify-content: center;

    img{
        width: 80%;
    }
`