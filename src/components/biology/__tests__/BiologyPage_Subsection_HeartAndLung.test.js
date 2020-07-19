/**
 * BiologyPage_Subsection_HeartAndLung.test.js
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

import BiologyPageSubsectionHearAndLung from '../BiologyPage_Subsection_HeartAndLung'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionHearAndLung component', () => {
  render(
    <BiologyPageSubsectionHearAndLung
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionHearAndLung component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionHearAndLung
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
