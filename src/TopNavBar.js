/**
 * TopNavBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import { Container, Image, Menu } from 'semantic-ui-react'

import logo from './logo.svg'

class TopNavBar extends React.Component {
  render() {
    return (
      <Menu fixed="top" className="topNavBarMenu">
        <Container>
          <Menu.Item as="a" header href="https://cheetah.org">
            <Image
              size="small"
              src={logo}
              style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
        <Menu.Item as="a" href="https://www.iucnredlist.org/species/219/50649567" target="_blank">IUCN Status</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default TopNavBar;
