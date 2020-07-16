/**
 * ContentPageSkeleton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageSkeleton from '../ContentPageSkeleton';

test('renders ContentPageSkeleton component', () => {
  const pageProps = {
    coverImage: "",
    title: "Title",
    subtitle: "This is a subtitle",
    pageMenuItems: [
      {
        title: "Menu Item 1"
      },
      {
        title: "Menu Item 2"
      }
    ]
  };

  render(<ContentPageSkeleton pageProps={pageProps}/>);

  const component = screen.getByTestId("ContentPageSkeletonComponentTestId");
  expect(component).toBeInTheDocument();
});
