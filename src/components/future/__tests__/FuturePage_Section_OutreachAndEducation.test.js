/**
 * FuturePage_Section_OutreachAndEducation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import FuturePageSectionOutreachAndEducation from '../FuturePage_Section_OutreachAndEducation'

test('renders FuturePageSectionOutreachAndEducation component', () => {
  render(
    <FuturePageSectionOutreachAndEducation
      config={config}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('FuturePageSectionOutreachAndEducation component snapshot', () => {
    const tree = renderer
      .create(
        <FuturePageSectionOutreachAndEducation
          config={config}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
