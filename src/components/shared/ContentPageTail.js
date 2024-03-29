/**
 * ContentPageTail.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Aug 22, 2020
 */

import React from 'react'

import { config } from './config'

import ImageCollageDriver from './ImageCollageDriver'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import ContentPageSectionTemplate from './ContentPageSectionTemplate'
import ContentPageTailPrevNextButtonNavMenu from './ContentPageTailPrevNextButtonNavMenu'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import './ContentPageSharedStyles.css'

import './ContentPageTail.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageTail-debug.css')

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
      <div className={getElementStyleClassName("ContentPageTailInnerContainer")}
      >
        {this.renderImageCollageConditionally()}
        {this.renderPrevNextPageNavButtons()}
      </div>
    );
  }

  renderImageCollageConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 1024)}
        renderContentHandler={this.renderImageCollage}
      />
    );
  }

  renderImageCollage() {
    return (
      <div className={getElementStyleClassName("ContentPageTailInnerImageCollageContainer")}>
        <ImageCollageDriver
          data={config.imageCollage}
          count={ContentPageTail._IMAGE_COLLAGE_CELL_COUNT_}
          imageWidth={ContentPageTail._IMAGE_COLLAGE_IMAGE_WIDTH_}
          imageHeight={ContentPageTail._IMAGE_COLLAGE_IMAGE_HEIGHT_}
        />
      </div>
    );
  }

  renderPrevNextPageNavButtons() {
    return (
      <div className={getElementStyleClassName("ContentPageTailInnerNavMenuContainer")}>
        <ContentPageTailPrevNextButtonNavMenu
          pageTailNavMenu={this.props.pageTailNavMenu}
        />
      </div>
    );
  }
}
