import Layout from "../src/components/general/Layout";
import { CssBaseline } from "@mui/material";
import Container from '@mui/material/Container';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DIF Oaxaca</title>
      </Head>
      <Layout>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ paddingX: '0 !important' }}>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  );
}