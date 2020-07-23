/**
 * future/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 22, 2020
 */

export const config = {
  pageProps: {
    coverImage: "",
    title: "Future",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      {
        title: "Conservation",
        tocImageFilename: ""
      },
      {
        title: "Sustainable Development",
        tocImageFilename: ""
      },
      {
        title: "Outreach and Education",
        tocImageFilename: ""
      }
    ],
  },
  contentPageSections: {
    section_Conservation: {
      intro: {
        title: "Conservation",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_WhatIsConservation: {
          title: "What is Conservation?",
          contents: {
          }
        },
        subsection_CheetahAmbassadors: {
          title: "Cheetah Ambassadors",
          contents: {
            paragraph_Chewbaaka:
              "Hi there, my name is Chewbaaka. I was named after an animal " +
              "in a movie. I have lived at CCF since I was 3 weeks old. " +
              "I am there cheetah ambassador and I get to meet many people. " +
              "The staff at CCF tell everyone about me and all the wild " +
              "cheetah. I have a special place where I can run like the wind.",
            paragraph_Mekondyo:
              'Hello, my name is Mekondyo. Mekondyo means "struggle" in the ' +
              "Oshiwambo language. I was born on a farm north of Otjiwarango " +
              "but I now live on farmland west of Otjiwarango. It is very " +
              "beautiful. I can see the Waterberg Plateau far away. " +
              "I am 5 years old now and I will tell you my story as you " +
              "explore this museum."
          }
        },
      },
    },
    section_SustainableDevelopment: {
      intro: {
        title: "Sustainable Development",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_MissionPossible: {
          title: "Mission Possible",
          contents: {
          }
        },
        subsection_FutureFarmersOfAfrica: {
          title: "Future Farmers of Africa",
          contents: {
          }
        },
        subsection_LivestockGuardingDogs: {
          title: "Livestock Guarding Dogs",
          contents: {
          }
        }
      }
    },
    section_OutreachAndEducation: {
      intro: {
        title: "Outreach and Education",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_FieldResearch: {
          title: "Field Research",
          content: {
          }
        },
        subsection_InternshipsAndVolunteering: {
          title: "Internships and Volunteering",
          content: {
          }
        }
      }
    }
  },
};
