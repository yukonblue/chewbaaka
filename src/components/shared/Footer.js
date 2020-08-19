/**
 * Footer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 19, 2020
 */

import React from 'react'

import {
  Container,
  Grid,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

import { kStringConstantCheetahConservationFund } from './constants'

import logo from './assets/cheetah-conservation-fund-logo-mini-min.jpg'

import 'semantic-ui-css/semantic.min.css'

import './Footer.css'

export default function Footer(props) {
  const renderOptionalAuthorName = () => (
    props.appConfig && props.appConfig.author ? (
      <p>
        Made with <span role="img" aria-label="heart">&#10084;&#65039;</span> by {props.appConfig.author}
      </p>
    ) : null
  );

  return (
    <footer>
      <Segment inverted style={{ padding: "5em 0em" }} data-testid="FooterComponentTestId">
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  size="small"
                  src={logo}
                  alt={kStringConstantCheetahConservationFund}
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <p className="FooterColumnHeading">Resources</p>
                <List link inverted>
                  <List.Item as="a" href="https://cheetah.org/about/what-we-do/">About CCF</List.Item>
                  <List.Item as="a" href="https://animalfactguide.com/animal-facts/cheetah/">Cheetah Fun Facts</List.Item>
                  <List.Item as="a" href="https://wildnet.org/wildlife-programs/cheetah-namibia/">Wildlife Conservation Network & CCF</List.Item>
                  <List.Item as="a" href="https://www.iucnredlist.org/species/219/50649567">IUCN Red List - Cheetah</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <p className="FooterColumnHeading">
                  {kStringConstantCheetahConservationFund}
                </p>
                <p data-testid="footerSectionCCF">
                  <a href="https://cheetah.org/">{kStringConstantCheetahConservationFund}</a> is a 501(c)(3) nonprofit organization,
                  dedicated to saving the cheetahs in the wild and changing
                  the world to be a better place.
                </p>
                <p>
                  {`All textual content presented on this site are copyright of ${kStringConstantCheetahConservationFund}.`}
                </p>
                <p>
                  {`This site is not an affiliation of ${kStringConstantCheetahConservationFund}.`}
                </p>
                {renderOptionalAuthorName()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  );
}
