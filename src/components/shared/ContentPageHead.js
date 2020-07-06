/**
 * ContentPageHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Menu } from 'semantic-ui-react'

import './ContentPageHead.css'
import './ContentPageSharedStyles.css'

import ContentPageTopNavMenuBar from './ContentPageTopNavMenuBar'
import ContentPageBanner from './ContentPageBanner'

function ContentPageHead(props) {
  return (
    <div className="ContentPageSkeletonContentContainerDimension ContentPageHeadOuterContainer">
      <div className="ContentPageHeadNavMenuBarOuterContainer">
        <ContentPageTopNavMenuBar />
      </div>
      <ContentPageBanner
        coverImage={props.pageHeadProps.coverImage}
        title={props.pageHeadProps.title}
        subtitle={props.pageHeadProps.subtitle}
      />
    </div>
  );
}

export default ContentPageHead;
