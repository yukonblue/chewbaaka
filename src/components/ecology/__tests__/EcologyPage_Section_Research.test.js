/**
 * EcologyPage_Section_Research.test.js
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

import EcologyPageSectionResearch from '../EcologyPage_Section_Research'

test('renders EcologyPageSectionResearch component', () => {
  render(
    <EcologyPageSectionResearch
      config={config}
    />
  );
});

test('EcologyPageSectionResearch component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSectionResearch
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
