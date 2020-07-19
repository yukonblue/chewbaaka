/**
 * BiologyPage_Subsection_GeneticConfusion.test.js
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

import BiologyPageSubsectionGeneticConfusion from '../BiologyPage_Subsection_GeneticConfusion'

const sectionConfig = config.contentPageSections["section_Genetics"];

test('renders BiologyPageSubsectionGeneticConfusion component', () => {
  render(
    <BiologyPageSubsectionGeneticConfusion
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionGeneticConfusion component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionGeneticConfusion
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
