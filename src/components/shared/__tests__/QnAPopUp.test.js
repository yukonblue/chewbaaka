/**
 * QnAPopUp.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import QnAPopUp from '../QnAPopUp';

const content = "The cheetah is the fastest land animal!";

test('renders QnAPopUp component', () => {
  render(<QnAPopUp content={content}/>);

  const contentElement = screen.getByText(content);
  expect(contentElement).toBeInTheDocument();
});

test('QnAPopUp component snapshot', () => {
  const tree = renderer
    .create(
      <QnAPopUp content={content}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
