import styled from "styled-components";

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
