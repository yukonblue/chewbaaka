/**
 * BiologyPage_Subsection_Abnormalities.test.js
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

import BiologyPageSubsectionAbnormalities from '../BiologyPage_Subsection_Abnormalities'

const sectionConfig = config.contentPageSections["section_Genetics"];

test('renders BiologyPageSubsectionAbnormalities component', () => {
  render(
    <BiologyPageSubsectionAbnormalities
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionAbnormalities component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionAbnormalities
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
