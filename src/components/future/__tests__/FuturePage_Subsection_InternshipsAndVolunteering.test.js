/**
 * FuturePage_Subsection_InternshipsAndVolunteering.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import FuturePageSubsectionInternshipsAndVolunteering from '../FuturePage_Subsection_InternshipsAndVolunteering'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionInternshipsAndVolunteering component', () => {
  render(
    <FuturePageSubsectionInternshipsAndVolunteering
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionInternshipsAndVolunteering component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionInternshipsAndVolunteering
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
