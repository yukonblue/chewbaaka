/**
 * Footer.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import Footer from '../Footer'

import { config } from '../../../config'

test('renders Footer component', () => {
  render(
    <Footer
      appConfig={config}
    />
  );

  // Tests section title with 'Resources' is present.
  const sectionTitleResources = screen.getByText(/Resources/i);
  expect(sectionTitleResources).toBeInTheDocument();

  // Tests section title with 'CCF' is present.
  const sectionElementCCF = screen.getByTestId("footerSectionCCF");
  expect(sectionElementCCF).toBeInTheDocument();

  // Tests section text.
  const sectionElementCCFTextContent = sectionElementCCF.textContent;
  expect(sectionElementCCFTextContent.includes("Cheetah Conservation Fund")).toBeTruthy();
  expect(sectionElementCCFTextContent.includes("501(c)(3)")).toBeTruthy();

  // Tests disclaimer text to be present.
  const disclaimerItem = screen.getByText(/This site is not an affiliation of Cheetah Conservation Fund/i);
  expect(disclaimerItem).toBeInTheDocument();
});

test('Footer component snapshot', () => {
  const tree = renderer
    .create(
      <Footer
        appConfig={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
