/**
 * FuturePage_Section_SustainableDevelopment.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionSustainableDevelopment from '../FuturePage_Section_SustainableDevelopment'

test('renders FuturePageSectionSustainableDevelopment component', () => {
  render(
    <FuturePageSectionSustainableDevelopment
      config={config}
    />
  );
});

test('FuturePageSectionSustainableDevelopment component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSectionSustainableDevelopment
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
