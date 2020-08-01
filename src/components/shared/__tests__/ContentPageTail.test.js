/**
 * ContentPageTail.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Aug 01, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTail from '../ContentPageTail'

import { RUN_TEST_NEVER } from '../../../testing/testing'

const pageTailNavMenu = {
  prevPage: {
    label: "Biology",
  },
  nextPage: {
    label: "Future"
  }
};

test('renders ContentPageTail component', () => {
  render(
    <ContentPageTail
      pageTailNavMenu={pageTailNavMenu}
    />
  );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('ContentPageTail component snapshot', () => {
    const tree = renderer
      .create(
        <ContentPageTail
          pageTailNavMenu={pageTailNavMenu}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
