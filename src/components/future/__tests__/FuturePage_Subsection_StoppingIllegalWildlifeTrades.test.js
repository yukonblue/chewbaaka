/**
 * FuturePage_Subsection_StoppingIllegalWildlifeTrades.test.js
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

import FuturePageSubsectionStoppingIllegalWildlifeTrades from '../FuturePage_Subsection_StoppingIllegalWildlifeTrades'

const sectionConfig = config.contentPageSections["section_Conservation"];

test('renders FuturePageSubsectionStoppingIllegalWildlifeTrades component', () => {
  render(
    <FuturePageSubsectionStoppingIllegalWildlifeTrades
      sectionConfig={sectionConfig}
    />
  );
});

test('FuturePageSubsectionStoppingIllegalWildlifeTrades component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSubsectionStoppingIllegalWildlifeTrades
        sectionConfig={sectionConfig}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
