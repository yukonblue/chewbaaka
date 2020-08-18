/**
 * HistoryPageCheetahPopulationIllustration.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import HistoryPageCheetahPopulationIllustration from '../HistoryPageCheetahPopulationIllustration'

import { RUN_TEST_NEVER } from '../../../testing/testing'

test('renders HistoryPageSubsectionRoadToExtinction component', () => {
  render(
    <HistoryPageCheetahPopulationIllustration />
  );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('HistoryPageSubsectionRoadToExtinction component snapshot', () => {
    const tree = renderer
      .create(
        <HistoryPageCheetahPopulationIllustration />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
