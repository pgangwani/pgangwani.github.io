import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import './style';

const ResumeItem = (props, context) => {
  const { theme: { colorPrimary } } = context;

  if (props.render) return props.render;
  else
    return (
      <Fragment>
        <div
          className="resume-item">
          <h3 style={{ color: colorPrimary }}>Front-end Developer, Remote</h3>
          <p><i>June/2012 - Present </i></p>
          <ul>
            <li>Designed and developed responsive marketing sites.</li>
            <li>Setup and maintained Craft and Expression Engine CMS.</li>
            <li>Focused on a balance of SEO, site speed and browser compatibility</li>
          </ul>
        </div>
    </Fragment>
    );
};

ResumeItem.contextTypes = {
  theme: PropTypes.any
};

export default ResumeItem;
