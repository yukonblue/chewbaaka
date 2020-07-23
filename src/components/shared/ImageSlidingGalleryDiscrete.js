/**
 * ImageSlidingGalleryDiscrete.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 23, 2020
 * Updated  : Jul 23, 2020
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
 *  - `slides`: An array of objects of { image, caption } tuples.
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import { Button, Grid } from "semantic-ui-react"

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
    const componentDimensionHeightOffset = 100;

    const componentDimensionStyle = {
      width: this.props.width,
      height: this.props.height + componentDimensionHeightOffset
    };

    const componentCoreDimensionStyle = {
      width: this.props.width,
      height: this.props.height
    };

    const buttonCommonTopPos = (this.props.height - componentDimensionHeightOffset) / 2;

    const buttonCommonPositionStyle = {
      top: buttonCommonTopPos
    };

    const gridItems = this.props.slides.map((_, idx) => (this.renderGridItem(idx)));

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
            src={this.props.slides[this.state.activeIndex].image}
            alt={this.props.slides[this.state.activeIndex].caption}
          />
          <div
            className="ImageSlidingGalleryDiscreteCaptionPart"
            data-testid="ImageSlidingGalleryDiscreteCaptionPart"
          >
            <Caption caption={this.props.slides[this.state.activeIndex].caption} />
          </div>
          <div>
            <Grid>
              {gridItems}
            </Grid>
          </div>
        </div>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonLhsContainer"])}
          style={buttonCommonPositionStyle}
        >
          <Button
            icon="arrow alternate circle left outline"
            size="huge"
            color="blue"
            onClick={this.handleOnPrevClick}
          />
        </div>
        <div
          className={getElementStyleClassNames(["ImageSlidingGalleryDiscreteButtonContainer",
                                                "ImageSlidingGalleryDiscreteButtonRhsContainer"])}
          style={buttonCommonPositionStyle}
        >
          <Button
            icon="arrow alternate circle right outline"
            size="huge"
            color="blue"
            onClick={this.handleOnNextClick}
          />
        </div>
      </div>
    );
  }

  renderGridItem(idx) {
    return (
      <Grid.Column key={idx}>
        <Button
          basic
          color="blue"
          size="large"
          onClick={(e) => (this.handleGridButtonOnClick(idx))}
        >
          {idx}
        </Button>
      </Grid.Column>
    );
  }
}
