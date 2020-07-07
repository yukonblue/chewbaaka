/**
 * ContentPageSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

/**
 * ContentPageSectionTemplate
 *
 * `ContentPageSectionTemplate` is a template component
 * that hosts the content of each content page section.
 * Offers basic styling supports such as positioning and layout.
 */

import React from 'react';

import './ContentPageSectionTemplate.css'

function ContentPageSectionTemplate(props) {
  return (
    <div className="ContentPageSectionTemplateOuterContainer">
      <div className="ContentPageSectionTemplateInnerContainer">
        {props.content}
      </div>
    </div>
  );
}

export default ContentPageSectionTemplate;
