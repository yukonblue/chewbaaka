/**
 * AfricanWildlifeTracksIllustration.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import AfricanWildlifeTracksIllustration from '../AfricanWildlifeTracksIllustration'

test('renders AfricanWildlifeTracksIllustration component', () => {
  render(
    <AfricanWildlifeTracksIllustration />
  );
});

test('AfricanWildlifeTracksIllustration component snapshot', () => {
  const tree = renderer
    .create(
      <AfricanWildlifeTracksIllustration />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
