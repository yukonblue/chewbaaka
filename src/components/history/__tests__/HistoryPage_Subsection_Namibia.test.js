/**
 * HistoryPage_Subsection_Namibia.test.js
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

import HistoryPageSubsectionNamibia from '../HistoryPage_Subsection_Namibia'

const sectionConfig = config.contentPageSections["section_PopulationAndRange"];

test('renders HistoryPageSubsectionNamibia component', () => {
  render(
    <HistoryPageSubsectionNamibia
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionNamibia component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionNamibia
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
