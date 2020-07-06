/**
 * ContentPageTopNavMenuBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { Menu } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import './ContentPageSharedStyles.css'
import './ContentPageTopNavMenuBar.css'

export default class ContentPageTopNavMenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: 'History' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="ContentPageTopNavMenuBarContainer">
        <div>
          <Menu secondary>
            <Menu.Item
              name='History'
              active={activeItem === 'History'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Biology'
              active={activeItem === 'Biology'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Ecology'
              active={activeItem === 'Ecology'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Future'
              active={activeItem === 'Future'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      </div>
    )
  }
}
