import React from "react";

import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button bg="#ff0099" color="#fff">
            Get Started For Free
          </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur, itaque. Temporibus beatae atque explicabo. Nulla
              accusamus quia vel nam necessitatibus.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started for Free
            </Button>
          </div>
          <div>
            <Image src="./images/illustration-mockups.svg" />
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
