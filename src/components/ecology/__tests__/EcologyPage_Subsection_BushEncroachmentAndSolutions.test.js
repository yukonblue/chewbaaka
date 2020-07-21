/**
 * EcologyPage_Subsection_BushEncroachmentAndSolutions.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import EcologyPageSubsectionBushEncroachmentAndSolutions from '../EcologyPage_Subsection_BushEncroachmentAndSolutions'

const sectionConfig = config.contentPageSections["section_Ecomanagement"];

test('renders EcologyPageSubsectionBushEncroachmentAndSolutions component', () => {
  render(
    <EcologyPageSubsectionBushEncroachmentAndSolutions
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionBushEncroachmentAndSolutions component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionBushEncroachmentAndSolutions
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
