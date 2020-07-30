/**
 * EcologyPage_Section_Ecomanagement.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSectionEcomanagement from '../EcologyPage_Section_Ecomanagement'

test('renders EcologyPageSectionEcomanagement component', () => {
  render(
    <EcologyPageSectionEcomanagement
      config={config}
    />
  );
});

test('EcologyPageSectionEcomanagement component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSectionEcomanagement
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
