/**
 * EcologyPage_Subsection_HuntingAndPredatorControl.test.js
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

import EcologyPageSubsectionHuntingAndPredatorControl from '../EcologyPage_Subsection_HuntingAndPredatorControl'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionHuntingAndPredatorControl component', () => {
  render(
    <EcologyPageSubsectionHuntingAndPredatorControl
      sectionConfig={sectionConfig}
    />
  );
});

test('EcologyPageSubsectionHuntingAndPredatorControl component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSubsectionHuntingAndPredatorControl
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
