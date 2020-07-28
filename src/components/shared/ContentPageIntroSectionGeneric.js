/**
 * ContentPageIntroSectionGeneric.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 24, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from './ContentPageIntroSectionTemplate'

import './ContentPageIntroSectionGeneric.css'

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
        <img
          className={getElementStyleClassName("ContentPageIntroSectionGenericImg")}
          src={images("./" + this.props.contentPageIntro.image.filename)}
          alt={this.props.contentPageIntro.title}
          style={this.props.contentPageIntro.image.offset}
        />
        <p className={getElementStyleClassName("ContentPageHeadAndSectionIntroText")}>
          {this.props.contentPageIntro.content}
        </p>      
      </div>
    );
  }
}
