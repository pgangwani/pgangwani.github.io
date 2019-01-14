import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I live and work in Bangalore, India. I’m happily married to my wonderful wife Namrata. If I had to describe myself in precise, it would probably be <span className="highlight">passionate</span> and <span className="highlight">focussed</span>.
              I value a healthy work/life balance. I’m a hard worker and enjoy what I get to do everyday.
            </p>
            <p>
              Currently I’m currently working as Senior Web Developer at JCPenney. I've been here for a while and I've worked on some major self service and customer account management features targeting customers for JCPenney eCommerce site (built with react/node stack). Also, I have been actively contributing to the common devtools used by all web developers to design their pages(delivery).
              I stay close to the community and try to keep tabs with the pace at which the web is evolving. I also like to <span className="highlight">demo</span> what I learn.
            </p>
            <p>
            React-Redux, Node.js, HTML, CSS, CI/CD and <span className="highlight">devtools</span> are the main tricks up my sleeve. I am also obsessed with <span className="highlight">making the code 100% tested</span> using testing tools viz Mocha/Enzyme for React.js codebase. I believe that <span className="highlight">Agile methodology</span>, not only, helps project management but also develops a mentality of Continuous Delivery in devs.
            </p>
            <p>
              In my free time, I enjoy playing <span className="highlight">Table Tennis</span> <i  className="fas fa-table-tennis"></i> , listening to music <i class="fas fa-headphones"></i>, watching Bollywood movies <i class="fas fa-film"></i> and spending time with my family <i class="fas fa-heartbeat"></i> . Moreover, I am a <span className="highlight">foodie</span> and hence, I love exploring new restros  <i class="fas fa-utensils"></i> and cuisines whenever I get time.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".resume-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
