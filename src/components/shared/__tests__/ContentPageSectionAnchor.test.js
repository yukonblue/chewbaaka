/**
 * ContentPageSectionAnchor.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageSectionAnchor from '../ContentPageSectionAnchor';

import { ContentPageSectionTitleToAnchorId } from '../ContentPageSectionAnchor'

test('renders ContentPageSectionAnchor component', () => {
  const title = "Cheetah and Man";

  render(<ContentPageSectionAnchor title={title} />);
});
