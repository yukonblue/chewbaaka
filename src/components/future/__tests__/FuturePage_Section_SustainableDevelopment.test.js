/**
 * FuturePage_Section_SustainableDevelopment.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionSustainableDevelopment from '../FuturePage_Section_SustainableDevelopment'

test('renders FuturePageSectionSustainableDevelopment component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <FuturePageSectionSustainableDevelopment
  //     config={config}
  //   />
  // );
});

test('FuturePageSectionSustainableDevelopment component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <FuturePageSectionSustainableDevelopment
  //       config={config}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
