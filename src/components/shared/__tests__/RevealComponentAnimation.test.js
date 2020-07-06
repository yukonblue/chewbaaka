/**
 * RevealComponentAnimation.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import { getRevealComponentAnimation } from '../RevealComponentAnimation'

test('passing supported animation', () => {
  const animation = "fade";
  expect(getRevealComponentAnimation(animation)).toBe(animation);
});

test('passing null', () => {
  const animation = null;
  expect(getRevealComponentAnimation(animation)).not.toBe(null);
});
