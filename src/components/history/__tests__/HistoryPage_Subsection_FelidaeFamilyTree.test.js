/**
 * HistoryPage_Subsection_FelidaeFamilyTree.test.js
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

import HistoryPageSubsectionFelidaeFamilyTree from '../HistoryPage_Subsection_FelidaeFamilyTree'

const sectionConfig = config.contentPageSections["section_Evolution"];

test('renders HistoryPageSubsectionFelidaeFamilyTree component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <HistoryPageSubsectionFelidaeFamilyTree
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('HistoryPageSubsectionFelidaeFamilyTree component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <HistoryPageSubsectionFelidaeFamilyTree
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
