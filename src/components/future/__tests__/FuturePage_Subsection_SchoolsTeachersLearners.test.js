/**
 * FuturePage_Subsection_SchoolsTeachersLearners.test.js
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

import FuturePageSubsectionSchoolsTeachersLearners from '../FuturePage_Subsection_SchoolsTeachersLearners'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionSchoolsTeachersLearners component', () => {
  render(
    <FuturePageSubsectionSchoolsTeachersLearners
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionSchoolsTeachersLearners component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionSchoolsTeachersLearners
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
