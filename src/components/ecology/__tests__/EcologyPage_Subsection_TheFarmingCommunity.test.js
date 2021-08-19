/**
 * EcologyPage_Subsection_TheFarmingCommunity.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSubsectionTheFarmingCommunity from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionTheFarmingCommunity component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <EcologyPageSubsectionTheFarmingCommunity
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('EcologyPageSubsectionTheFarmingCommunity component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <EcologyPageSubsectionTheFarmingCommunity
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
