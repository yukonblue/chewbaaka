/**
 * BiologyPage_Subsection_Skull.test.js
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

import BiologyPageSubsectionSkull from '../BiologyPage_Subsection_Skull'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionSkull component', () => {
  render(
    <BiologyPageSubsectionSkull
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionSkull component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionSkull
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
