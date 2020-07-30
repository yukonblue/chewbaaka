/**
 * FuturePage_Subsection_InternshipsAndVolunteering.test.js
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

import FuturePageSubsectionInternshipsAndVolunteering from '../FuturePage_Subsection_InternshipsAndVolunteering'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionInternshipsAndVolunteering component', () => {
  render(
    <FuturePageSubsectionInternshipsAndVolunteering
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionInternshipsAndVolunteering component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionInternshipsAndVolunteering
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
