/**
 * ImageSlidingGallery.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 07, 2020
 */

/**
 * ImageSlidingGallery
 *
 * `ImageSlidingGallery` is a component that illustrates a set of
 * user specified images one at a time, along with a piece of
 * caption string annotating the image.
 *
 * Props:
 *
 *  - `slides`: An array of objects containing the image and caption
 *    tuples.
 */

import React from 'react'

import { Button } from "semantic-ui-react"

import 'semantic-ui-css/semantic.min.css'

import { getElementStyleClassName } from '../../styling/styling'

import Caption from './Caption'

import { getFormattedImageCaptionStringWithCredit } from './ImageCaptionUtils'

import './ImageSlidingGallery.css'

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

    return (
      <div
        className={getElementStyleClassName("ImageSlidingGalleryOuterContainer")}
        style={componentOuterContainerDimension}
      >
        <div className={getElementStyleClassName("ImageSlidingGalleryCoreContainer")}>
          <img
            className="ImageSlidingGalleryImgPart"
            src={activeSlide.image}
            alt={caption}
          />
          <div
            className="ImageSlidingGalleryCaptionPart"
            data-testid="ImageSlidingGalleryCaptionPart"
          >
            <Caption
              caption={caption}
            />
          </div>
        </div>
        <div className="ImageSlidingGalleryButtonContainer">
          <Button
            icon="arrow alternate circle left outline"
            attached="left"
            size="huge"
            color="blue"
            disabled={(this.state.activeIndex === 0)}
            onClick={this.handleOnPrevClick}
          />
          <Button
            icon="arrow alternate circle right outline"
            attached="right"
            size="huge"
            color="blue"
            disabled={(this.state.activeIndex === (this.props.slides.length - 1))}
            onClick={this.handleOnNextClick}
          />
        </div>
      </div>
    );
  }
}
