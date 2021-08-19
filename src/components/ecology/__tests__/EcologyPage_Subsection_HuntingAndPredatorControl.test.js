/**
 * EcologyPage_Subsection_HuntingAndPredatorControl.test.js
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

import EcologyPageSubsectionHuntingAndPredatorControl from '../EcologyPage_Subsection_HuntingAndPredatorControl'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionHuntingAndPredatorControl component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <EcologyPageSubsectionHuntingAndPredatorControl
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('EcologyPageSubsectionHuntingAndPredatorControl component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <EcologyPageSubsectionHuntingAndPredatorControl
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
