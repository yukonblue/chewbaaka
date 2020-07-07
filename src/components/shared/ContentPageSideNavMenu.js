/**
 * ContentPageSideNavMenu.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { Menu } from 'semantic-ui-react'

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
        // TODO: Add routing support for menu items.
        <Menu.Item name={item} key={idx} active={this.state.activeItem === item} onClick={this.handleItemClick} />
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
