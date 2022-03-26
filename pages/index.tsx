import Head from 'next/head';
import Image from 'next/image';

import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import IntroductorySecton from '../components/introductory-section';
import { MY_NAME, TITLE } from '../lib/constants';

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Container>
        <Header title={TITLE} backgroundImage="/images/header.jpg" />
        <IntroductorySecton title="About me">
          <div className="flex flex-wrap">
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={MY_NAME}
              className="rounded-full"
            />
            <div className="ml-4 mt-4">
              <h2 className="text-2xl mb-2">{MY_NAME}</h2>
              <p>
                I am a software engineer working in Tokyo.
                <br />
                I graduated Kurume NCT and transferred to Tsukuba university.
                <br />
                After dropping out of graduate school, I started working as a
                software engineer at Gunosy inc.
              </p>
            </div>
          </div>
        </IntroductorySecton>
        <IntroductorySecton title="Employment history">
          <ul className="list-disc pl-4">
            <li>Apr 2019 - current: software engineer at Gunosy Inc.</li>
          </ul>
        </IntroductorySecton>
        <IntroductorySecton title="Programming skills">
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
