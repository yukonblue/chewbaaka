/**
 * HistoryPage_Subsection_CheetahAndManImage.test.js
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

import HistoryPageSubsectionCheetahAndManImage from '../HistoryPage_Subsection_CheetahAndManImage'

const sectionConfig = config.contentPageSections["section_CheetahAndMan"];

test('renders HistoryPageSubsectionCheetahAndManImage component', () => {
  render(
    <HistoryPageSubsectionCheetahAndManImage
      sectionConfig={sectionConfig}
    />
  );
});

test('HistoryPageSubsectionCheetahAndManImage component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSubsectionCheetahAndManImage
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
