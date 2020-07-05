/**
 * ImageSlide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
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
 *  - `images`: An array of images to display within the component.
 *
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

import { Container, Header, Image, Label } from 'semantic-ui-react'

class ImageSlide extends React.Component {

  // TODO: Style this component.

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(e) {
    this.setState({ activeIndex: Number(e.target.value) })
  }

  render() {
    const controlButtonsAlignment = this.props.controlButtonsAlignment? this.props.controlButtonsAlignment : "center";

    const labels = this.props.labels ? this.props.labels : [];

    return (
      <div data-testid="ImageSlideComponentTestId">
        <Container>
          <Header as='h1' data-testid="ImageSlideComponentTitlePartTestId">{this.props.title}</Header>
          <Image src={this.props.images[this.state.activeIndex]} fluid data-testid="ImageSlideComponentImgPartTestId" />
          <Container textAlign={controlButtonsAlignment}>
            <div>
              <Label color="black" data-testid="ImageSlideComponentLabelPartTestId">{labels[this.state.activeIndex]}</Label>
            </div>
            <Label circular color="yellow" data-testid="ImageSlideComponentSliderBeginLabelPartTestId">{this.props.sliderBeginLabel}</Label>
            <input
              type='range'
              min={0}
              max={Math.max(this.props.images.length - 1, 0)}
              value={this.state.activeIndex}
              onChange={this.handleSliderChange}
              data-testid="ImageSlideComponentSliderPartTestId"
            />
            <Label circular color="orange" data-testid="ImageSlideComponentSliderEndLabelPartTestId">{this.props.sliderEndLabel}</Label>
            <p data-testid="ImageSlideComponentCaptionPartTestId">{this.props.caption}</p>
          </Container>
        </Container>
      </div>
    )
  }
}

export default ImageSlide;
