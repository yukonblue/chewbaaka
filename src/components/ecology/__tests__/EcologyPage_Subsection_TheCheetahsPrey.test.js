/**
 * EcologyPage_Subsection_TheCheetahsPrey.test.js
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

import EcologyPageSubsectionTheCheetahsPrey from '../EcologyPage_Subsection_TheCheetahsPrey'

const sectionConfig = config.contentPageSections["section_EcosystemAndHabitat"];

test('renders EcologyPageSubsectionTheCheetahsPrey component', () => {
  render(
    <EcologyPageSubsectionTheCheetahsPrey
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionTheCheetahsPrey component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionTheCheetahsPrey
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
