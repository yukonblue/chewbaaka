/**
 * ImageSlideModal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Button, Header, Image, Icon, Modal } from 'semantic-ui-react'

import "./ImageSlideModal.css"

class ImageSlideModal extends React.Component {

  // TODO: Style this component.

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

    const modalCoverImageContainerDivStyle = {
      width: 480,
      height: 320,
      backgroundImage: `url(${coverImage})`,
    };

    const leftPaginationButtonDisabled = ( this.state.activeIndex === 0 );
    const rightPaginationButtonDisabled = ( this.state.activeIndex ===  this.props.slides.length - 1);

    return (
      <Modal
        trigger={
          <div className="modalCoverImageContainerDiv" style={modalCoverImageContainerDivStyle} onClick={this.handleOpen} data-testid="ImageSlideModalComponentCoverImageContainerDivTestId">
            <div className="modalCoverImageIcon"><Icon name="caret square right outline" color="grey" size="huge" onClick={this.handleOpen} /></div>
          </div>
        }
        open={this.state.isModalOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Modal.Content image>
          <Image wrapped size='large' src={this.props.slides[this.state.activeIndex].image} />
          <Modal.Description>
            <Header>
              {this.props.slides[this.state.activeIndex].title}
            </Header>
            <p>
              {this.props.slides[this.state.activeIndex].description}
            </p>
            <div className="modalPaginationButtonContainerDiv">
              <Button icon size="small" attached="left" disabled={leftPaginationButtonDisabled} onClick={this.handleOnPrevClick}>
                <Icon name="angle left" size="large" />
              </Button>
              <Button icon size="small" attached="right" disabled={rightPaginationButtonDisabled} onClick={this.handleOnNextClick}>
                <Icon name="angle right" size="large" />
              </Button>
            </div>
            <p className="modalPageLabel">{this.state.activeIndex+1} / {this.props.slides.length}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ImageSlideModal;
