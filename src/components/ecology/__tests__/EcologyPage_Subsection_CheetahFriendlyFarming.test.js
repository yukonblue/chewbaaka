/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSubsectionCheetahFriendlyFarming from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionCheetahFriendlyFarming component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <EcologyPageSubsectionCheetahFriendlyFarming
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('EcologyPageSubsectionCheetahFriendlyFarming component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <EcologyPageSubsectionCheetahFriendlyFarming
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
