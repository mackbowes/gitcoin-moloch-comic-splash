import Head from "next/head";
import { Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import toast from "react-hot-toast";

export default function Home() {
  const CopyAddress = async () => {
    const res = await navigator.clipboard.writeText("ADDRESS");
    console.log(res);
    toast.success("Address In Clipboard");
  };

  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `black`,
        alignItems: `center`,
        padding: `5vmin`,
        fontFamily: `'Uncial Antiqua', serif`,
        gap: `5vmin`,
        scrollbarWidth: `none`,
      }}
      css={{
        "&::-webkit-scrollbar": { display: `none`, width: `none` },
      }}
      className="noScrollbar"
    >
      <VideoComponent />
      <Box
        sx={{
          minHeight: `5px`,
          width: `clamp(20px, 50ch, 50vw)`,
          margin: `1vmin auto`,
          backgroundColor: ` #D44D6E`,
        }}
      ></Box>
      <Heading
        sx={{
          fontFamily: `'Uncial Antiqua', serif`,
          color: `white`,
          fontSize: `4vmax`,
          textShadow: `0px 0px 8px #D44D6E`,
        }}
      >
        Browse Art
      </Heading>
      <Box
        sx={{
          minHeight: `5px`,
          width: `clamp(20px, 50ch, 50vw)`,
          margin: `1vmin auto`,
          backgroundColor: ` #D44D6E`,
        }}
      ></Box>
      <Box
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >
        <Heading
          sx={{
            fontFamily: `'Uncial Antiqua', serif`,
            color: `white`,
            fontSize: `3vmax`,
            textShadow: `0px 0px 8px #D44D6E`,
          }}
        >
          Scan qr for POAP
        </Heading>
        <Box sx={{ minHeight: `4vh` }}></Box>
        <Image src="/qrcode.svg" alt="POAP Claim QR Code" draggable="false" />
      </Box>
      <Box
        sx={{
          minHeight: `5px`,
          width: `clamp(20px, 50ch, 50vw)`,
          margin: `1vmin auto`,
          backgroundColor: ` #D44D6E`,
        }}
      ></Box>
      <Box
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >
        <Button
          sx={{
            backgroundColor: `#D44D6E`,
            color: `black`,
            fontSize: `2vmax`,
            padding: `1ex 1em`,
            height: `auto`,
          }}
          _hover={{
            backgroundColor: `white`,
            transform: `translateY(-8px)`,
            boxShadow: `0px 8px 0px #D44D6E`,
          }}
          onClick={() => CopyAddress()}
        >
          Donate
        </Button>
        <Text
          sx={{
            color: `white`,
            maxWidth: `40ch`,
            margin: `2ex`,
            fontFamily: `'Texturina', serif`,
          }}
        >
          Clicking &apos;Donate&apos; will copy a multisig address to your
          clipboard. Transfer whichever tokens you like there from your wallet.
        </Text>
      </Box>
    </Box>
  );
}
