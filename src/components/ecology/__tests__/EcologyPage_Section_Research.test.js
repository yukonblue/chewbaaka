/**
 * EcologyPage_Section_Research.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import EcologyPageSectionResearch from '../EcologyPage_Section_Research'

test('renders EcologyPageSectionResearch component', () => {
  render(
    <EcologyPageSectionResearch
      config={config}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSectionResearch component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSectionResearch
          config={config}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
