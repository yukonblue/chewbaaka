/**
 * ContentPageHead.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageHead from '../ContentPageHead';

test('renders ContentPageHead component', () => {
  const pageProps = {
    coverImage: '',
    title: 'Page Title',
    subtile: 'Page Subtitle'
  };

  render(<ContentPageHead pageProps={pageProps} />);

  const component = screen.getByTestId("ContentPageHeadComponentTestId");
  expect(component).toBeInTheDocument();
});
