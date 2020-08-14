/**
 * ContentPageTopNavMenuBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 13, 2020
 */

import React from 'react'

import { Link } from 'react-router-dom'

import logo from './assets/cheetah-conservation-fund-30-logo.svg'

import './ContentPageSharedStyles.css'

import './ContentPageTopNavMenuBar.css'

export default class ContentPageTopNavMenuBar extends React.Component {

  render() {
    return (
      <div className="ContentPageTopNavMenuBarContainer">
        {this.renderNavBarLhs()}
        {this.renderNavBarRhs()}
      </div>
    );
  }

  renderNavBarLhs() {
    return (
      <div className="ContentPageTopNavMenuBarLogoPseudoContainer">
        <a href="https://cheetah.org/">
          <img
            src={logo}
            alt="CCF logo"
          />
        </a>
      </div>
    );
  }

  renderNavBarRhs() {
    return (
      <div className="ContentPageTopNavMenuBarMenuListSidePseudoContainer">
        {this.renderNavBarMenuList()}
      </div>
    );
  }

  renderNavBarMenuList() {
    const menuItems = [];
    const menuItemNames = ["Home", "History", "Biology", "Ecology", "Future"]

    for (const [idx, val] of menuItemNames.entries()) {
      menuItems.push(
        <li
          key={idx}
          className={this.props.pageTitle === val ? "ActiveItem" : ""}
        >
          <Link to={"/" + val.toLowerCase()} key={idx}>
            {val}
          </Link>
        </li>
      );
    }

    return (
      <nav>
        <ul className="ContentPageTopNavMenuBarMenuList">
          {menuItems}
        </ul>
      </nav>
    );
  }
}
