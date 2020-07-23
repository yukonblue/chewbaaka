/**
 * FuturePage_Subsection_LivestockGuardingDogs.test.js
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

import FuturePageSubsectionLivestockGuardingDogs from '../FuturePage_Subsection_LivestockGuardingDogs'

const sectionConfig = config.contentPageSections["section_SustainableDevelopment"];

test('renders FuturePageSubsectionLivestockGuardingDogs component', () => {
  render(
    <FuturePageSubsectionLivestockGuardingDogs
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionLivestockGuardingDogs component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionLivestockGuardingDogs
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
