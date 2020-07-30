/**
 * FuturePage_Subsection_FieldResearch.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSubsectionFieldResearch from '../FuturePage_Subsection_FieldResearch'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionFieldResearch component', () => {
  render(
    <FuturePageSubsectionFieldResearch
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionFieldResearch component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionFieldResearch
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
