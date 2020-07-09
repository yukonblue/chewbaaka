/**
 * ContentPageSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import ContentPageSectionHead from './ContentPageSectionHead'

import './ContentPageSectionTemplate.css'

function ContentPageSectionTemplate(props) {
  return (
    <div className="ContentPageSectionTemplateOuterContainer">
      <ContentPageSectionHead
        title={props.sectionConfig.intro.title}
        content={props.sectionConfig.intro.content}
      />

      <div className="ContentPageSectionTemplateInnerContainer">
        {props.sectionContent}
      </div>
    </div>
  );
}

export default ContentPageSectionTemplate;
