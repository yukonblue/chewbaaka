/**
 * ContentPageSkeleton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import {
  Button,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import ContentPageTableOfContentMenuBootstrapper from './ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from './ContentPageIntroSectionGeneric'
import ContentPageHead from './ContentPageHead'
import ContentPageTail from './ContentPageTail'
import ContentPageSideNavMenu from './ContentPageSideNavMenu'

import Footer from './Footer'

import 'semantic-ui-css/semantic.min.css'

import './ContentPageSharedStyles.css'

import './ContentPageSkeleton.css'

if ( process.env.NODE_ENV === 'development' ) {
  require('./ContentPageSharedStyles-debug.css')
  require('./ContentPageSkeleton-debug.css')
}

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class ContentPageSkeleton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuActive : false,
      contextRef : React.createContext()
    };
    this.handleMenuActiveToggle = this.handleMenuActiveToggle.bind(this);
  }

  componentDidMount() {
    if ( !__TEST__ ) {
      window.scrollTo(0, 0);
    }
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
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }

  renderHeader() {
    return (
      <div className="ContentPageSkeletonContentContainerDimension">
        <ContentPageHead
          pageProps={this.props.pageProps}
          imagesContext={this.props.imagesContext}
        />

        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={this.props.pageProps.pageMenuItems}
          imagesContext = {this.props.imagesContext}
        />
      </div>
    );
  }

  renderFooter() {
    return (
      <Footer
        appConfig={this.props.appConfig}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <ContentPageIntroSectionGeneric
          contentPageIntro={this.props.contentPageIntro}
          imagesContext = {this.props.imagesContext}
        />

        {this.props.content}

        <ContentPageTail
          pageTailNavMenu={this.props.pageProps.pageTailNavMenu}
        />
      </Fragment>
    );
  }

  renderBody() {
    return (
      <Ref innerRef={this.state.contextRef}>
        <div data-testid="ContentPageSkeletonComponentTestId">
          <div className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                                      "ContentPageSkeletonContentContainer"])}>
            {this.renderContent()}
          </div>
          <Rail internal position='left' className="ContentPageSkeletonSideRail">
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
    );
  }
}
