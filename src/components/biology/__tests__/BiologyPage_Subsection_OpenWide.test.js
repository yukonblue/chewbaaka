/**
 * BiologyPage_Subsection_OpenWide.test.js
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

import BiologyPageSubsectionOpenWide from '../BiologyPage_Subsection_OpenWide'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionOpenWide component', () => {
  render(
    <BiologyPageSubsectionOpenWide
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionOpenWide component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionOpenWide
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
