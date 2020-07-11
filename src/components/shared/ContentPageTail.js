/**
 * ContentPageTail.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import { config } from './config'

import ImageCollageDriver from './ImageCollageDriver'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import ContentPageSectionTemplate from './ContentPageSectionTemplate'

import './ContentPageTail.css'
import './ContentPageSharedStyles.css'

export default class ContentPageTail extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension", "ContentPageTailOuterContainer"])}>
        <ContentPageSectionTemplate
          sectionConfig={{
            intro: {
              title: "Before You Go",
            }
          }}
          sectionContent={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("ContentPageTailInnerContainer")}>
        <ImageCollageDriver
          data={config.imageCollage}
          min={5}
        />
      </div>
    );
  }
}
