/**
 * EcologyPage_Subsection_TheCheetahsPrey.test.js
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

import EcologyPageSubsectionTheCheetahsPrey from '../EcologyPage_Subsection_TheCheetahsPrey'

const sectionConfig = config.contentPageSections["section_EcosystemAndHabitat"];

test('renders EcologyPageSubsectionTheCheetahsPrey component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <EcologyPageSubsectionTheCheetahsPrey
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('EcologyPageSubsectionTheCheetahsPrey component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <EcologyPageSubsectionTheCheetahsPrey
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
