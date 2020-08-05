/**
 * ImageCollageCell.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import ImageCollageCell from '../ImageCollageCell'

import image from '../assets/cheetah-conservation-fund-logo-mini-min.jpg'

test('renders ImageCollageCell compoent', () => {
  const title = "Title";
  const subtitle = "This is a subtitle";

  render(
    <ImageCollageCell
      image={image}
      title={title}
      subtitle={subtitle}
    />
  );
});
