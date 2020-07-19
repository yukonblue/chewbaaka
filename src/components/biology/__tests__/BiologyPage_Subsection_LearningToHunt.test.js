/**
 * BiologyPage_Subsection_LearningToHunt.test.js
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

import BiologyPageSubsectionLearningToHunt from '../BiologyPage_Subsection_LearningToHunt'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionLearningToHunt component', () => {
  render(
    <BiologyPageSubsectionLearningToHunt
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionLearningToHunt component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionLearningToHunt
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
