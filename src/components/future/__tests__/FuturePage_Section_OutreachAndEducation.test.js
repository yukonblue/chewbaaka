/**
 * FuturePage_Section_OutreachAndEducation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionOutreachAndEducation from '../FuturePage_Section_OutreachAndEducation'

test('renders FuturePageSectionOutreachAndEducation component', () => {
  render(
    <FuturePageSectionOutreachAndEducation
      config={config}
    />
  );
});

test('FuturePageSectionOutreachAndEducation component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSectionOutreachAndEducation
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
