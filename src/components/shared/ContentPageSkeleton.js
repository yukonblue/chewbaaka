/**
 * ContentPageSkeleton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import {
  Button,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

import './ContentPageSharedStyles.css'
import './ContentPageSkeleton.css'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import ContentPageHead from './ContentPageHead'
import ContentPageTail from './ContentPageTail'
import ContentPageSideNavMenu from './ContentPageSideNavMenu'

import TopNavBar from './TopNavBar'
import Footer from './Footer'

export default class ContentPageSkeleton extends React.Component {

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
      <div className={getElementStyleClassName("ContentPageSkeletonOuterContainer")}>
        <TopNavBar />
        <ContentPageHead
          pageProps={this.props.pageProps}
          imagesContext={this.props.imagesContext}
        />
        <div>
          {this.renderBody()}
        </div>
        <ContentPageTail />
        <Footer />
      </div>
    )
  }

  renderBody() {
    return (
      <Ref innerRef={this.state.contextRef}>
        <div data-testid="ContentPageSkeletonComponentTestId">
          <div className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                                      "ContentPageSkeletonContentContainer"])}>
            {this.props.content}
          </div>
          <Rail internal position='left'>
            <Sticky context={this.state.contextRef} offset={100}>
              <Button
                circular
                icon="list ul"
                color={this.state.isMenuActive ? "orange" : "black"}
                onClick={this.handleMenuActiveToggle}
              />
              <div hidden={!this.state.isMenuActive}>
                <ContentPageSideNavMenu
                  title={this.props.pageProps.title}
                  items={this.props.pageProps.pageMenuItems.map(pageMenuItem => (pageMenuItem.title))}
                />
              </div>
            </Sticky>
          </Rail>
        </div>
      </Ref>
    )
  }
}
