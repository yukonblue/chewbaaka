/**
 * ContentPageBottomNavBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 10, 2021
 * Updated  : Aug 11, 2021
 */

import React from 'react'

import {
  Icon
} from 'semantic-ui-react'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageBottomNavBar.css'

export default class ContentPageBottomNavBar extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassNames(["ContentPageBottomNavBarOuterContainer", "ContentPageSkeletonContentContainerDimension"])}>
        <div className={getElementStyleClassName("ContentPageBottomNavBarInnerContainer")}>
          <div className={getElementStyleClassName("ContentPageBottomNavBarIconSetContainer")}>
            <a href="#">
              <Icon name='arrow alternate circle up outline' size='big' color='blue'/>
            </a>

            <a href="#ContentPageBanner">
              <Icon name='list alternate' size='big' color='blue'/>
            </a>

            {this.renderPrevNextPageIconButton(this.props.pageTailNavMenu.prevPage, true)}
            {this.renderPrevNextPageIconButton(this.props.pageTailNavMenu.nextPage, false)}
          </div>
        </div>
      </div>
    );
  }

  renderPrevNextPageIconButton(item, isLeft) {
    const iconName = isLeft ? 'chevron circle left' : 'chevron circle right';

    const disabled = !item;

    const href = item ? item.href : "";

    return (
      <a href={href} disabled={disabled}>
        <Icon name={iconName} size='big' color='blue' disabled={disabled}/>
      </a>
    );
  }
}
