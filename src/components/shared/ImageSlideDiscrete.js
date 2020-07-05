/**
 * ImageSlideDiscrete.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 05, 2020
 */

/**
 * ImageSlideDiscrete
 *
 * ImageSlideDiscrete is a component that allows user to
 * specify a set of images to display along the progress
 * indicated on a progress bar. A good example application
 * of this component could be to use a set of images to
 * illustrate changes along a timeline.
 *
 * Props:
 *  - `images`: An array of images to display within the component.
 *
 *  - `labels` (optional): An array of label captions to display inside the progress indicator.
 *    If specified, this array must have the same length as the `images` prop specified.
 *
 *  - `percentages` (optional): An array of increment percentages for the progress indicator.
 *    If specified, this array must have the same length as the `images` prop specified.
 *
 *  - `title` (optional): The title of the component.
 *
 *  - `decrementButtonLabel`: The label used for the button for decrementing the progress.
 *
 *  - `incrementButtonLabel`: The label used for the button for incrementing the progress.
 *
 *  - `controlButtonsAlignment` (optional): Specify the alignment of the button controls
 *    w.r.t. the entire control.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Icon, Image, Progress } from 'semantic-ui-react'

class ImageSlideDiscrete extends React.Component {

  // TODO: Style this component.

  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      index: 0
    }
    this.handleDecrementButtonClick = this.handleDecrementButtonClick.bind(this);
    this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this);
  }

  handleDecrementButtonClick() {
    const increment = 100 / Math.max(this.props.images.length, 1);

    this.setState(function setState(prevState) {
      const index = Math.max(prevState.index - 1, 0);
      const percent = this.props.percentages ? this.props.percentages[index] : Math.max(prevState.percent - increment, 0);
      return {
        percent: percent,
        index: index,
      }
    });
  }

  handleIncrementButtonClick() {
    const increment = 100 / Math.max(this.props.images.length, 1);

    this.setState(function setState(prevState) {
      const index = Math.min(prevState.index + 1, this.props.images.length-1);
      const percent = this.props.percentages ? this.props.percentages[index] : Math.min(prevState.percent + increment, 100);
      return {
        percent: percent,
        index: index,
      }
    });
  }

  render() {
    const controlButtonsAlignment = this.props.controlButtonsAlignment? this.props.controlButtonsAlignment : "center";

    const labels = this.props.labels ? this.props.labels : [];

    return (
      <div data-testid="ImageSlideComponentTestId">
        <Header as='h1' data-testid="ImageSlideComponentTitlePartTestId">{this.props.title}</Header>
        <Container>
          <Image src={this.props.images[this.state.index]} fluid data-testid="ImageSlideComponentImgPartTestId" />
        </Container>
        <Progress size="tiny" percent={this.state.percent} indicating data-testid="ImageSlideComponentProgressIndicatorPartTestId" >
          {labels[this.state.index]}
        </Progress>
        <Container textAlign={controlButtonsAlignment}>
          <Button icon labelPosition='left' onClick={this.handleDecrementButtonClick} data-testid="ImageSlideComponentDecrementButtonPartTestId" >
            {this.props.decrementButtonLabel}
            <Icon name='left arrow' />
          </Button>
          <Button icon labelPosition='right' onClick={this.handleIncrementButtonClick} data-testid="ImageSlideComponentIncrementButtonPartTestId">
            {this.props.incrementButtonLabel}
            <Icon name='right arrow' />
          </Button>
        </Container>
      </div>
    )
  }
}

export default ImageSlideDiscrete;
