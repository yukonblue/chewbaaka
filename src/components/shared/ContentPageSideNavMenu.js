/**
 * ContentPageSideNavMenu.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jun 13, 2022
 */

import React, { Fragment } from 'react'

import { Menu, List } from 'semantic-ui-react'

import { ContentPageSectionTitleToAnchorId } from './ContentPageSectionAnchor'

import { getElementStyleClassName } from '../../styling/styling'

import 'semantic-ui-css/semantic.min.css'

import './ContentPageSideNavMenu.css'

import { Design2CommonRoundedBorderRadiusStyle } from './Design2_CommonUtils'

import { combineStyles } from './Utils'

export default class ContentPageSideNavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // contextRef: props.contextRef,
      title: props.title,
      items : props.items,
      activeItem : props.items[0]
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState((prevState) => ({
      items: prevState.items,
      activeItem: name
    }));
  }

  render() {
    var sectionMenuItems = [];

    for (const [idx, item] of this.state.items.entries()) {
      sectionMenuItems.push(
        <List.Item
          key={idx}
          active={this.state.activeItem === item}
          href={"#"+ContentPageSectionTitleToAnchorId(item)}
          onClick={this.handleItemClick}
        >
          <span className="ContentPageSideNavMenuSectionMenuItem">
            {item}
          </span>
        </List.Item>
      );
    }

    const getTopMenuItem = (idx, item) => {
      if (item === this.props.title) {
        return (
          <Fragment key={idx}>
            <p className="ContentPageSideNavMenuTopItemInactive">
              {item}
            </p>
            <List link className="ContentPageSideNavMenuSectionMenuList">
              {sectionMenuItems}
            </List>
          </Fragment>
        );
      } else {
        return (
          <Menu.Item
            key={idx}
            active={true}
            href={"/" + (item.toLowerCase() + "/")}
          >
            <span className="ContentPageSideNavMenuTopItem">
              {item}
            </span>
          </Menu.Item>
        );
      }
    };

    const contentPageNames = ["History", "Biology", "Ecology", "Future"]

    return (
      <div
        className={combineStyles(getElementStyleClassName("ContentPageSideNavMenuOuterContainer"), Design2CommonRoundedBorderRadiusStyle)}
        data-testid="ContentPageSideNavMenuComponentTestId"
      >
        <Menu text vertical className="ContentPageSideNavMenuInnerMenu">
          {contentPageNames.map( (item, idx) => getTopMenuItem(idx, item) )}
        </Menu>
      </div>
    );
  }
}
