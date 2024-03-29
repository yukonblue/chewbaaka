/**
 * FuturePage_Section_Conservation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionConservation from '../FuturePage_Section_Conservation'

test('renders FuturePageSectionConservation component', () => {
  render(
    <FuturePageSectionConservation
      config={config}
    />
  );
});

test('FuturePageSectionConservation component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSectionConservation
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
