/**
 * ContentPageSkeleton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import {
  Checkbox,
  // Grid,
  // Header,
  // Image,
  Rail,
  Ref,
  // Segment,
  Sticky,
  // Container,
} from 'semantic-ui-react'

import './ContentPageSharedStyles.css'
import './ContentPageSkeleton.css'

import ContentPageHead from './ContentPageHead'

import TopNavBar from './TopNavBar'
import Footer from './Footer'

class ContentPageSkeleton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuActive : true,
      contextRef : React.createContext()
    };
    this.handleMenuActiveToggle = this.handleMenuActiveToggle.bind(this);
  }

  handleMenuActiveToggle() {
    this.setState((prevState) => ({
      isMenuActive: prevState.isMenuActive ^ 1,
      contextRef : prevState.contextRef
    }));
  }

  render() {
    return (
      <div className="ContentPageSkeletonOuterContainer">
        <TopNavBar />
        <ContentPageHead coverImage={this.props.coverImage}/>
        <div>
          {this.renderBody()}
        </div>
        <Footer />
      </div>
    )
  }

  renderBody() {
    return (
      <Ref innerRef={this.state.contextRef}>
        <div>
          <div className="ContentPageSkeletonContentContainerDimension ContentPageSkeletonContentContainer">
            {this.props.content}
          </div>
          <Rail internal position='left'>
            <Sticky  context={this.state.contextRef} offset={100}>
              <Checkbox
                checked={this.state.isMenuActive}
                label='Menu'
                onChange={this.handleMenuActiveToggle}
                toggle
                />
              <br/>
              TODO: Menu goes here...
            </Sticky>
          </Rail>
        </div>
      </Ref>
    )
  }
}

export default ContentPageSkeleton;
