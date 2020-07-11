/**
 * HistoryPage_Section_RangeAndPopulation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import { render } from '@testing-library/react';

import { config } from '../config'

import renderer from 'react-test-renderer';

import HistoryPageSectionRangeAndPopulation from '../HistoryPage_Section_RangeAndPopulation';

import { RUN_TEST_NEVER } from '../../../testing/testing'

test('renders HistoryPageSectionRangeAndPopulation component', () => {
  render(<HistoryPageSectionRangeAndPopulation config={config}/>);
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('HistoryPageSectionRangeAndPopulation component snapshot', () => {
    const tree = renderer
      .create(
        <HistoryPageSectionRangeAndPopulation config={config}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
