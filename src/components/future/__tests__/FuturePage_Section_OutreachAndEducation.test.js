/**
 * FuturePage_Section_OutreachAndEducation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionOutreachAndEducation from '../FuturePage_Section_OutreachAndEducation'

test('renders FuturePageSectionOutreachAndEducation component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <FuturePageSectionOutreachAndEducation
  //     config={config}
  //   />
  // );
});

test('FuturePageSectionOutreachAndEducation component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <FuturePageSectionOutreachAndEducation
  //       config={config}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
