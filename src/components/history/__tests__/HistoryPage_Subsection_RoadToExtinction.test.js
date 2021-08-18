/**
 * HistoryPage_Subsection_RoadToExtinction.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 18, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import { config } from '../config'

import HistoryPageSubsectionRoadToExtinction from '../HistoryPage_Subsection_RoadToExtinction'

import { RUN_TEST_NEVER } from '../../../testing/testing'

const sectionConfig = config.contentPageSections["section_PopulationAndRange"];

test('renders HistoryPageSubsectionRoadToExtinction component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <HistoryPageSubsectionRoadToExtinction
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('HistoryPageSubsectionRoadToExtinction component snapshot', () => {
    /**
     * Disable test because we currently use require.context
     * and it doesn't work in Jest.
     */
    // const tree = renderer
    //   .create(
    //     <HistoryPageSubsectionRoadToExtinction
    //       sectionConfig={sectionConfig}
    //     />
    //   ).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
