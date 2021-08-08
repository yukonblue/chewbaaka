/**
 * ExploreGatewayFooter.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 08, 2021
 * Updated  : Aug 08, 2021
 */

 import React from 'react'

 import { render, screen } from '@testing-library/react'
 
 import renderer from 'react-test-renderer'
 
 import ExploreGatewayFooter from '../ExploreGatewayFooter'
 
 test('renders explore gateway footer', () => {
   render(
     <ExploreGatewayFooter />
   );

   // Tests 'Get Involved' button is present and have the correct link.
   const getInvolvedButton = screen.getByText("Get Involved");
   expect(getInvolvedButton).toBeInTheDocument();
   expect(getInvolvedButton.href).toBe("https://cheetah.org/get-involved/ways-to-give/");
 });
 
 test('ExploreGatewayFooter component snapshot', () => {
   const tree = renderer
     .create(
       <ExploreGatewayFooter />
     ).toJSON();
   expect(tree).toMatchSnapshot();
 });
 