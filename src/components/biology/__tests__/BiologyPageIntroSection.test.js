/**
 * BiologyPageIntroSection.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageIntroSection from '../BiologyPageIntroSection'

test('renders BiologyPageIntroSection component', () => {
  render(
    <BiologyPageIntroSection contentPageIntro={config.contentPageIntro} />
  );
});

test('BiologyPageIntroSection component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageIntroSection contentPageIntro={config.contentPageIntro} />
    ) .toJSON();
  expect(tree).toMatchSnapshot();
});
