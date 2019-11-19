import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import spLogo from "../../static/singlepoint-main.png";

import SEO from "../components/site-chrome/seo";
import theme from "../theme";

const headerFooterStyles = css`
  background-color: ${theme.colors.headerFooterBackground};
  font-size: 1.25rem;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
  color: #1a2b35;
  font-family: "Lato", sans-serif;
`;
const Header = styled.header`
  padding: 0.5em;
  top: 0;
  ${headerFooterStyles}
  color: #1A2B35;
  font-family: "Lato", sans-serif;

  a {
    color: ${theme.colors.link};
    display: flex;
    flex-direction: row;
    line-height: 26px;

    svg {
      display: block;
      height: 30px;
      margin-right: 0.5em;
    }
  }
`;
const Footer = styled.footer`
  bottom: 0;
  padding: 0 0 1em 0;
  ${headerFooterStyles}
`;
const Separator = styled.hr`
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    left,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: #fdcf02;
  border: 0;
  display: block;
  height: 3px;
  margin: 0 0 1em;
`;

const Main = styled.main`
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  color: #1a2b35;
  font-family: "Lato", sans-serif;
  position: relative;
`;

const P = styled.p`
  display: inline-block;
  font-size: inherit;
  font-family: "Lato", sans-serif;
  margin-top: 0;
  margin-right: auto;
`;
const FooterByline = styled.p`
  font-size: inherit;
  font-weight: normal;
  margin: 0;
  text-align: center;
  font-family: "Lato", sans-serif;
`;
export default ({ header = "true", children }) => (
  <>
    <SEO
      title="Workshop Slides"
      keywords={["workshop", "javascript", "accessibility", "react"]}
    />
    {header === "true" ? (
      <Header className="header">
        <P>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 100 125"
            >
              <title>back arrow</title>
              <path d="M42.7 32.7l-.2-15.8c0-1-.6-1.8-1.5-2.2-.9-.4-1.9-.3-2.7.4L2 45.8c-.6.5-.9 1.2-.9 1.9s.3 1.4.9 1.9l37.2 30c.5.4 1 .6 1.6.6 1.4 0 2.5-1.1 2.5-2.5v-.3L43.1 62h1.4c18.2 0 38.3 2.7 49.8 22.4.5.8 1.3 1.2 2.2 1.2.2 0 .4 0 .7-.1 1.1-.3 1.8-1.3 1.8-2.4-.1-8.2-3.4-20.6-12.2-31.2-7.3-8.5-20.6-18.6-44.1-19.2zm1.7 24.2h-3.9c-.7 0-1.3.3-1.8.8s-.7 1.1-.7 1.8l.2 12.9L7.5 47.6l30.1-25.4.2 12.9c0 1.4 1.1 2.5 2.5 2.5h.2c34.6 0 47.9 20.9 51.9 35.7-13-14.2-31.2-16.4-48-16.4z" />
            </svg>
            Home
          </a>
        </P>
      </Header>
    ) : null}
    <Main className="main">{children}</Main>
    <Footer css={headerFooterStyles} className="footer">
      <Separator />
      <FooterByline>
        Proven components or traditional development ~{" "}
        <span>
          by{" "}
          <a href="https://www.linkedin.com/in/nialljoemaher/">Niall Maher</a>
        </span>
        <img
          src={spLogo}
          alt="singlepoint circle"
          style={{
            height: "2em",
            padding: "0 20px",
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translate(0, -50%)"
          }}
        />
      </FooterByline>
    </Footer>
  </>
);
