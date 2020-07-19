/**
 * BiologyPage_Subsection_BodyAndBone.test.js
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

import { RUN_TEST_NEVER } from '../../../testing/testing'

import BiologyPageSubsectionBodyAndBone from '../BiologyPage_Subsection_BodyAndBone'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionBodyAndBone component', () => {
  render(
    <BiologyPageSubsectionBodyAndBone
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('BiologyPageSubsectionBodyAndBone component snapshot', () => {
    const tree = renderer
      .create(
        <BiologyPageSubsectionBodyAndBone
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});