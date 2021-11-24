import React from 'react';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

// uses babel to load contents of file
// Make all hrefs react router links

const About = () => (
  <Main
    title="About"
    description="Learn about Syed Mahbubuz Zaman"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>Feel free &#x1F49C; to contact me at any of these following links: </h2>
          <ContactIcons />
        </div>
      </header>
    </article>
  </Main>
);

export default About;
