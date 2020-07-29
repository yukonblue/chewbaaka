/**
 * TopNavBar.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import { Container, Image, Menu } from 'semantic-ui-react'

import logo from './assets/cheetah-conservation-fund-30-logo.svg'

import './TopNavBar.css'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class TopNavBar extends React.Component {

  static menuItemsData = [
    {
      href: "https://www.iucnredlist.org/species/219/50649567",
      label: "IUCN Status"
    },
    {
      href: "https://wildnet.org/wildlife-programs/cheetah-namibia/",
      label: "Conservation"
    },
    {
      href: "https://cheetah.org/get-involved/ways-to-give/",
      label: "Get Involved"
    }
  ];

  render() {
    /**
     * Set `fixed` prop of `Menu` component to "top"
     * in test mode to avoid warning about invalid prop.
     *
     * TODO: Figure out a better solution for this ...
     */
    const menuFixedStatus = ( this.props.fixedOnTop || __TEST__ ) ? "top": "";

    const menuItems = TopNavBar.menuItemsData.map((item, idx) => (
      <Menu.Item as="a" href={item.href} target="_blank" key={idx}>
        {item.label}
      </Menu.Item>
    ));

    return (
      <Menu fixed={menuFixedStatus} className="TopNavBarMenu" data-testid="TopNavBarComponentTestId">
        <Container>
          <Menu.Item as="a" header href="https://cheetah.org" data-testid="TopNavBarComponentMainNavBarItemTestId">
            <Image
              size="small"
              src={logo}
              style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          {menuItems}
        </Container>
      </Menu>
    )
  }
}
