/**
 * EcologyPage_Subsection_WhereCheetahsLive.test.js
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

import EcologyPageSubsectionWhereCheetahsLive from '../EcologyPage_Subsection_WhereCheetahsLive'

const sectionConfig = config.contentPageSections["section_EcosystemAndHabitat"];

test('renders EcologyPageSubsectionWhereCheetahsLive component', () => {
  render(
    <EcologyPageSubsectionWhereCheetahsLive
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionWhereCheetahsLive component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionWhereCheetahsLive
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
