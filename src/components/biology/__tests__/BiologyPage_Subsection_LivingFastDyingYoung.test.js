/**
 * BiologyPage_Subsection_LivingFastDyingYoung.test.js
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

import BiologyPageSubsectionLivingFastDyingYoung from '../BiologyPage_Subsection_LivingFastDyingYoung'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLivingFastDyingYoung component', () => {
  render(
    <BiologyPageSubsectionLivingFastDyingYoung
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionLivingFastDyingYoung component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionLivingFastDyingYoung
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
