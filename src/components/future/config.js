/**
 * future/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 14, 2020
 */

export const config = {
  pageProps: {
    coverImage: "../history/assets/cheetah-mother-and-cubs-on-termite-mound.jpg",
    title: "Future",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      "Cheetah Ambassadors",
      "Conservation",
    ],
  },
  contentPageSections: {
    section_CheetahAmbassadors: {
      intro: {
        title: "Cheetah Ambassadors",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_CheetahsAtCCF: {
          title: "Cheetahs at CCF",
          contents: {
            paragraph_Chewbaaka:
              "Hi there, my name is Chewbaaka. I was named after an animal " +
              "in a movie. I have lived at CCF since I was 3 weeks old. " +
              "I am there cheetah ambassador and I get to meet many people. " +
              "The staff at CCF tell everyone about me and all the wild " +
              "cheetah. I have a special place where I can run like the wind.",
            paragraph_Mekondyo:
              'Hello, my name is Mekondyo. Mekondyo means "struggle" in the ' +
              "Oshiwambo language. I was born on a farm northof Otjiwarango " +
              "but I now live on farmland west of Otjiwarango. It is very " +
              "beautiful. I can see the Waterberg Plateau far away. " +
              "I am 5 years old now and I will tell you my story as you " +
              "explore this museum."
          }
        },
      },
    },
  }
};
