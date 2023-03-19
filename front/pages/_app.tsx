import type { AppProps } from "next/app";
import AppLayout from "../components/Applayout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/GlobalStyle';
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {setTheme(theme === "light"? "dark" : "light");};

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Theme</button><br/>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
