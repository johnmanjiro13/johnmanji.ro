import Head from 'next/head';
import Image from 'next/image';
import {
  faGithub,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import IntroductorySecton from '../components/introductory-section';
import { MY_NAME, TITLE } from '../lib/constants';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Header title={TITLE} backgroundImage="/images/header.jpg" />
      <Container>
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
                I am a software engineer working in Tokyo, Japan and I am called
                Johnmanjiro.
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
        <IntroductorySecton title="Contact">
          <div className="text-4xl">
            <a href="https://github.com/johnmanjiro13">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/johnmanjiro13" className="ml-10">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/johnmanjiro13" className="ml-10">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://johnmanjiro13.hatenablog.com/" className="ml-10">
              <FontAwesomeIcon icon={faBlog} />
            </a>
          </div>
        </IntroductorySecton>
      </Container>
    </Layout>
  );
};

export default Index;
