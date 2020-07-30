/**
 * FuturePage_Subsection_MissionPossible.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSubsectionMissionPossible from '../FuturePage_Subsection_MissionPossible'

const sectionConfig = config.contentPageSections["section_SustainableDevelopment"];

test('renders FuturePageSubsectionMissionPossible component', () => {
  render(
    <FuturePageSubsectionMissionPossible
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionMissionPossible component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionMissionPossible
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
