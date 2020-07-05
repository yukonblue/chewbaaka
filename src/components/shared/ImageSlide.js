/**
 * ImageSlide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
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
              max={this.props.images.length - 1}
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
