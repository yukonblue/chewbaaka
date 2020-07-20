/**
 * BiologyPage_Subsection_Anatomy.test.js
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

import BiologyPageSubsectionAnatomy from '../BiologyPage_Subsection_Anatomy'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionAnatomy component', () => {
  render(
    <BiologyPageSubsectionAnatomy
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionAnatomy component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionAnatomy
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
