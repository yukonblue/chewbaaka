/**
 * ContentPageSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Aug 18, 2020
 */

/**
 * ContentPageSectionTemplate
 *
 * `ContentPageSectionTemplate` is a template component
 * that hosts the content of each content page section.
 * Offers basic styling supports such as positioning and
 * layout, as well as section head and title support.
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSectionHead from './ContentPageSectionHead'

import './ContentPageSectionTemplate.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSectionTemplate-debug.css')

export default function ContentPageSectionTemplate(props) {
  return (
    <article className={getElementStyleClassName("ContentPageSectionTemplateOuterContainer")}>
      <ContentPageSectionHead
        title={props.sectionConfig.intro.title}
        content={props.sectionConfig.intro.content}
      />

      {props.sectionContent}
    </article>
  );
}
