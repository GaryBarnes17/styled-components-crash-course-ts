import styled from "styled-components";

interface ButtonInterface {
  bg?: string;
  color?: string;
}

export const Button = styled.button<ButtonInterface>`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#000000"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
