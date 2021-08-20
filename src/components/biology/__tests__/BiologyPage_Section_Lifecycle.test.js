/**
 * BiologyPage_Section_Lifecycle.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 20, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSectionLifecyle from '../BiologyPage_Section_Lifecycle'

test('renders BiologyPageSectionLifecyle component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(<BiologyPageSectionLifecyle config={config}/>);
});

test('BiologyPageSectionLifecyle component snapshot', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // const tree = renderer
  //   .create(
  //     <BiologyPageSectionLifecyle config={config}/>)
  //   .toJSON();
  // expect(tree).toMatchSnapshot();
});
