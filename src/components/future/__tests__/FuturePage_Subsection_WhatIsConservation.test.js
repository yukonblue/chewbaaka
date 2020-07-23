/**
 * FuturePage_Subsection_WhatIsConservation.test.js
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

import FuturePageSubsectionWhatIsConservation from '../FuturePage_Subsection_WhatIsConservation'

const sectionConfig = config.contentPageSections["section_Conservation"];

test('renders FuturePageSubsectionWhatIsConservation component', () => {
  render(
    <FuturePageSubsectionWhatIsConservation
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionWhatIsConservation component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionWhatIsConservation
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
