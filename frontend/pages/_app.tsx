import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <Navbar route={router.pathname} />
      {/* Add top margin to main content to avoid hiding under navbar */}
      <div style={{ marginTop: 64 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
