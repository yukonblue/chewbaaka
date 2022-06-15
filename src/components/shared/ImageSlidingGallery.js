/**
 * ImageSlidingGallery.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jun 15, 2022
 */

/**
 * ImageSlidingGallery
 *
 * `ImageSlidingGallery` is a component that illustrates a set of
 * user specified images one at a time, along with a piece of
 * caption string annotating the image.
 *
 * It is advisable to have all the images in the same dimension,
 * or at least same aspect ratios. Otherwise the rendering output
 * may cause "page jump" effect.
 *
 * https://github.com/tetrachrome/chewbaaka/issues/95
 *
 * Props:
 *
 *  - `slides`: An array of objects containing the image and caption
 *    tuples.
 */

import React from 'react'

import { Button, Transition } from "semantic-ui-react"

import uniqid from 'uniqid'

import 'semantic-ui-css/semantic.min.css'

import { getElementStyleClassName } from '../../styling/styling'

import Caption from './Caption'

import { getFormattedImageCaptionStringWithCredit } from './ImageCaptionUtils'

import {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  Design2ImageViewFamilyCaptionContainerStyles
} from './Design2_ImageViewFamilyUtils'

import './ImageSlidingGallery.css'

import './Design2.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageSlidingGallery-debug.css')

export default class ImageSlidingGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex : 0
    }
    this.handleOnPrevClick = this.handleOnPrevClick.bind(this);
    this.handleOnNextClick = this.handleOnNextClick.bind(this);
  }

  handleOnPrevClick() {
    this.setState((prevState) => ({
      activeIndex : Math.max(prevState.activeIndex-1, 0)
    }));
  }

  handleOnNextClick() {
    this.setState((prevState) => ({
      activeIndex : Math.min(prevState.activeIndex+1, this.props.slides.length - 1)
    }));
  }

  render() {
    const componentOuterContainerDimension = {
      maxWidth: this.props.width
    };

    const activeSlide = this.props.slides[this.state.activeIndex];

    const caption = getFormattedImageCaptionStringWithCredit(activeSlide.caption, activeSlide.credit);

    const aspectRatio = activeSlide.aspectRatio;

    return (
      <div
        className={getElementStyleClassName("ImageSlidingGalleryOuterContainer")}
        style={componentOuterContainerDimension}
      >
        <div className="ImageSlidingGalleryCoreContainer">
          <div className={Design2ImageViewFamilyContainerStyles}>
            <Transition key={uniqid()} transitionOnMount={true} visible={true} duration={500} animation="fade right">
              <img
                className={Design2ImageViewFamilyImgStyles}
                src={activeSlide.image}
                alt={caption}
                width={aspectRatio.width}
                height={aspectRatio.height}
              />
            </Transition>
            <div className={Design2ImageViewFamilyCaptionContainerStyles}
              data-testid="ImageSlidingGalleryCaptionPart"
            >
              <Caption
                caption={caption}
              />
            </div>
          </div>
          {this.renderPrevNextButtonGroup()}
        </div>
      </div>
    );
  }

  renderPrevNextButtonGroup() {
    return (
      <div className="ImageSlidingGalleryButtonContainer">
        <Button
          icon="arrow alternate circle left outline"
          attached="left"
          size="huge"
          color="blue"
          aria-label="Previous slide"
          disabled={(this.state.activeIndex === 0)}
          onClick={this.handleOnPrevClick}
        />
        <Button
          icon="arrow alternate circle right outline"
          attached="right"
          size="huge"
          color="blue"
          aria-label="Next slide"
          disabled={(this.state.activeIndex === (this.props.slides.length - 1))}
          onClick={this.handleOnNextClick}
        />
      </div>
    );
  }
}
