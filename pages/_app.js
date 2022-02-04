import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Toaster />
    </ChakraProvider>
  );
}

export default MyApp;
