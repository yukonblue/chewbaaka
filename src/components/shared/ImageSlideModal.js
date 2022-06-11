/**
 * ImageSlideModal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jun 11, 2022
 */

import React from 'react'

import { Button, Header, Image, Icon, Modal } from 'semantic-ui-react'

import ContentPageCaptionLabel from './ContentPageCaptionLabel'

import { getElementStyleClassName } from '../../styling/styling'

import 'semantic-ui-css/semantic.min.css'

import "./ImageSlideModal.css"

import {
  Design2ImageViewFamilyContainerStyles,
  Design2ImageViewFamilyCaptionContainerStyles
} from '../shared/Design2_ImageViewFamilyUtils'

import { combineStyles } from './Utils'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageSlideModal-debug.css')

export default class ImageSlideModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      activeIndex : 0
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnPrevClick = this.handleOnPrevClick.bind(this);
    this.handleOnNextClick = this.handleOnNextClick.bind(this);
  }

  handleOpen() {
    this.setState((prevState) => ({
      isModalOpen: true,
      activeIndex : prevState.activeIndex
    }));
  }

  handleClose() {
    this.setState((prevState) => ({
      isModalOpen: false,
      activeIndex : 0 // reset to 0
    }));
  }

  handleOnPrevClick() {
    this.setState((prevState) => ({
      isModalOpen: prevState.isModalOpen,
      activeIndex : Math.max(prevState.activeIndex-1, 0)
    }));
  }

  handleOnNextClick() {
    this.setState((prevState) => ({
      isModalOpen: prevState.isModalOpen,
      activeIndex : Math.min(prevState.activeIndex+1, this.props.slides.length - 1)
    }));
  }

  render() {
    const coverImage = this.props.slides[0].image;

    const modalCoverContainerDimensionStyle = {
      width: 480,
    };

    const modalCoverTriggerContainerStyle = {
      width: 480,
      height: 320,
      backgroundImage: `url(${coverImage})`,
    };

    const leftPaginationButtonDisabled = ( this.state.activeIndex === 0 );
    const rightPaginationButtonDisabled = ( this.state.activeIndex ===  this.props.slides.length - 1);

    const renderCaption = () => {
      if ( this.props.caption ) {
        return (
          <span>
            <Icon name='hand point up outline'/>
            {this.props.caption}
          </span>
        );
      } else return null;
    };

    return (
      <Modal
        trigger={
          <div
            className={combineStyles("ImageSlideModalCoverTriggerOuterContainer", Design2ImageViewFamilyContainerStyles)}
            style={modalCoverContainerDimensionStyle}
          >
            <div
              className={combineStyles("ImageSlideModalCoverTriggerInnerContainer", "ImageViewFamilyContainerBorderStyles")}
              style={modalCoverTriggerContainerStyle}
              onClick={this.handleOpen}
              data-testid="ImageSlideModalComponentCoverImageContainerDivTestId"
            >
              <div className="ImageSlideModalCoverTriggerImageIconInnerContainer">
                <Icon
                  name="images outline"
                  color="blue"
                  size="big"
                  onClick={this.handleOpen}
                />
              </div>
            </div>

            <div className={Design2ImageViewFamilyCaptionContainerStyles}>
              {renderCaption()}
            </div>
          </div>
        }
        open={this.state.isModalOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Modal.Content>
          <div className={getElementStyleClassName("ImageSlideModalComponentModalContentOuterContainer")}>
            <div className={getElementStyleClassName("ImageSlideModalComponentModalContentImageContainer")}>
              <Image
                className="ImageSlideModalComponentModalContentImage"
                size='huge'
                src={this.props.slides[this.state.activeIndex].image}
              />
            </div>
            <Modal.Description>
              <div className="ImageSlideModalComponentModalDescriptionContainer">
                <Header as="h3" className="ImageSlideModalComponentModalDescriptionHeader">
                  {this.props.slides[this.state.activeIndex].title}
                </Header>
                <ContentPageCaptionLabel>
                  {this.props.slides[this.state.activeIndex].description}
                </ContentPageCaptionLabel>
                <div className="ImageSlideModalComponentModalDescriptionPaginationButtonContainer">
                  <Button
                    icon="arrow alternate circle left outline"
                    size="huge"
                    color="blue"
                    attached="left"
                    disabled={leftPaginationButtonDisabled}
                    onClick={this.handleOnPrevClick}
                  />
                  <Button
                    icon="arrow alternate circle right outline"
                    size="huge"
                    color="blue"
                    attached="right"
                    disabled={rightPaginationButtonDisabled}
                    onClick={this.handleOnNextClick}
                  />
                </div>
              </div>
              <p className="ImageSlideModalComponentModalDescriptionPaginationLabel">
                {this.state.activeIndex+1} / {this.props.slides.length}
              </p>
            </Modal.Description>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}
