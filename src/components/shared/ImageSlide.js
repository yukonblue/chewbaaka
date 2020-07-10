/**
 * ImageSlide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 09, 2020
 */

/**
 * ImageSlide
 *
 * ImageSlide is a component that allows user to
 * specify a set of images to display along with an
 * input slider that can slide through the set of images.
 *
 * A good example application of this component could be
 * to use a set of images to illustrate changes along a timeline.
 *
 * Props:
 *  - `labels` (optional): An array of labels to display along the current image.
 *    If specified, this array must have the same length as the `images` prop
 *    specified.
 *
 *  - `title` (optional): The title of the component.
 *
 *  - `sliderBeginLabel`: The label used for illustrating the semantic meaning
 *    of the beginning of the slider value.
 *
 *  - `sliderEndLabel`: The label used for illustrating the semantic meaning
 *    of the end of the slider value.
 *
 *  - `title` (optional): Specify an optional caption text to demonstrate the
 *    meaning of the slider, or to specify instructions on how to use the slider.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Container, Header, Grid, Label, GridColumn } from 'semantic-ui-react'

import { Slider } from '@material-ui/core';

import './ImageSlide.css'

import { getElementStyleClassName } from '../../styling/styling'

class ImageSlide extends React.Component {

  // TODO: Style this component.

  constructor(props) {
    super(props);
    this.state = {
      activeMark: props.marks[0].value,
      marksDict: 
        Object.fromEntries( props.marks.map( mark => [mark.value, mark]) )
    }
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(event, value) {
    this.setState((prevState) => ({
      activeMark: Number(value),
      marksToImages: prevState.marksToImages
    }));
  }

  render() {
    const controlButtonsAlignment = this.props.controlButtonsAlignment? this.props.controlButtonsAlignment : "center";

    const imageDimensionStyle = {
      width: this.props.imageWidth,
      height: this.props.imageHeight
    }

    return (
      <div className={getElementStyleClassName("ImageSlideOuterContainer")} data-testid="ImageSlideComponentTestId">
        <div className={getElementStyleClassName("ImageSlideInnerContainer")}>
          <Header as='h1' textAlign="center" data-testid="ImageSlideComponentTitlePartTestId">{this.props.title}</Header>
          <img
            className={getElementStyleClassName("ImageSlideImgElement")} 
            src={this.state.marksDict[this.state.activeMark].image}
            style={imageDimensionStyle}
            data-testid="ImageSlideComponentImgPartTestId"
          />
          <div className={getElementStyleClassName("ImageSlideSliderAndLabelOuterContainer")}>
            <div className={getElementStyleClassName("ImageSlideLabelOuterContainer")}>
              <Label circular color="black" data-testid="ImageSlideComponentLabelPartTestId">{this.state.marksDict[this.state.activeMark].label}</Label>
            </div>

            <div className={getElementStyleClassName("ImageSlideSliderAndLabelInnerContainer")}>
              <div className={getElementStyleClassName("ImageSlideSliderElementContainer")}>
                <div className={getElementStyleClassName("ImageSlideComponentSliderBeginLabelContainer")}>
                  <Label circular color="yellow" data-testid="ImageSlideComponentSliderBeginLabelPartTestId">{this.props.sliderBeginLabel}</Label>
                </div>

                <div className={getElementStyleClassName("ImageSlideComponentSlideEndLabelContainer")}>
                  <Label circular color="orange" data-testid="ImageSlideComponentSliderEndLabelPartTestId">{this.props.sliderEndLabel}</Label>
                </div>

                <Slider
                  defaultValue={this.props.marks[0].value}
                  // getAriaValueText={(value, idx) => (this.state.marksDict[value].label)}
                  valueLabelFormat={(value) => ("")}
                  aria-labelledby="discrete-slider-restrict"
                  step={null}
                  valueLabelDisplay="auto"
                  marks={this.props.marks}
                  onChange={this.handleSliderChange}
                />
                
              </div>
            </div>

            <p data-testid="ImageSlideComponentCaptionPartTestId">
              {this.props.caption}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageSlide;
