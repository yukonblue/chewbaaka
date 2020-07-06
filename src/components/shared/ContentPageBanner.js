/**
 * ContentPageBanner.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

// import { Header } from 'semantic-ui-react'

import './ContentPageSharedStyles.css'
import './ContentPageBanner.css'

function ContentPageBanner(props) {
  const contentPageBannerContainerStyles = {
    backgroundImage: `url(${props.coverImage})`,
  };

  return (
    <div className="ContentPageSkeletonContentContainerDimension ContentPageBannerContainer" style={contentPageBannerContainerStyles}>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
}

export default ContentPageBanner;
