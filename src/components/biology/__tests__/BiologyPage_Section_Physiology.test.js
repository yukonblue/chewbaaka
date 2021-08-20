/**
 * BiologyPage_Section_Physiology.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Aug 20, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import BiologyPageSectionPhysiology from '../BiologyPage_Section_Physiology'

test('renders BiologyPageSectionPhysiology component', () => {
  /**
   * Disable test because we currently use require.context
   * and it doesn't work in Jest.
   */
  // render(<BiologyPageSectionPhysiology config={config}/>);
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('BiologyPageSectionPhysiology component snapshot', () => {
    /**
     * Disable test because we currently use require.context
     * and it doesn't work in Jest.
     */
    // const tree = renderer
    //   .create(
    //     <BiologyPageSectionPhysiology config={config}/>)
    //   .toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
