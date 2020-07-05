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

import { Container, Button, Header, Image, Icon, Label, Modal } from 'semantic-ui-react'

import "./ImageSlideModal.css"

class ImageSlideModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      activeIndex : 0
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnPrevClick = this.handleOnPrevClick.bind(this);
    this.handleOnNextClick = this.handleOnNextClick.bind(this);
  }

  handleOpen() {
    this.setState((prevState) => ({
      modalOpen: true,
      activeIndex : prevState.activeIndex
    }));
  }

  handleClose() {
    this.setState((prevState) => ({
      modalOpen: false,
      activeIndex : 0 // reset to 0
    }));
  }

  handleOnPrevClick() {
    this.setState((prevState) => ({
      modalOpen: prevState.modalOpen,
      activeIndex : Math.max(prevState.activeIndex-1, 0)
    }));
  }

  handleOnNextClick() {
    this.setState((prevState) => ({
      modalOpen: prevState.modalOpen,
      activeIndex : Math.min(prevState.activeIndex+1, this.props.slides.length - 1)
    }));
  }

  render() {
    const coverImage = this.props.slides[0].image;

    const divStyle = {
      width: 480,
      height: 320,
      backgroundImage: `url(${coverImage})`,
    };

    return (
      <Modal
        trigger={
          <div className="modalCoverImageContainerDiv" style={divStyle} onClick={this.handleOpen}>
            <div className="modalCoverImageIcon"><Icon name="caret square right outline" color="gray" size="huge" onClick={this.handleOpen} /></div>
          </div>
        }
        open={this.state.modalOpen}
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
            <Button icon size="small" onClick={this.handleOnPrevClick}>
              <Icon name="angle left" size="large"  />
            </Button>
            <Button icon size="small" onClick={this.handleOnNextClick}>
              <Icon name="angle right" size="large"  />
            </Button>
            <p>{this.state.activeIndex+1} / {this.props.slides.length}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ImageSlideModal;
