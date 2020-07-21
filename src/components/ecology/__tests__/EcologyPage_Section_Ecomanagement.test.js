/**
 * EcologyPage_Section_Ecomanagement.test.js
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

import EcologyPageSectionEcomanagement from '../EcologyPage_Section_Ecomanagement'

test('renders EcologyPageSectionEcomanagement component', () => {
  render(
    <EcologyPageSectionEcomanagement
      config={config}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSectionEcomanagement component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSectionEcomanagement
          config={config}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
