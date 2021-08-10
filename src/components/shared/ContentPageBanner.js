/**
 * ContentPageBanner.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 10, 2021
 */

import React from 'react'

import Media from 'react-media'

import { getElementStyleClassNames } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageBanner.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageBanner-debug.css')

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class ContentPageBanner extends React.Component {

  render() {
    if ( __TEST__ ) {
      return this.renderCore(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 640px)",
        medium: "(max-width: 1280px)",
        large: "(min-width: 1281px)"
      }}>
        {
          matches => (this.renderCore(matches))
        }
      </Media>
    );
  }

  renderCore(matches) {
    const coverImage = this.getCoverImageInstance(matches);

    const contentPageBannerContainerStyles = {
      backgroundImage: `url(${coverImage})`,
    };

    return (
      <div
        className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                              "ContentPageBannerContainer"])}
        style={contentPageBannerContainerStyles}
        data-testid="ContentPageBannerComponentTestId"
        id="ContentPageBanner"
      >
        <div className="ContentPageBannerTitleContainer">
          <p className="ContentPageBannerTitle">{this.props.title}</p>
          <hr className="ContentPageBannerTitleLineBreak" />
          <p className="ContentPageBannerSubtitle">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }

  getCoverImageInstance(matches) {
    const coverImageSizeSuffix = matches ? (matches.small ? "_S" : (matches.medium ? "_M" : "_L")) : "_L";

    const ext = ".jpg";

    const coverImageName = this.props.coverImageNamePrefix + coverImageSizeSuffix + "-min" + ext;

    let coverImage = null;

    /**
     * NOTE:
     * We don't have a context in unit test.
     */
    if (this.props.imagesContext) {
      const images = this.props.imagesContext();
      coverImage = images('./' + coverImageName);
    }

    return coverImage;
  }
}
