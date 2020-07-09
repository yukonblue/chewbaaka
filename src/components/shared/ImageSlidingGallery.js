/**
 * ImageSlidingGallery.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 09, 2020
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

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Button } from "semantic-ui-react";

import './ImageSlidingGallery.css'

import Caption from './Caption'

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
          <div className="ImageSlidingGalleryCaptionPart" data-testid="ImageSlidingGalleryCaptionPart">
            <Caption caption={this.props.slides[this.state.activeIndex].caption} />
          </div>
        </div>
        <div className="ImageSlidingGalleryButtonContainer">
          <Button icon="arrow alternate circle left outline" attached="left"   size="huge" color="blue" onClick={this.handleOnPrevClick} />
          <Button icon="arrow alternate circle right outline" attached="right" size="huge" color="blue" onClick={this.handleOnNextClick} />
        </div>
      </div>
    );
  }
}
