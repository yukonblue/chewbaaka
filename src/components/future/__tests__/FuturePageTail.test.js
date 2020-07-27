/**
 * FuturePageTail.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FuturePageTail from '../FuturePageTail'

test('renders FuturePageTail component', () => {
  render(
    <FuturePageTail />
  );
});

test('FuturePageTail component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageTail />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
