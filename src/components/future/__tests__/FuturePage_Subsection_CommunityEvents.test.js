/**
 * FuturePage_Subsection_CommunityEvents.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSubsectionCommunityEvents from '../FuturePage_Subsection_CommunityEvents'

const sectionConfig = config.contentPageSections["section_OutreachAndEducation"];

test('renders FuturePageSubsectionCommunityEvents component', () => {
  render(
    <FuturePageSubsectionCommunityEvents
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionCommunityEvents component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionCommunityEvents
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
