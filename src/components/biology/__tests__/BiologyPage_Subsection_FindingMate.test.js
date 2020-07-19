/**
 * BiologyPage_Subsection_FindingMate.test.js
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

import BiologyPageSubsectionFindingMate from '../BiologyPage_Subsection_FindingMate'

const sectionConfig = config.contentPageSections["section_Lifecycle"];

test('renders BiologyPageSubsectionFindingMate component', () => {
  render(
    <BiologyPageSubsectionFindingMate
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionFindingMate component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionFindingMate
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
