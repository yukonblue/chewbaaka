/**
 * future/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 23, 2020
 */

export const config = {
  pageProps: {
    coverImage: "",
    title: "Future",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      {
        title: "Conservation",
        tocImageFilename: "future_page_toc_menu_img_01.jpg"
      },
      {
        title: "Sustainable Development",
        tocImageFilename: "future_page_toc_menu_img_02.jpg"
      },
      {
        title: "Outreach and Education",
        tocImageFilename: "future_page_toc_menu_img_03.jpg"
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
            part_Intro: {
              content: {
                paragraph_01:
                  "Conservation is taking care of the environment in which we live. This means using everything wisely " +
                  "so some of it is left for others to use or for our own future use. The things we use are called RESOURCES. " +
                  "These can be almost anything: food, the air we breathe, firewood, petrol and zinc footing panels. " +
                  "Conservationists understand that RESOURCES ARE LIMITED and often scarce and that we must use them wisely. " +
                  "In Namibia, fresh water is one of our scarcest resources.",
                paragraph_02:
                  "Conservation also means protecting resources we may not use.",
                paragraph_03:
                  "Walking around, rather than stepping on a plant, is an act of conservation.",
                paragraph_04:
                  "Protecting a species like the cheetah from extinction is an act of conservation."
              }
            },
            part_EnvironmentalEducation: {
              title: "Environmental Education",
              content: {
                paragraph_01:
                  "Environmental education encourages the wise use of natural resources including water and land use, waste management and recycling."
              }
            },
            part_ConservationBiology: {
              title: "Conservation Biology",
              content: {
                paragraph_01:
                  "Conservation Biology is a field of study at universities. It combines several sciences, such as biology, " +
                  "ecology and genetics, to examine why there are so many types of living things on Earth and what makes some of them scarce."
              }
            }
          }
        },
        subsection_StoppingIllegalWildlifeTrades: {
          title: "Stopping Illegal Wildlife Trades",
          subtitle: "The illegal trafficking of cheetahs into the pet trade has become one of the main threats to cheetah survival.",
          contents: {
            part_CCFInvolvementPart1: {
              content: {
                paragraph_01:
                  "Since 2005, CCF has been actively involved with issues involving the illegal trade of live cheetah cubs. " +
                  "Staff monitor cheetah trafficking activities and organizes confiscations through proper authorities when possible.",
                paragraph_02:
                  "Cheetahs are listed as an Appendix I species under the Convention on International Trade in Endangered Species (CITES). " +
                  "They are poaches from the wild for the pet trade and their body parts, which get sold on the markets. " +
                  "Illegal wildlife trafficking is one of the top five transnational crimes, generating an estimated U.S. $50-150 million " +
                  "in illegal revenues annually.",
                paragraph_03:
                  "CCF is taking a leadership role in addressing the illegal pet trade. CCF trains wildlife officers involved " +
                  "in the front lines of trafficking in the Horn of Africa as well as in the Middle East, " +
                  "teaching them proper care for confiscated animals.",
                paragraph_04:
                  "CCF has built the most extensive database on cheetah trafficking, recording hundreds of trafficking cases going through the Horn of Africa to the Middle East."
              }
            },
            part_CITESCoP17: {
              content: {
                paragraph_01:
                  "CCF participates in the CITES inter-sessional working group on the illegal trade in cheetah and was instrumental " +
                  "in making recommendations adopted by CITES at CoP17 to stop the illegal cheetah pet trade."
              }
            }
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
        },
        subsection_TheRoleOfZoos: {
          title: "The Role of Zoos",
          content: {
          }
        },
        subsection_SchoolsTeachersLearners: {
          title: "Schools, Teachers, Learners",
          content: {
          }
        },
        subsection_CommunityEvents: {
          title: "Community Events",
          content: {
          }
        }
      }
    }
  },
};
