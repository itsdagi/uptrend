import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <meta httpEquiv="Cache-Control" content="max-age=31536000" /> */}
      </Head>

      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "upTrend | Find your dream home",
  description: "Property Listing NEXT.JS, Strapi app",
  keywords: "uptrend real estate",
};

