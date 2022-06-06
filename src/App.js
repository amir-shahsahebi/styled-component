// import logo from "./logo.svg";
import "./App.css";
// import "./style.css";
// import StyledButton, {
//   FancyButton,
//   SubmitButton,
//   AnimatedLogo,
//   DarkButton,
// } from "./components/Button/Button";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
import BasicTable from "./components/BasicTable";

// const theme = {
//   dark: {
//     primary: "#000",
//     text: "#fff",
//   },
//   light: {
//     primary: "#fff",
//     text: "#000",
//   },
//   fontFamily: "Segoe UI",
// };

// const GlobalStyle = createGlobalStyle`
// button {
//   font-family: 'Roboto';
//   // we can also give the style from theme provider as props
//   font-family: ${(props) => props.theme.fontFamily};
// }
// `;

// const stylingTest = (
//   <ThemeProvider theme={theme}>
//     <GlobalStyle />
//     <div className="App">
//       {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       {/* <button>Button</button> */}
//       <AnimatedLogo src={logo} alt="logo" />
//       <StyledButton>Styled Button</StyledButton>
//       <div>
//         <br />
//       </div>
//       <StyledButton variant="outline">Styled Button</StyledButton>
//       <div>
//         <br />
//       </div>
//       <FancyButton as="a">Fancy Button</FancyButton>
//       <div>
//         <br />
//       </div>
//       <SubmitButton>Submit Button</SubmitButton>
//       <div>
//         <br />
//       </div>
//       <DarkButton>Dark Theme</DarkButton>
//     </div>
//   </ThemeProvider>
// );

function App() {
  return (
    <div className="App">
      <BasicTable />
    </div>
  );
}

export default App;
