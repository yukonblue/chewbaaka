/**
 * BiologyPage_Subsection_SpotsAndStripes.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Aug 20, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSubsectionSpotsAndStripes from '../BiologyPage_Subsection_SpotsAndStripes'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionSpotsAndStripes component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <BiologyPageSubsectionSpotsAndStripes
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('BiologyPageSubsectionSpotsAndStripes component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <BiologyPageSubsectionSpotsAndStripes
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
