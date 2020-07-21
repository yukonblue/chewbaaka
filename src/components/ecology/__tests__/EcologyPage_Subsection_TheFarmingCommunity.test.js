/**
 * EcologyPage_Subsection_TheFarmingCommunity.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import EcologyPageSubsectionTheFarmingCommunity from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionTheFarmingCommunity component', () => {
  render(
    <EcologyPageSubsectionTheFarmingCommunity
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionTheFarmingCommunity component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionTheFarmingCommunity
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
