/**
 * BiologyPage_Subsection_FeetAndClaws.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSubsectionFeetAndClaws from '../BiologyPage_Subsection_FeetAndClaws'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionFeetAndClaws component', () => {
  render(
    <BiologyPageSubsectionFeetAndClaws
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionFeetAndClaws component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionFeetAndClaws
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
