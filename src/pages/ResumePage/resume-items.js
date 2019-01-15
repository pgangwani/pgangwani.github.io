import React from 'react';

export default [{
  name: 'JCPenney',
  render: (
    <div className="resume-item">
          <h3>Senior Web Developer, JCPenney</h3>
          <p><i>Jul/2017 - Present</i></p>
          <ul>
            <li>Leading the development of Customer Account Management tools for JCPenney customers</li>
            <li>Focus on building account microsites on JCPenney eCommerce using micro-frontend architecture </li>
            <li>Actively contributing to the common devtools used by other devs/ microsites</li>
            <li>Focus on modern JavaScript and quality code, 100% linted &amp; code coverage</li>
            <li>Focus to adapt new upgrades from open source and educate devs</li>
          </ul>
    </div>
  )
}, {
  name: 'Education',
  render: (
    <div className="resume-item">
          <h2>Education</h2>
          <p>Nagpur University</p>
          <p>Bachelors of Engineering</p>
          <p><i>2008-2012</i></p>
          <p>Activities and Societies: Technology Club</p>
      </div>
  )
}, {
  name: 'Skills',
  render: (
    <div className='resume-item'>
      <h2>Skills</h2>
      <div className="skills-list">
        <div>JavaScript</div>
        <div>ES6</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>React</div>
        <div>Redux</div>
        <div>Webpack</div>
        <div>Git</div>
        <div>Node</div>
        <div>Express</div>
        <div>Mocha/Chai &amp; Enzyme Testing</div>
        <div>Agile development</div>
        <div>CI/CD</div>
      </div>
    </div>
  )
}]