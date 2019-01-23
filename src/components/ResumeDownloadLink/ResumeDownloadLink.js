import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  
  return (
    <div className="resume-download" style={ {color: textPrimary }}>
        {`For detailed profile, Download my resume   `}   <i class="far fa-hand-point-right"></i> 
        <a title="Click to download Pawan's Resume" className="animated faa-horizontal" 
          href="/resume/Pawan_Gangwani_Sr_Web_Dev_v2.pdf" 
          download="Pawan_Gangwani_Sr_Web_Developer" 
          style={ { color: colorPrimary } }>
          <i class="fas animated faa-horizontal fa-file-pdf"></i>
        </a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;