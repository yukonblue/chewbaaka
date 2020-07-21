/**
 * EcologyPage_Subsection_UnderstandingAnimalMovement.test.js
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

import EcologyPageSubsectionUnderstandingAnimalMovement from '../EcologyPage_Subsection_UnderstandingAnimalMovement'

const sectionConfig = config.contentPageSections["section_Research"];

test('renders EcologyPageSubsectionUnderstandingAnimalMovement component', () => {
  render(
    <EcologyPageSubsectionUnderstandingAnimalMovement
      sectionConfig={sectionConfig}
    />
  );
});

/**
 * TODO: Enable this later.
 */
RUN_TEST_NEVER(() => {
  test('EcologyPageSubsectionUnderstandingAnimalMovement component snapshot', () => {
    const tree = renderer
      .create(
        <EcologyPageSubsectionUnderstandingAnimalMovement
          sectionConfig={sectionConfig}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
