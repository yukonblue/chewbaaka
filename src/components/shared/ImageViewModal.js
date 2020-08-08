/**
 * ImageViewModal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 29, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { Icon, Image, Modal } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import 'semantic-ui-css/semantic.min.css'

import './ImageViewModal.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageViewModal-debug.css')

export default class ImageViewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      isModalOpen: true
    });
  }

  handleClose() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    const modalCoverTriggerContainerStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundImage: `url(${this.props.image})`,
    };

    return (
      <Modal
        trigger={
          <div
            className="ImageViewModalCoverTriggerOuterContainer"
            style={modalCoverTriggerContainerStyle}
            onClick={this.handleOpen}
            data-testid="ImageViewModalComponentCoverImageContainerTestId"
          >
            <div className="ImageViewModalCoverTriggerImageIconInnerContainer">
              <Icon
                name="file image"
                color="black"
                size="large"
                onClick={this.handleOpen}
              />
            </div>
          </div>
        }
        open={this.state.isModalOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Modal.Content>
          <div className={getElementStyleClassName("ImageViewModalComponentModalContentOuterContainer")}>
            <div className={getElementStyleClassName("ImageViewModalComponentModalContentImageContainer")}>
              <Image
                className="ImageViewModalComponentModalContentImage"
                size='huge'
                src={this.props.image}
              />
            </div>
            {/* <Modal.Description>
              <div className="ImageViewModalComponentModalDescriptionContainer">
              </div>
            </Modal.Description> */}
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}
