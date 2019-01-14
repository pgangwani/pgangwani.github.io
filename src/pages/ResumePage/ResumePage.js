import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';

import './style.scss';

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, bgPrimary, textPrimary  }
  } = context;

  return (
    <div className="resume-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Resume</h1>
        <div className="portfolio-wrapper" style={{ color: textPrimary }}>
          <p> This is coming soon.. Stay tuned</p> 
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;
