/**
 * EcologyPage_Section_EcosystemAndHabitat.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import EcologyPageSectionEcosystemAndHabitat from '../EcologyPage_Section_EcosystemAndHabitat'

test('renders EcologyPageSectionEcosystemAndHabitat component', () => {
  render(
    <EcologyPageSectionEcosystemAndHabitat
      config={config}
    />
  );
});

test('EcologyPageSectionEcosystemAndHabitat component snapshot', () => {
  const tree = renderer
    .create(
      <EcologyPageSectionEcosystemAndHabitat
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
