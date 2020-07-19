/**
 * BigCatSpotsIllustration.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import BigCatSpotsIllustration from '../BigCatSpotsIllustration'

test('renders BigCatSpotsIllustration component', () => {
  render(
    <BigCatSpotsIllustration />
  );
});

test('BigCatSpotsIllustration component snapshot', () => {
  const tree = renderer
    .create(
      <BigCatSpotsIllustration />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
