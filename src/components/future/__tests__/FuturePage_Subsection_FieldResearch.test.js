/**
 * FuturePage_Subsection_FieldResearch.test.js
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

import FuturePageSubsectionFieldResearch from '../FuturePage_Subsection_FieldResearch'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionFieldResearch component', () => {
  render(
    <FuturePageSubsectionFieldResearch
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionFieldResearch component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionFieldResearch
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
