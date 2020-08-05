/**
 * ImageCollage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import ImageCollage from '../ImageCollage'

import image from '../assets/cheetah-conservation-fund-logo-mini-min.jpg'

test('renders ImageCollage compoent', () => {
  const title = "Title";
  const subtitle = "This is a subtitle";

  render(
    <ImageCollage
      cells={[
          {
            image: image,
            title: title,
            subtitle: subtitle
          }
        ]}
    />
  );
});
