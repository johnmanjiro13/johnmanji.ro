import Head from 'next/head';
import Container from '../components/container';
import IntroductorySecton from '../components/introductory-section';
import Layout from '../components/layout';

import { TITLE } from '../lib/constants';

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Container>
        <IntroductorySecton title="Employment history">
          <ul className="list-disc pl-4">
            <li>Apr 2019 - current: software engineer at Gunosy Inc.</li>
          </ul>
        </IntroductorySecton>
        <IntroductorySecton title="Programming languages (frameworks)">
          <p className="mb-3">I can use</p>
          <ul className="list-disc pl-6">
            <li>Go</li>
            <li>Python</li>
            <li>Ruby / Ruby on Rails</li>
            <li>JavaScript / TypeScript</li>
            <li>Vue.js</li>
            <li>React.js</li>
          </ul>
        </IntroductorySecton>
      </Container>
    </Layout>
  );
};

export default Index;
