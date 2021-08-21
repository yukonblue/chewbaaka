/**
 * HistoryPage_Section_Evolution.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react';

import { render } from '@testing-library/react';

import { config } from '../config'

import renderer from 'react-test-renderer';

import HistoryPageSectionEvolution from '../HistoryPage_Section_Evolution';

import { RUN_TEST_NEVER } from '../../../testing/testing'

test('renders HistoryPageSectionEvolution component', () => {
  render(<HistoryPageSectionEvolution config={config}/>);
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('HistoryPageSectionEvolution component snapshot', () => {
    const tree = renderer
      .create(
        <HistoryPageSectionEvolution config={config}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
