import styled from "styled-components";
import Head from "next/head";
// import Footer from "../ui/footer";
import { NextPage } from "next";
import NavBar from "../ui/navbar";
import Footer from "../ui/footer";
// import NavBar from "../ui/navbar";

type DefaultLayoutProps = {
  children: React.ReactNode,
  title: string,
};

const Container = styled.div`
  text-align: center;
  padding-top: var(--nav-height);
  max-width: var(--max-width);
  margin: 0 auto;
`;

const PageContainer = styled.div`
  padding: 10px;
`

const DefaultLayout: NextPage<DefaultLayoutProps> = function ({ children, title }) {
  return (
    <Container>
      <Head>
        <title>{title}WOI by FrasNym</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content="Watermart On Image by FrasNym" />
        <meta name="description" content="Create your custom watermark on image without worrying about your data." />
        <meta name="keywords" content="watermark, watermark image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frasnym.tech/" />
        <meta property="og:title" content="Watermart On Image by FrasNym" />
        <meta property="og:description" content="Create your custom watermark on image without worriying about your data." />
        <meta property="og:image" content="https://i.ibb.co/F5pSJB3/WOI.png" />
        <meta property="og:locale" content="en_ID" />
        <meta property="og:locale:alternate" content="en_ID" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frasnym.tech/" />
        <meta property="twitter:title" content="Watermart On Image by FrasNym" />
        <meta property="twitter:description" content="Create your custom watermark on image without worriying about your data." />
        <meta property="twitter:image" content="https://i.ibb.co/F5pSJB3/WOI.png" />
        <meta name="twitter:site" content="@frasnym" />
        <meta name="twitter:creator" content="@frasnym" />
      </Head>
      <NavBar />
      <PageContainer>
        {children}
        <Footer />
      </PageContainer>
    </Container>
  );
}

export default DefaultLayout