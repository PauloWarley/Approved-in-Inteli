import styled from "styled-components";

export const PageHeader = styled.header`
    background: linear-gradient(90deg, rgba(45,21,97,1) 0%, rgba(188,188,196,1) 80%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 100px;
    color: #fff;
    font-weight: 600;
    font-size: 40px;
`;

export const NavBar = styled.nav`
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0;
        font-weight: 400;
        font-size: 25px;

        li{
            margin-left: 30px;
            text-shadow: 0px 2px 8px rgba(45,21,97,0.8);
        }
    }
`;