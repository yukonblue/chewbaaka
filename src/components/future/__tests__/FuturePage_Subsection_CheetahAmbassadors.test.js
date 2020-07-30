/**
 * FuturePage_Subsection_CheetahAmbassadors.test.js
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

import FuturePageSubsectionCheetahAmbassadors from '../FuturePage_Subsection_CheetahAmbassadors'

const sectionConfig = config.contentPageSections["section_Conservation"];

test('renders FuturePageSubsectionCheetahAmbassadors component', () => {
  render(
    <FuturePageSubsectionCheetahAmbassadors
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionCheetahAmbassadors component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionCheetahAmbassadors
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
