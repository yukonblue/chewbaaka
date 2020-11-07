/**
 * ContentPageIntroSectionGeneric.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 24, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from './ContentPageIntroSectionTemplate'

import './ContentPageIntroSectionGeneric.css'

import getFormattedSpecialText from './TextFormatter.js'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageIntroSectionGeneric-debug.css')

export default class ContentPageIntroSectionGeneric extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericOuterContainer")}>
        <ContentPageIntroSectionTemplate
          title={this.props.contentPageIntro.title}
          content={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    const images = this.props.imagesContext();
    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericInnerContainer")}>
        <div className="ContentPageIntroSectionGenericIntroTextContainer">
          <p className={getElementStyleClassName("ContentPageHeadAndSectionIntroText")}>
            {getFormattedSpecialText(this.props.contentPageIntro.content)}
          </p>
        </div>
        <div className="ContentPageIntroSectionGenericImgContainer">
          <img
            className={getElementStyleClassName("ContentPageIntroSectionGenericImg")}
            src={images("./" + this.props.contentPageIntro.image.filename)}
            alt={this.props.contentPageIntro.title}
          />
        </div>
      </div>
    );
  }
}
