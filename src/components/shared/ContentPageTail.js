/**
 * ContentPageTail.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 12, 2020
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

  static _IMAGE_COLLAGE_CELL_COUNT_   = 4;
  static _IMAGE_COLLAGE_IMAGE_WIDTH_  = 480;
  static _IMAGE_COLLAGE_IMAGE_HEIGHT_ = 320;

  render() {
    return (
      <div
        className={getElementStyleClassNames([
                      "ContentPageSkeletonContentContainerDimension",
                      "ContentPageTailOuterContainer"])}
      >
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
        <div className={getElementStyleClassName("ContentPageTailInnerImageCollageContainer")}>
          <ImageCollageDriver
            data={config.imageCollage}
            count={ContentPageTail._IMAGE_COLLAGE_CELL_COUNT_}
            imageWidth={ContentPageTail._IMAGE_COLLAGE_IMAGE_WIDTH_}
            imageHeight={ContentPageTail._IMAGE_COLLAGE_IMAGE_HEIGHT_}
          />
        </div>
      </div>
    );
  }
}
