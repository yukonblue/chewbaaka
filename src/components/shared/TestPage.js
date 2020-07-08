/**
 * TestPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";

import ImageSlideDiscrete from './ImageSlideDiscrete'
import ImageSlide from './ImageSlide'
import ImageSlideModal from './ImageSlideModal'
import ImageReveal from './ImageReveal'
import ImageRevealDetailedWithTextCover from './ImageRevealDetailedWithTextCover'
import TextReveal from './TextReveal'
import FelidaeFamilyTree from '../history/FelidaeFamilyTree'
import TextBubble from './TextBubble'
import ImageSlidingGallery from './ImageSlidingGallery'
import CircularImageButton from './CircularImageButton'
import QnAPopUp from './QnAPopUp'
import HintSignpost from './HintSignpost'
import CircularImage from './CircularImage'
import ImageView from './ImageView'
import MediaLinkButton from './MediaLinkButton'

import image01 from './assets/cheetah-conservation-fund-logo.jpg'
import image02 from './assets/cheetah-conservation-fund-30-logo.svg'
import image03 from './assets/cheetah-conservation-fund-cheetah-fact-01.jpg'
import image04 from './assets/cheetah-conservation-fund-cheetah-fact-02.jpg'

const __DEV__ = ( process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" );

class TestPage extends React.Component {
  render() {
    /**
     * Redirect to homepage in production build,
     * otherwise renders whatever component we need to test here.
     */
    if ( !__DEV__ ) {
      return (
        <Router>
          <Redirect to="/" />
        </Router>
      );
    }
    return (
      <div>
        <h1>This is a test page</h1>

        This page is used to test our custom components, navigations, and other things.

        <h2>MediaLinkButton</h2>
        <MediaLinkButton
          href="https://peerj.com/articles/1346/"
          title="View this video on YouTube"
        />

        <h2>ImageView</h2>
        <ImageView
          width={640}
          height={640}
          image="https://dfzljdn9uc3pi.cloudfront.net/2015/1346/1/Suppl_Inf_5_cheetah_occurrence_and_suitable_PA.png"
          caption="Cheetah ranges in Namibia (Cheetahs (Acinonyx jubatus) running the gauntlet: an evaluation of translocations into free-range environments in Namibia)"
        />

        <h2>CircularImage</h2>
        <CircularImage image="https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg" title="Chewbaaka" />

        <h2>HintSignpost</h2>
        <HintSignpost hintText="This is a hint signpost"/>

        <h2>QnAPopUp</h2>
        <QnAPopUp content="The cheetah is the fastest land animal!"/>

        <h2>CircularImageButton</h2>
        <CircularImageButton
          title="Cheetahology"
          image="https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg"
          href="https://cheetah.org/"
        />

        <h2>Image Sliding Gallery</h2>
        <ImageSlidingGallery
          slides={[
            {
              image: image01,
              caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words"
            },
            {
              image: image02,
              caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up."
            }
          ]}
        />

        <h2>Text Bubble</h2>
        <TextBubble diameter={600} backgroundColorRGB={[20,80,120]} contentColorRGB={[255,255,255]} title="This is a TextBubble" content="Compiled successfully!
You can now view chewbaaka in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.14:3000

Note that the development build is not optimized.
To create a production build, use npm run build." />

        <TextBubble diameter={300} title="This is a smaller TextBubble" content="Explore the breadth and splendor of the Museum’s collection through some of our most significant and beautiful artifacts and specimens." />

        <h2>Felidae Family Tree</h2>
        <FelidaeFamilyTree />
        <hr/>

        <h2>ImageReveal</h2>
        <ImageReveal
          coverImage={image04}
          contentImage={image03}
        />

        <h2>TextReveal</h2>
        <TextReveal
          coverImage={image04}
          description="Fastest land animal. Up to 100km/hr"
        />

        <h2>ImageRevealDetailedWithTextCover</h2>
        <ImageRevealDetailedWithTextCover
          coverColor="orange"
          title="Cheetah"
          contentImage={image01}
          description="Fastest land animal. Up to 100km/hr"
        />

        <ImageRevealDetailedWithTextCover
          coverColor="red"
          title="Pronghorn antelope"
          contentImage={image02}
          description="North American species, sprints up to 86km/hr"
        />

        <h2>ImageSlideModal</h2>
        <ImageSlideModal
          slides={[
            {
              image: image01,
              title: "Acinonyx jubatus",
              description: "This is the cheetah."
            },
            {
              image: image02,
              title: "Cheeeeeetah",
              description: "Fastest land animal on earth!"
            }
          ]}
        />

        <h2>ImageSlide</h2>
        <ImageSlide
          images={[image01, image01, image02]}
          labels={["150 mya", "100 mya", "50 mya"]}
          title="Cheetah evolution"
          caption="Slide the timeline to see the migration of cheetahs."
          sliderBeginLabel="150 mya"
          sliderEndLabel="50 mya"
        />

        <h2>ImageSlideDiscrete</h2>
        <ImageSlideDiscrete
          images={[image01, image01, image02]}
          labels={["150 mya", "100 mya", "50 mya"]}
          percentages={[0, 20,100]}
          title="Cheetah evolution"
          decrementButtonLabel="backward"
          incrementButtonLabel="forward"
        />
      </div>
    )
  }
}

export default TestPage;
