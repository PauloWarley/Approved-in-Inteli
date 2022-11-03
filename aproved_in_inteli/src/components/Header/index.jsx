import React from "react";
import { NavBar, PageHeader } from "./style";

function Header() {
  
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <PageHeader>
            <p>inteli</p>
            <NavBar>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#quem-somos">quem somos</a></li>
                    <li><a href="#quem-somos">apostas</a></li>
                </ul>
            </NavBar>
        </PageHeader>
    );
}

export default Header;
