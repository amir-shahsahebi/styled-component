import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#FFF")};
  }
`;
// for extends a styled component we use:
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(45deg, blue, red);
  border: none;
  /* color: red; */
`;

// we can use attribute and aldo pass the props to it
export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4saf50"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

// for using animation we can use:
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

// #########################

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
