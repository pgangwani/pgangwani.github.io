import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import ResumeItem from '@components/ResumeItem/ResumeItem';
import resumeitems from './resume-items';
import './style.scss';

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, bgPrimary, textPrimary  }
  } = context;

  return (
      <div className="resume-page" style={{ backgroundColor: bgPrimary }}>
        <div className="content-grid">
          <h1 style={{ color: colorPrimary }}>Resume</h1>
          <div className="resume-wrapper">
          <style jsx="true">
            {`
              .resume-item {
                color: ${textPrimary};
              }
              .resume-item h3, .resume-item h2 {
                color: ${colorPrimary};
              }
            `}
          </style>
          {resumeitems.map((item, i) => (
            <ResumeItem render={item.render} key={i} />
          ))}
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
