/**
 * Footer.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 03, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import Footer from '../Footer'

import { config } from '../../../config'

const kExpectedCopyrightStatementText = "All textual content presented on this site are copyright of Cheetah Conservation Fund.";
const kExpectedAffiliationDisclaimerText = "This site is not an affiliation of Cheetah Conservation Fund.";

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

  // Tests copyright statement text to be present.
  const copyrightStatementElement = screen.getByText(kExpectedCopyrightStatementText);
  expect(copyrightStatementElement).toBeInTheDocument();

  // Tests affiliation disclaimer text to be present.
  const affiliationDisclaimerElement = screen.getByText(kExpectedAffiliationDisclaimerText);
  expect(affiliationDisclaimerElement).toBeInTheDocument();
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
