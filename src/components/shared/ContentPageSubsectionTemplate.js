/**
 * ContentPageSubsectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
 */

/**
 * ContentPageSubsectionTemplate
 *
 * `ContentPageSubsectionTemplate` is a template component
 * that hosts the content of each content page subsection.
 * Offers basic styling supports such as positioning and layout.
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionTemplate.css'

function ContentPageSubsectionTemplate(props) {
  return (
    <div className={getElementStyleClassName("ContentPageSubsectionTemplateOuterContainer")}>
      <div className={getElementStyleClassName("ContentPageSubsectionTemplateInnerContainer")}>
        <h3 className={getElementStyleClassName("ContentPageSubsectionTitle")}>{props.title}</h3>
        {props.content}
      </div>
    </div>
  );
}

export default ContentPageSubsectionTemplate;
