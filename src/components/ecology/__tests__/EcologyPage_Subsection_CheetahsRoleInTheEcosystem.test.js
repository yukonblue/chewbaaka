/**
 * EcologyPage_Subsection_CheetahsRoleInTheEcosystem.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSubsectionCheetahsRoleInTheEcosystem from '../EcologyPage_Subsection_CheetahsRoleInTheEcosystem'

const sectionConfig = config.contentPageSections["section_EcosystemAndHabitat"];

test('renders EcologyPageSubsectionCheetahsRoleInTheEcosystem component', () => {
  render(
    <EcologyPageSubsectionCheetahsRoleInTheEcosystem
      sectionConfig={sectionConfig}
    />
  );
});

test('EcologyPageSubsectionCheetahsRoleInTheEcosystem component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSubsectionCheetahsRoleInTheEcosystem
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
