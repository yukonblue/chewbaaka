/**
 * ImageSlidingGallery.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Button, Icon } from "semantic-ui-react";

import './ImageSlidingGallery.css'

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
    return (
      <div className="ImageSlidingGalleryOuterContainer">
        <div className="ImageSlidingGalleryCoreContainer">
          <img className="ImageSlidingGalleryImgPart" src={this.props.slides[this.state.activeIndex].image} alt={this.props.slides[this.state.activeIndex].caption} />
          <Icon name="image" />
          <p data-testid="ImageSlidingGalleryCaptionPart">{this.props.slides[this.state.activeIndex].caption}</p>
        </div>
        <div className="ImageSlidingGalleryButtonContainer">
          <Button icon="arrow alternate circle left outline" attached="left"   size="huge" color="blue" onClick={this.handleOnPrevClick} />
          <Button icon="arrow alternate circle right outline" attached="right" size="huge" color="blue" onClick={this.handleOnNextClick} />
        </div>
      </div>
    );
  }
}
