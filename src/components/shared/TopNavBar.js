/**
 * TopNavBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 13, 2020
 */

import React from 'react';

import { Container, Image, Menu } from 'semantic-ui-react'

import logo from './assets/cheetah-conservation-fund-30-logo.svg'

import './TopNavBar.css';

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class TopNavBar extends React.Component {

  render() {
    /**
     * Set `fixed` prop of `Menu` component to "top"
     * in test mode to avoid warning about invalid prop.
     *
     * TODO: Figure out a better solution for this ...
     */
    const menuFixedStatus = ( this.props.fixedOnTop || __TEST__ ) ? "top": "";

    return (
      <Menu fixed={menuFixedStatus} className="topNavBarMenu" data-testid="TopNavBarComponentTestId">
        <Container>
          <Menu.Item as="a" header href="https://cheetah.org" data-testid="mainNavBarItem">
            <Image
              size="small"
              src={logo}
              style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          <Menu.Item as="a" href="https://www.iucnredlist.org/species/219/50649567" target="_blank">IUCN Status</Menu.Item>
          <Menu.Item as="a" href="https://wildnet.org/wildlife-programs/cheetah-namibia/" target="_blank">Wildlife Conservation Network</Menu.Item>
          <Menu.Item as="a" href="https://cheetah.org/about/what-we-do/conservation/" target="_blank">Conservation</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
