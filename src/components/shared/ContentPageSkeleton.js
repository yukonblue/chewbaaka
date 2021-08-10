/**
 * ContentPageSkeleton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 10, 2021
 */

import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import {
  Button,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

import {
  getElementStyleClassName
} from '../../styling/styling'

import ContentPageTableOfContentMenuBootstrapper from './ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from './ContentPageIntroSectionGeneric'
import ContentPageHead from './ContentPageHead'
import ContentPageTail from './ContentPageTail'
import ContentPageSideNavMenu from './ContentPageSideNavMenu'
import ContentPageBottomNavBar from './ContentPageBottomNavBar'

import Footer from './Footer'

import RenderVersionString from './Debug'

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
      <Fragment>
        {this.renderHTMLHead()}
        {this.renderHTMLBody()}
        {this.renderVersionString()}
      </Fragment>
    );
  }

  renderHTMLHead() {
    const headMeta = this.props.pageConfig.headMeta;

    const globalMetaKeywords = this.props.appConfig.headMeta.keywords;
    const headMetaKeywords = headMeta.keywords;

    const metaKeywords = headMetaKeywords.concat(globalMetaKeywords).join(", ");

    return (
      <Helmet>
        <title>{headMeta.title}</title>
        <meta name="description" content={headMeta.description} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>
    );
  }

  renderHTMLBody() {
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
      <div className="ContentPageSkeletonContentContainerDimension ContentPageSkeletonPreContentContainer">
        <ContentPageHead
          pageProps={this.props.pageConfig.pageProps}
          imagesContext={this.props.imagesContext}
        />

        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={this.props.pageConfig.pageProps.pageMenuItems}
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
      <div className="ContentPageSkeletonContentContainer">
        <ContentPageIntroSectionGeneric
          contentPageIntro={this.props.pageConfig.contentPageIntro}
          imagesContext = {this.props.imagesContext}
        />

        {this.props.content}

        <ContentPageTail
          pageTailNavMenu={this.props.pageConfig.pageProps.pageTailNavMenu}
        />
      </div>
    );
  }

  renderBody() {
    return (
      <Ref innerRef={this.state.contextRef}>
        <div data-testid="ContentPageSkeletonComponentTestId">
          <div className={getElementStyleClassName("ContentPageSkeletonContentContainerDimension")}>
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
                  title={this.props.pageConfig.pageProps.title}
                  items={this.props.pageConfig.pageProps.pageMenuItems.map(pageMenuItem => (pageMenuItem.title))}
                />
              </div>
            </Sticky>
          </Rail>

          <div className="ContentPageSkeletonBottomNavBarContainer">
            <ContentPageBottomNavBar pageTailNavMenu={this.props.pageConfig.pageProps.pageTailNavMenu}/>
          </div>
        </div>
      </Ref>
    );
  }

  renderVersionString() {
    return RenderVersionString(this.props.appConfig.version);
  }
}
