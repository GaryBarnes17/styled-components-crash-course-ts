import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://twitter.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
