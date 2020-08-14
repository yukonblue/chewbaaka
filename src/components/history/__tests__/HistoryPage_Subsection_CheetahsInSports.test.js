/**
 * HistoryPage_Subsection_CheetahsInSports.test.js
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

import HistoryPageSubsectionCheetahsInSports from '../HistoryPage_Subsection_CheetahsInSports'

const sectionConfig = config.contentPageSections["section_CheetahAndMan"];

test('renders HistoryPageSubsectionCheetahsInSports component', () => {
  render(
    <HistoryPageSubsectionCheetahsInSports
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionCheetahsInSports component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionCheetahsInSports
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
