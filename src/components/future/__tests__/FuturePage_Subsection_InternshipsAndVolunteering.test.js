/**
 * FuturePage_Subsection_InternshipsAndVolunteering.test.js
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

import FuturePageSubsectionInternshipsAndVolunteering from '../FuturePage_Subsection_InternshipsAndVolunteering'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionInternshipsAndVolunteering component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <FuturePageSubsectionInternshipsAndVolunteering
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('FuturePageSubsectionInternshipsAndVolunteering component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <FuturePageSubsectionInternshipsAndVolunteering
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
