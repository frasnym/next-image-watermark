import styled from "styled-components";
import Head from "next/head";
// import Footer from "../ui/footer";
import { NextPage } from "next";
import NavBar from "../ui/navbar";
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
      {/* <Head>
        <title>{title} | FrasNym</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta name="description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta name="keywords" content="nyoman frastyawan, frasnym, frasnym portfolio, frasnym developer, frasnym freelance" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frasnym.tech/" />
        <meta property="og:title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta property="og:description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta property="og:image" content="https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg" />
        <meta property="og:locale" content="en_ID" />
        <meta property="og:locale:alternate" content="en_ID" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frasnym.tech/" />
        <meta property="twitter:title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta property="twitter:description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg" />
        <meta name="twitter:site" content="@frasnym" />
        <meta name="twitter:creator" content="@frasnym" />
      </Head> */}
      <NavBar />
      <PageContainer>
        {children}
      </PageContainer>
    </Container>
  );
}

export default DefaultLayout