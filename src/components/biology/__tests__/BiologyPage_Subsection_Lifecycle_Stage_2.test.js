/**
 * BiologyPage_Subsection_Lifecycle_Stage_2.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSubsectionLifecycleStage2 from '../BiologyPage_Subsection_Lifecycle_Stage_2'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLifecycleStage2 component', () => {
  render(
    <BiologyPageSubsectionLifecycleStage2
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionLifecycleStage2 component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionLifecycleStage2
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
