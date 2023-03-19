import type { AppProps } from "next/app";
import AppLayout from "../component/Applayout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#111" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Theme</button><br/>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
