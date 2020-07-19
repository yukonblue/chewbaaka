/**
 * BiologyPage_Subsection_Lifecycle_Stage_1.test.js
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

import BiologyPageSubsectionLifecycleStage1 from '../BiologyPage_Subsection_Lifecycle_Stage_1'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLifecycleStage1 component', () => {
  render(
    <BiologyPageSubsectionLifecycleStage1
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionLifecycleStage1 component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionLifecycleStage1
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
