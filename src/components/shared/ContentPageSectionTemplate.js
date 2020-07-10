/**
 * ContentPageSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 09, 2020
 */

/**
 * ContentPageSectionTemplate
 *
 * `ContentPageSectionTemplate` is a template component
 * that hosts the content of each content page section.
 * Offers basic styling supports such as positioning and
 * layout, as well as section head and title support.
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSectionHead from './ContentPageSectionHead'

import './ContentPageSectionTemplate.css'

function ContentPageSectionTemplate(props) {
  return (
    <div className={getElementStyleClassName("ContentPageSectionTemplateOuterContainer")}>
      <ContentPageSectionHead
        title={props.sectionConfig.intro.title}
        content={props.sectionConfig.intro.content}
      />

      <div className={getElementStyleClassName("ContentPageSectionTemplateInnerContainer")}>
        {props.sectionContent}
      </div>
    </div>
  );
}

export default ContentPageSectionTemplate;
