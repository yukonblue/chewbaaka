/**
 * CheetahAccelerationIllustration.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import CheetahAccelerationIllustration from '../CheetahAccelerationIllustration'

test('renders CheetahAccelerationIllustration component', () => {
  render(
    <CheetahAccelerationIllustration />
  );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('CheetahAccelerationIllustration component snapshot', () => {
    const tree = renderer
      .create(
        <CheetahAccelerationIllustration />
      ) .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
