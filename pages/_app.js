import { DefaultSeo } from "next-seo";
import Header from "../components/Layouts/Header";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Moviesapp"
        titleTemplate="Millenia Movies"
        description="Find all your favourite movies and tv shows "
        canonical={process.env.NEXT_PUBLIC_DOMAIN}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
