/**
 * ContentPageTailPrevNextButtonNavMenu.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import ContentPageTailPrevNextButtonNavMenuButton from './ContentPageTailPrevNextButtonNavMenuButton'
import FluidSingleRowGrid from './FluidSingleRowGrid'

export default class ContentPageTailPrevNextButtonNavMenu extends React.Component {

  render() {
    return (
      <FluidSingleRowGrid>
        {this.renderPageNavButton(this.props.pageTailNavMenu.prevPage, true)}
        {this.renderPageNavButton(this.props.pageTailNavMenu.nextPage, false)}
      </FluidSingleRowGrid>
    );
  }

  renderPageNavButton(item, isRTL) {
    if ( !item ) return null;

    return (
      <ContentPageTailPrevNextButtonNavMenuButton
        isRTL={isRTL}
        label={item.label}
        href={item.href}
      />
    ); 
  }
}
