/**
 * HistoryPage_Subsection_CheetahsInArt.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 14, 2020
 * Updated  : Aug 14, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import { config } from '../config'

import HistoryPageSubsectionCheetahsInArt from '../HistoryPage_Subsection_CheetahsInArt'

const sectionConfig = config.contentPageSections["section_CheetahAndMan"];

test('renders HistoryPageSubsectionCheetahsInArt component', () => {
  render(
    <HistoryPageSubsectionCheetahsInArt
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionCheetahsInArt component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionCheetahsInArt
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
