/**
 * NamibianBiomes.test.js
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

import NamibianBiomes from '../NamibianBiomes'

const componentPart = config.contentPageSections["section_EcosystemAndHabitat"].subsections["subsection_WhereCheetahsLive"].contents["part_NamibianBiomes"];

test('renders NamibianBiomes component', () => {
  render(
    <NamibianBiomes part={componentPart} />
  );
});

test('NamibianBiomes component snapshot', () => {
  const tree = renderer
    .create(
      <NamibianBiomes part={componentPart} />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
