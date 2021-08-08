/**
 * ExploreGatewayFooter.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 08, 2021
 * Updated  : Aug 08, 2021
 */

import React from 'react'

import {
    Button,
    Segment
} from 'semantic-ui-react'

import FluidSingleRowGrid from '../shared/FluidSingleRowGrid'

import 'semantic-ui-css/semantic.min.css'

import '../shared/GlobalStyles.css'

import '../shared/ContentPageSharedStyles.css'

import './ExploreGatewaySharedStyles.css'

import './ExploreGatewayFooter.css'

export default function ExploreGatewayFooter() {
    return (
        <div className="ExploreGatewayFooter ExploreGatewayBackground VerticalCushionPadding">
            <FluidSingleRowGrid justifyContent="center">
                <div className="ExploreGatewayIntroCenterGridLhsColumnStyle">
                    <p className="CCFMissionStatementQuote">
                    “CCF is Changing the World to Save the Cheetah” - Dr. Laurie Marker
                    </p>
                </div>
                <div className="ExploreGatewayIntroCenterGridRhsColumnStyle">
                    <Segment inverted>
                    <p className="JoinTheRace">
                        Join the race to <a href="https://twitter.com/search?q=%23SaveTheCheetah" target="_blank" rel="noopener noreferrer">
                        <span className="SafeTheCheetah">
                            #SafeTheCheetah
                        </span>
                        </a>
                    </p>
                    <p>Cheetahs can't win without us.</p>
                    <Button basic inverted href="https://cheetah.org/get-involved/ways-to-give/">
                        Get Involved
                    </Button>
                    </Segment>
                </div>
            </FluidSingleRowGrid>
        </div>
    );
}
