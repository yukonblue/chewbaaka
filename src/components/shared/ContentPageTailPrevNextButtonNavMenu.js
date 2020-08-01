/**
 * ContentPageTailPrevNextButtonNavMenu.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 01, 2020
 */

import React from 'react'

import ContentPageSubsectionTwoColumnContentTemplate from './ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageTailPrevNextButtonNavMenuButton from './ContentPageTailPrevNextButtonNavMenuButton'

export default class ContentPageTailPrevNextButtonNavMenu extends React.Component {

  render() {
    return (
      <div>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPrevPageNavButton()}}
          rhsColumn={{content: this.renderNextPageNavButton()}}
        />
      </div>
    )
  }

  renderPrevPageNavButton() {
    const prevPage = this.props.pageTailNavMenu.prevPage;

    if ( !prevPage ) {
      return null;
    }

    const label = prevPage.label;
    const href = "/" + label.toLowerCase();

    return (
      <div className="FloatLeft">
        <ContentPageTailPrevNextButtonNavMenuButton
          isRTL={true}
          label={label}
          href={href}
        />
      </div>
    ); 
  }

  renderNextPageNavButton() {
    const nextPage = this.props.pageTailNavMenu.nextPage;

    if ( !nextPage ) {
      return null;
    }

    const label = nextPage.label;
    const href = "/" + label.toLowerCase();
  
    return (
      <div className="FloatRight">
        <ContentPageTailPrevNextButtonNavMenuButton
          isRTL={false}
          label={label}
          href={href}
        />
      </div>
    );
  }
}
