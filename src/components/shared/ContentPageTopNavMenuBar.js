/**
 * ContentPageTopNavMenuBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import './ContentPageSharedStyles.css'

import './ContentPageTopNavMenuBar.css'

export default class ContentPageTopNavMenuBar extends React.Component {

  render() {
    const menuItems = [];
    const menuItemNames = ["Home", "History", "Biology", "Ecology", "Future"]

    for (const [idx, val] of menuItemNames.entries()) {
      menuItems.push(
        <Link to={"/" + val.toLowerCase()} key={idx}>
          <Menu.Item
            key={idx}
            name={val}
            active={this.props.pageTitle === val}
          />
        </Link>
      );
    }

    return (
      <div className="ContentPageTopNavMenuBarContainer">
        <Menu secondary>
          {menuItems}
        </Menu>
      </div>
    );
  }
}
