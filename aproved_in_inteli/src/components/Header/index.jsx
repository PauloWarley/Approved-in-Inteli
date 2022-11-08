import React from "react";
import { NavBar, PageHeader } from "./style";

function Header() {
  
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <PageHeader>
            <title>Inteli Me Responde</title>
            <meta name="description" content="site feito por vestibulando para outros vestibulandos que queiram informações do processo seletivo."/>
            <p>inteli</p>
            <NavBar>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#quem-somos">quem somos</a></li>
                    <li><a href="#game_view">snake</a></li>
                </ul>
            </NavBar>
        </PageHeader>
    );
}

export default Header;
