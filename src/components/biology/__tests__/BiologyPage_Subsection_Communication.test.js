/**
 * BiologyPage_Subsection_Communication.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSubsectionCommunication from '../BiologyPage_Subsection_Communication'

const sectionConfig = config.contentPageSections["section_Physiology"];

test('renders BiologyPageSubsectionCommunication component', () => {
  render(
    <BiologyPageSubsectionCommunication
      sectionConfig={sectionConfig}
    />
  );
});

test('BiologyPageSubsectionCommunication component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSubsectionCommunication
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
