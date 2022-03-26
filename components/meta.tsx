import Head from 'next/head';
import { TITLE } from '../lib/constants';

const Meta: React.FC = () => {
  return (
    <Head>
      <meta name="description" content="The page about Johnmanjiro" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@johnmanjiro13" />
    </Head>
  );
};

export default Meta;
