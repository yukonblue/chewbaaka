/**
 * TopNavBar.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import TopNavBar from '../TopNavBar';

test('renders top nav bar', () => {
  render(<TopNavBar />);

  // Tests first/main nav bar item.
  {
    const navBarItemMainItem = screen.getByTestId('mainNavBarItem');
    expect(navBarItemMainItem).toBeInTheDocument();

    // Expect main nav bar item to point to CCF site.
    expect(navBarItemMainItem.href).toBe("https://cheetah.org/");
  }

  // Tests second nav bar item.
  {
    const navBarItemIUCNStatus = screen.getByText(/IUCN status/i);
    expect(navBarItemIUCNStatus).toBeInTheDocument();

    // Expect this nav bar item point to IUCN Red List page.
    expect(navBarItemIUCNStatus.href).toBe("https://www.iucnredlist.org/species/219/50649567");
  }

  // Tests third nav bar item.
  {
    const navBarItemWCN = screen.getByText(/Wildlife Conservation Network/i);
    expect(navBarItemWCN).toBeInTheDocument();

    // Expect this nav bar item point to WCN site.
    expect(navBarItemWCN.href).toBe("https://wildnet.org/wildlife-programs/cheetah-namibia/");
  }
});

test('TopNavBar component snapshot', () => {
  const tree = renderer
    .create(
      <TopNavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
