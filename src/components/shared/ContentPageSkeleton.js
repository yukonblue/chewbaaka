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
  Button,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

import './ContentPageSharedStyles.css'
import './ContentPageSkeleton.css'

import ContentPageHead from './ContentPageHead'
import ContentPageSideNavMenu from './ContentPageSideNavMenu'

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
        <ContentPageHead pageProps={this.props.pageProps}/>
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
            <Sticky context={this.state.contextRef} offset={100}>
              <Button circular icon="list ul" color="orange" onClick={this.handleMenuActiveToggle} />
              <div hidden={!this.state.isMenuActive}>
                <ContentPageSideNavMenu items={this.props.pageProps.pageMenuItems} />
              </div>
            </Sticky>
          </Rail>
        </div>
      </Ref>
    )
  }
}

export default ContentPageSkeleton;
