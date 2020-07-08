/**
 * ContentPageSideNavMenu.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Menu } from 'semantic-ui-react'

import { ContentPageSectionTitleToAnchorId } from './ContentPageSectionAnchor'

import "semantic-ui-css/semantic.min.css";

export default class ContentPageSideNavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // contextRef: props.contextRef,
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
    var menuItems = [];

    for (const [idx, item] of this.state.items.entries()) {
      menuItems.push(
        <Menu.Item
          key={idx}
          active={this.state.activeItem === item}
          href={"#"+ContentPageSectionTitleToAnchorId(item)}
          onClick={this.handleItemClick}
        >
          {item}
        </Menu.Item>
      );
    }

    return (
      <div data-testid="ContentPageSideNavMenuComponentTestId">
        <Menu text vertical>
          <Menu.Item header>History</Menu.Item>
          {menuItems}
        </Menu>
      </div>
    );
  }
}
