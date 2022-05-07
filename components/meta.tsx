import Head from "next/head";

import { SITE_URL, TITLE } from "../lib/constants";

const description = "The page about Johnmanjiro";

export const Meta: React.FC = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@johnmanjiro13" />
    </Head>
  );
};
