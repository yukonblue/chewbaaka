/**
 * EcologyPage_Subsection_TheFarmingCommunity.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSubsectionTheFarmingCommunity from '../EcologyPage_Subsection_TheFarmingCommunity'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionTheFarmingCommunity component', () => {
  render(
    <EcologyPageSubsectionTheFarmingCommunity
      sectionConfig={sectionConfig}
    />
  );
});

test('EcologyPageSubsectionTheFarmingCommunity component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSubsectionTheFarmingCommunity
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
