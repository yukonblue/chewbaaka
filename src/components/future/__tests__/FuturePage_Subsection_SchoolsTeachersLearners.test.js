/**
 * FuturePage_Subsection_SchoolsTeachersLearners.test.js
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

import FuturePageSubsectionSchoolsTeachersLearners from '../FuturePage_Subsection_SchoolsTeachersLearners'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionSchoolsTeachersLearners component', () => {
  render(
    <FuturePageSubsectionSchoolsTeachersLearners
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionSchoolsTeachersLearners component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionSchoolsTeachersLearners
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
