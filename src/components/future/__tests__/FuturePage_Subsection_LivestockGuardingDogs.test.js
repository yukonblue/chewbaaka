/**
 * FuturePage_Subsection_LivestockGuardingDogs.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSubsectionLivestockGuardingDogs from '../FuturePage_Subsection_LivestockGuardingDogs'

const sectionConfig = config.contentPageSections["section_SustainableDevelopment"];

test('renders FuturePageSubsectionLivestockGuardingDogs component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <FuturePageSubsectionLivestockGuardingDogs
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('FuturePageSubsectionLivestockGuardingDogs component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <FuturePageSubsectionLivestockGuardingDogs
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
