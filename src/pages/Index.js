import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';

const markdown = raw('../data/about.md');
const LinkRenderer = ({ ...children }) => <Link {...children} />;
const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const Index = () => (
  <Main
    description={"Syed Mahbubuz Zaman's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my web-site </Link></h2>
          <p>
            A stylistic and minimalistic portfolio website based on React and Javascript with SCSS mostly inspired by <a href="https://github.com/mldangelo/personal-site">Michael D&apos; Angelo</a>
          </p>
          <h3 data-testid="heading"><Link to="/">Find more about me</Link></h3>
          <p>(in about {count} words)</p>
          <br />
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <Personal />
    </article>
  </Main>
);

export default Index;
