import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
  }
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    padding:0px;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    background-color: ${(props) => props.theme.mode === "dark" ? "	#333" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "	#333")};
  }
  input{
    background-color: ${(props) => props.theme.mode === "dark" ? "#4f4f4f" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "	#333")};
    border-color: ${(props) => (props.theme.mode === "dark" ? "#333" : "#4f4f4f")};
    line-height: 1.5;
    border:1px solid black;
    margin-right:3px;
  }
  button{
    background-color: ${(props) => props.theme.mode === "dark" ? "#4f4f4f" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "	#333")};
    border:1px solid black;
    margin-left:3px;
  }
`;

export default GlobalStyle;