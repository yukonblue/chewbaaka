/**
 * EcologyPage_Subsection_WhereCheetahsLive.test.js
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

import EcologyPageSubsectionWhereCheetahsLive from '../EcologyPage_Subsection_WhereCheetahsLive'

const sectionConfig = config.contentPageSections["section_EcosystemAndHabitat"];

test('renders EcologyPageSubsectionWhereCheetahsLive component', () => {
  render(
    <EcologyPageSubsectionWhereCheetahsLive
      sectionConfig={sectionConfig}
    />
  );
});

test('EcologyPageSubsectionWhereCheetahsLive component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSubsectionWhereCheetahsLive
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
