/**
 * Footer.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

test('renders global footer', () => {
  render(<Footer />);

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
