/**
 * FuturePage_Subsection_FutureFarmersOfAfrica.test.js
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

import FuturePageSubsectionFutureFarmersOfAfrica from '../FuturePage_Subsection_FutureFarmersOfAfrica'

const sectionConfig = config.contentPageSections["section_SustainableDevelopment"];

test('renders FuturePageSubsectionFutureFarmersOfAfrica component', () => {
  render(
    <FuturePageSubsectionFutureFarmersOfAfrica
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSubsectionFutureFarmersOfAfrica component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSubsectionFutureFarmersOfAfrica
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
