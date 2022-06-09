/**
 * ImageSlidingGalleryDiscrete.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 23, 2020
 * Updated  : Jun 09, 2022
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

import React, { Fragment } from 'react'

import { Button } from "semantic-ui-react"

import { getFormattedImageCaptionStringWithCredit } from './ImageCaptionUtils'

import {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  combineStyles
} from './Design2_ImageViewFamilyUtils'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import Caption from './Caption'

import 'semantic-ui-css/semantic.min.css'

import './ImageSlidingGalleryDiscrete.css'

import './Design2.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageSlidingGalleryDiscrete-debug.css')

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
    const componentDimensionStyle = {
      width: this.props.width
    };

    const buttonItems = this.props.slides.map((_, idx) => (this.renderButtonItem(idx)));

    const activeSlide = this.props.slides[this.state.activeIndex];

    const caption = getFormattedImageCaptionStringWithCredit(activeSlide.caption, activeSlide.credit);

    const aspectRatio = {
      width: parseInt(this.props.width, 10),
      height: parseInt(this.props.height, 10)
    }

    return (
      <div
        className={getElementStyleClassName("ImageSlidingGalleryDiscreteOuterContainer")}
        style={componentDimensionStyle}
      >
        <div
          className={combineStyles("ImageSlidingGalleryDiscreteInnerContainer", Design2ImageViewFamilyContainerStyles)}
          style={componentDimensionStyle}
        >
          <div className={getElementStyleClassName("ImageSlidingGalleryDiscreteCoreContainer")}>
            <img className={Design2ImageViewFamilyImgStyles}
              src={activeSlide.image}
              alt={caption}
              // Specify the aspect ratio
              width={aspectRatio.width}
              height={aspectRatio.height}
            />
            {this.renderPrevNextButtonGroup()}
          </div>
          <div
            className="ImageViewFamilyCaptionContainerStyles"
            data-testid="ImageSlidingGalleryDiscreteCaptionPart"
          >
            <Caption caption={caption} />
          </div>
        </div>
        <div className={getElementStyleClassName("ImageSlidingGalleryDiscreteButtonGroupContainer")}>
            <Button.Group>
              {buttonItems}
            </Button.Group>
          </div>
      </div>
    );
  }

  renderPrevNextButtonGroup() {
    return (
      <Fragment>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonLhsContainer"])}
        >
          <Button
            circular
            icon="arrow alternate circle left outline"
            size="large"
            color="blue"
            aria-label="Previous slide"
            disabled={(this.state.activeIndex === 0)}
            onClick={this.handleOnPrevClick}
          />
        </div>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonRhsContainer"])}
        >
          <Button
            circular
            icon="arrow alternate circle right outline"
            size="large"
            color="blue"
            aria-label="Next slide"
            disabled={(this.state.activeIndex === (this.props.slides.length - 1))}
            onClick={this.handleOnNextClick}
          />
        </div>
      </Fragment>
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
        {idx+1}
      </Button>
    );
  }
}
