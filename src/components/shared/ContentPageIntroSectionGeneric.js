/**
 * ContentPageIntroSectionGeneric.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 24, 2020
 * Updated  : Aug 18, 2021
 */

import React from 'react'

import Media from 'react-media'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from './ContentPageIntroSectionTemplate'

import './ContentPageIntroSectionGeneric.css'

import getFormattedText from './TextFormatter.js'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageIntroSectionGeneric-debug.css')

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class ContentPageIntroSectionGeneric extends React.Component {

  render() {
    if ( __TEST__ ) {
      return this.renderCore(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
        large: "(min-width: 481px)"
      }}>
        {
          matches => (this.renderCore(matches))
        }
      </Media>
    );
  }

  renderCore(matches) {
    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericOuterContainer")}>
        <ContentPageIntroSectionTemplate
          title={this.props.contentPageIntro.title}
          content={this.renderContent(matches)}
        />
      </div>
    );
  }

  renderContent(matches) {
    const images = this.props.imagesContext();

    const coverImageSizeSuffix = matches ? (matches.small ? "_S" : "_L") : "_L";

    const ext = ".png";

    const coverImageName = "./" + this.props.contentPageIntro.image.filenamePrefix + coverImageSizeSuffix + "-min" + ext;

    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericInnerContainer")}>
        <div className="ContentPageIntroSectionGenericIntroTextContainer">
          <p className={getElementStyleClassName("ContentPageHeadAndSectionIntroText")}>
            {getFormattedText(this.props.contentPageIntro.content)}
          </p>
        </div>
        <div className="ContentPageIntroSectionGenericImgContainer">
          <img
            className={getElementStyleClassName("ContentPageIntroSectionGenericImg")}
            src={images(coverImageName)}
            alt={this.props.contentPageIntro.title}
          />
        </div>
      </div>
    );
  }
}
