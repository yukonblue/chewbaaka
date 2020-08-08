/**
 * ContentPageIntroSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 07, 2020
 */

/**
 * ContentPageIntroSectionTemplate
 *
 * `ContentPageIntroSectionTemplate` is a component that hosts
 * the introduction title and paragraph of each content page.
 *
 * Props:
 *
 *  - `title`: Text of the introduction title.
 *
 *  - `content`: Text of the introduction paragraph.
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageIntroSectionTemplate.css'

/* eslint-disable import/first */
if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageIntroSectionTemplate-debug.css')

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class ContentPageIntroSectionTemplate extends React.Component {

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="ContentPageIntroSectionTemplateOuterContainer">
        <div className={getElementStyleClassName("ContentPageIntroSectionTemplateInnerContainer")}>
          <div className={getElementStyleClassName("ContentPageIntroSectionTemplateTitleContainer")}>
            <h1 className={getElementStyleClassName("ContentPageIntroSectionTemplateTitle")}>
              {this.props.title}
            </h1>
          </div>
          <div className={getElementStyleClassName("ContentPageIntroSectionTemplateContentContainer")}>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
