/**
 * BiologyPage_Subsection_RipAndTear.test.js
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

import BiologyPage_Subsection_RipAndTear from '../BiologyPage_Subsection_RipAndTear'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPage_Subsection_RipAndTear component', () => {
  render(
    <BiologyPage_Subsection_RipAndTear
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPage_Subsection_RipAndTear component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPage_Subsection_RipAndTear
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
