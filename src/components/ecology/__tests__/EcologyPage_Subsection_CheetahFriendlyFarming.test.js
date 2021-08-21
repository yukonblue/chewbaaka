/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSubsectionCheetahFriendlyFarming from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionCheetahFriendlyFarming component', () => {
  render(
    <EcologyPageSubsectionCheetahFriendlyFarming
      sectionConfig={sectionConfig}
    />
  );
});

test('EcologyPageSubsectionCheetahFriendlyFarming component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSubsectionCheetahFriendlyFarming
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
