/**
 * FuturePage_Subsection_TheRoleOfZoos.test.js
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

import FuturePageSubsectionTheRoleOfZoos from '../FuturePage_Subsection_TheRoleOfZoos'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionTheRoleOfZoos component', () => {
  render(
    <FuturePageSubsectionTheRoleOfZoos
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionTheRoleOfZoos component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionTheRoleOfZoos
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
