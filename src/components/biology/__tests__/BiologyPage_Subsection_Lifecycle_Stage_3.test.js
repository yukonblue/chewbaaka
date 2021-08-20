/**
 * BiologyPage_Subsection_Lifecycle_Stage_3.test.js
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

import BiologyPageSubsectionLifecycleStage3 from '../BiologyPage_Subsection_Lifecycle_Stage_3'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLifecycleStage3 component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <BiologyPageSubsectionLifecycleStage3
  //     sectionConfig={sectionConfig}
  //   />
  // );
});

test('BiologyPageSubsectionLifecycleStage3 component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <BiologyPageSubsectionLifecycleStage3
  //       sectionConfig={sectionConfig}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
