import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";

import { Works } from "./Works";

import { Container } from "@/components/common/Container";
import { Header } from "@/components/common/Header";
import { TitledSecton } from "@/components/common/TitledSection";
import { MY_NAME, TITLE } from "@/constants/global";

export const metadata: Metadata = {
  title: TITLE,
};

export function Index() {
  return (
    <>
      <div className="min-h-screen">
        <Header title={TITLE} backgroundImage="/images/header.jpg" />
        <Container>
          <TitledSecton title="About me">
            <div className="flex flex-wrap">
              <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt={MY_NAME}
                className="rounded-full"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <div className="ml-4 mt-4">
                <h2 className="text-2xl mb-2">{MY_NAME}</h2>
                <p>
                  I am a software engineer working in Tokyo, Japan and I am
                  called Johnmanjiro.
                  <br />
                  I graduated Kurume NCT and transferred to Tsukuba university.
                  <br />
                  After dropping out of graduate school, I started working as a
                  software engineer at Gunosy inc.
                </p>
              </div>
            </div>
          </TitledSecton>
          <Works />
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
            <div className="flex flex-row">
              <a href="https://github.com/johnmanjiro13">
                <FontAwesomeIcon icon={faGithub} className="h-9" />
              </a>
              <a href="https://twitter.com/johnmanjiro13" className="ml-10">
                <FontAwesomeIcon icon={faTwitter} className="h-9" />
              </a>
              <a
                href="https://www.facebook.com/johnmanjiro13"
                className="ml-10"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-9" />
              </a>
              <a href="https://johnmanjiro13.hatenablog.com/" className="ml-10">
                <FontAwesomeIcon icon={faBlog} className="h-9" />
              </a>
            </div>
          </TitledSecton>
        </Container>
      </div>
    </>
  );
}
