/**
 * ImageSlidingGalleryDiscrete.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 23, 2020
 * Updated  : Aug 01, 2020
 */

/**
 * ImageSlidingGalleryDiscrete
 *
 * `ImageSlidingGalleryDiscrete` is a component that illustrates a set of
 * user specified images one at a time, along with a piece of
 * caption string annotating the image.
 *
 * Props:
 *
 *  - `width`: The desired width of the image view.
 *
 *  - `height`: The desired height of the image view. 
 *
 *  - `slides`: An array of objects of { image, caption, credit } tuples.
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import { Button } from "semantic-ui-react"

import { getFormattedImageCaptionStringWithCredit } from './ImageCaptionUtils'

import './ImageSlidingGalleryDiscrete.css'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import Caption from './Caption'

export default class ImageSlidingGalleryDiscrete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex : 0
    }
    this.handleOnPrevClick = this.handleOnPrevClick.bind(this);
    this.handleOnNextClick = this.handleOnNextClick.bind(this);
    this.handleGridButtonOnClick = this.handleGridButtonOnClick.bind(this);
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

  handleGridButtonOnClick(idx) {
    this.setState({
      activeIndex : idx
    });
  }

  render() {
    const componentDimensionHeightOffset = 100 + 60;

    const componentDimensionStyle = {
      width: this.props.width,
      height: this.props.height + componentDimensionHeightOffset
    };

    const componentCoreDimensionStyle = {
      width: this.props.width,
      height: this.props.height
    };

    /**
     * Vertically center the prev/next buttons in the center of the image.
     * Need to minus half of the height of the button itself
     * to make it appear really centered.
     */
    const buttonHeight = 43;
    const buttonCommonTopPos = (this.props.height / 2) - (buttonHeight / 2);

    const buttonCommonPositionStyle = {
      top: buttonCommonTopPos
    };

    const buttonItems = this.props.slides.map((_, idx) => (this.renderButtonItem(idx)));

    const activeSlide = this.props.slides[this.state.activeIndex];

    const caption = getFormattedImageCaptionStringWithCredit(activeSlide.caption, activeSlide.credit);

    return (
      <div
        className={getElementStyleClassName("ImageSlidingGalleryDiscreteOuterContainer")}
        style={componentDimensionStyle}
      >
        <div
          className={getElementStyleClassName("ImageSlidingGalleryDiscreteCoreContainer")}
          style={componentDimensionStyle}
        >
          <img className="ImageSlidingGalleryDiscreteImgPart"
            style={componentCoreDimensionStyle}
            src={activeSlide.image}
            alt={caption}
          />
          <div
            className="ImageSlidingGalleryDiscreteCaptionPart"
            data-testid="ImageSlidingGalleryDiscreteCaptionPart"
          >
            <Caption caption={caption} />
          </div>
          <div className={getElementStyleClassName("ImageSlidingGalleryDiscreteButtonGroupContainer")}>
            <Button.Group>
              {buttonItems}
            </Button.Group>
          </div>
        </div>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonLhsContainer"])}
          style={buttonCommonPositionStyle}
        >
          <Button
            circular
            icon="arrow alternate circle left outline"
            size="large"
            color="blue"
            disabled={(this.state.activeIndex === 0)}
            onClick={this.handleOnPrevClick}
          />
        </div>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonRhsContainer"])}
          style={buttonCommonPositionStyle}
        >
          <Button
            circular
            icon="arrow alternate circle right outline"
            size="large"
            color="blue"
            disabled={(this.state.activeIndex === (this.props.slides.length - 1))}
            onClick={this.handleOnNextClick}
          />
        </div>
      </div>
    );
  }

  renderButtonItem(idx) {
    const color = (this.state.activeIndex === idx) ? "yellow" : "blue";
    return (
      <Button
        key={idx}
        color={color}
        size="huge"
        onClick={(e) => (this.handleGridButtonOnClick(idx))}
      >
        {idx}
      </Button>
    );
  }
}
