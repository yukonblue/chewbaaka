/**
 * HistoryPage_Subsection_FelidaeFamilyTree.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import { config } from '../config'

import HistoryPageSubsectionFelidaeFamilyTree from '../HistoryPage_Subsection_FelidaeFamilyTree'

const sectionConfig = config.contentPageSections["section_Evolution"];

test('renders HistoryPageSubsectionFelidaeFamilyTree component', () => {
  render(
    <HistoryPageSubsectionFelidaeFamilyTree
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionFelidaeFamilyTree component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionFelidaeFamilyTree
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
