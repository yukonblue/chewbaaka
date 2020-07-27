/**
 * ContentPageTail.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTail from '../ContentPageTail'

import { RUN_TEST_NEVER } from '../../../testing/testing'

test('renders ContentPageTail component', () => {
  render(
    <ContentPageTail />
  );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('ContentPageTail component snapshot', () => {
    const tree = renderer
      .create(
        <ContentPageTail />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
