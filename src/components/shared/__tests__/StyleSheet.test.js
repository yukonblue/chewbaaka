/**
 * StyleSheet.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import StyleSheet from '../StyleSheet';

test('renders StyleSheet', () => {
  const styleSheetPath = "some-fake-stylesheet-path.css";

  render(<StyleSheet styleSheetPath={styleSheetPath} />);

  var allLinkComponents = document.getElementsByTagName("link");
  expect(allLinkComponents.length).toBe(1);

  var linkComponent = allLinkComponents[0];

  console.log(linkComponent.href);

  expect(linkComponent.href).toContain(styleSheetPath);
});
