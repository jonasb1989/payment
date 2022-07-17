import styled from "styled-components"

export const Button = styled("button")`
  border: 1px solid ${({ isSelected }) => (isSelected ? "AE1E27" : "black")};
  background-color: #eb8a90;
  color: ${({ isSelected }) => (isSelected ? "#ffff" : "#000")};
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border: 1.5px solid white;
    color: white;
    background-color: gray;
  }
`;