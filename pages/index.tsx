import Head from 'next/head';
import Layout from '../components/layout';

import { TITLE } from '../lib/constants';

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>Johnmanji.ro</h1>
    </Layout>
  );
};

export default Index;
