/**
 * EcologyPage_Section_Ecomanagement.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSectionEcomanagement from '../EcologyPage_Section_Ecomanagement'

test('renders EcologyPageSectionEcomanagement component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(
  //   <EcologyPageSectionEcomanagement
  //     config={config}
  //   />
  // );
});

test('EcologyPageSectionEcomanagement component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <EcologyPageSectionEcomanagement
  //       config={config}
  //     />
  //   ).toJSON();
  // expect(tree).toMatchSnapshot();
});
