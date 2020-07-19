/**
 * BiologyPage_Subsection_Lifecycle_Stage_4.test.js
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

import BiologyPageSubsectionLifecycleStage4 from '../BiologyPage_Subsection_Lifecycle_Stage_4'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLifecycleStage4 component', () => {
  render(
    <BiologyPageSubsectionLifecycleStage4
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionLifecycleStage4 component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionLifecycleStage4
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
