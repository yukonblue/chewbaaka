/**
 * BiologyPage_Subsection_SpotsAndStripes.test.js
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

import BiologyPageSubsectionSpotsAndStripes from '../BiologyPage_Subsection_SpotsAndStripes'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionSpotsAndStripes component', () => {
  render(
    <BiologyPageSubsectionSpotsAndStripes
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionSpotsAndStripes component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionSpotsAndStripes
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
