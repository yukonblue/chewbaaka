/**
 * Footer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Container, Grid, Header, Image, List, Segment } from 'semantic-ui-react'

import logo from '../../cheetah-conservation-fund-logo.jpg'

function Footer() {
  return (
    // TODO: Refine content
    <Segment inverted style={{ padding: "5em 0em" }} data-testid="FooterComponentTestId">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image
                size="small"
                src={logo}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Resources" />
              <List link inverted>
                <List.Item as="a" target="_blank" href="https://cheetah.org/about/what-we-do/">About CCF</List.Item>
                <List.Item as="a" target="_blank" href="https://animalfactguide.com/animal-facts/cheetah/">Cheatah Fun Facts</List.Item>
                <List.Item as="a" target="_blank" href="https://wildnet.org/wildlife-programs/cheetah-namibia/">Wildlife Conservation Network & CCF</List.Item>
                <List.Item as="a" target="_blank" href="https://www.iucnredlist.org/species/219/50649567">IUCN Red List - Cheetah</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Cheetah Conservation Fund
              </Header>
              <p data-testid="footerSectionCCF">
                <a href="https://cheetah.org/" target="_blank" rel=" noopener noreferrer">Cheetah Conservation Fund</a> is a 501(c)(3) nonprofit organization,
                dedicated to saving the cheetah in the wild and changing
                the world to be a better place.
              </p>
              <p>
                This site is not an affiliation of Cheetah Conservation Fund.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
