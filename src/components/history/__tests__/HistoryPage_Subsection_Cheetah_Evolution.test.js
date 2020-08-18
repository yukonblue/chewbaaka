/**
 * HistoryPage_Subsection_Cheetah_Evolution.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import { config } from '../config'

import HistoryPageSubsectionCheetahEvolution from '../HistoryPage_Subsection_Cheetah_Evolution'

const sectionConfig = config.contentPageSections["section_Evolution"];

test('renders HistoryPageSubsectionCheetahEvolution component', () => {
  render(
    <HistoryPageSubsectionCheetahEvolution
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionCheetahEvolution component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionCheetahEvolution
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
