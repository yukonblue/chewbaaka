/**
 * ContentPageSubsectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

/**
 * ContentPageSubsectionTemplate
 *
 * `ContentPageSubsectionTemplate` is a template component
 * that hosts the content of each content page subsection.
 * Offers basic styling supports such as positioning and layout.
 */

import React from 'react';

import './ContentPageSubsectionTemplate.css'

function ContentPageSubsectionTemplate(props) {
  return (
    <div className="ContentPageSubsectionTemplateOuterContainer">
      <div className="ContentPageSubsectionTemplateInnerContainer">
        {props.content}
      </div>
    </div>
  );
}

export default ContentPageSubsectionTemplate;
