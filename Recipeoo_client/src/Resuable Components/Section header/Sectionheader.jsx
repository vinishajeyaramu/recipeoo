import React from 'react';
import './Sectionheader.css'; 

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className='heading'>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
