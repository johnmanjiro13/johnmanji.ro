import Head from "next/head";
import Image from "next/image";
import {
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "../components/container";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Card } from "../components/card";
import { TitledSecton } from "../components/titled-section";
import { Flex, FlexInitial } from "../components/flex";
import { MY_NAME, TITLE } from "../lib/constants";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Header title={TITLE} backgroundImage="/images/header.jpg" />
      <Container>
        <TitledSecton title="About me">
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
        </TitledSecton>
        <TitledSecton title="Works">
          <Flex>
            <FlexInitial>
              <Card
                image={{
                  src: "/images/gh-bump.jpg",
                  width: 642,
                  height: 276,
                  alt: "gh-bump sample image",
                }}
                heading="gh-bump"
                content="gh-bump is an extension for gh cli which bumps version of a repository."
                url="https://github.com/johnmanjiro13/gh-bump"
              />
            </FlexInitial>
            <FlexInitial>
              <Card
                heading="gh-cmcm"
                content="gh-cmcm (commit comment) is a gh extension which comments to a commit by GitHub API."
                url="https://github.com/johnmanjiro13/gh-cmcm"
              />
            </FlexInitial>
          </Flex>
        </TitledSecton>
        <TitledSecton title="Employment history">
          <ul className="list-disc pl-4">
            <li>Apr 2019 - current: software engineer at Gunosy Inc.</li>
          </ul>
        </TitledSecton>
        <TitledSecton title="Programming skills">
          <p className="mb-3">I can use</p>
          <ul className="list-disc pl-6">
            <li>Go</li>
            <li>Python</li>
            <li>Ruby / Ruby on Rails</li>
            <li>JavaScript / TypeScript</li>
            <li>React.js</li>
          </ul>
        </TitledSecton>
        <TitledSecton title="Contact">
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
        </TitledSecton>
      </Container>
    </Layout>
  );
};

export default Index;
