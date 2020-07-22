/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Jul 21, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import EcologyPageSubsectionCheetahFriendlyFarming from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionCheetahFriendlyFarming component', () => {
  render(
    <EcologyPageSubsectionCheetahFriendlyFarming
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionCheetahFriendlyFarming component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionCheetahFriendlyFarming
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
