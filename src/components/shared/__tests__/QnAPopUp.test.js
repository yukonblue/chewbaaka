/**
 * QnAPopUp.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import QnAPopUp from '../QnAPopUp';

test('renders QnAPopUp component', () => {
  const content = "The cheetah is the fastest land animal!";
  render(<QnAPopUp content={content}/>);

  const contentElement = screen.getByText(content);
  expect(contentElement).toBeInTheDocument();
});
