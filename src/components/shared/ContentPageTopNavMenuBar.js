/**
 * ContentPageTopNavMenuBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react';

import { Menu } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './ContentPageSharedStyles.css'
import './ContentPageTopNavMenuBar.css'

export default class ContentPageTopNavMenuBar extends React.Component {

  render() {
    const menuItems = [];
    const menuItemNames = ["Home", "History", "Biology", "Ecology", "Future"]

    for (const [idx, val] of menuItemNames.entries()) {
      menuItems.push(
        <a href={"/" + val.toLowerCase()} key={idx}>
          <Menu.Item key={idx} name={val} />
        </a>
      );
    }

    return (
      <div className="ContentPageTopNavMenuBarContainer">
        <Menu secondary>
          {menuItems}
        </Menu>
      </div>
    )
  }
}
