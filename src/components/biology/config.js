/**
 * biology/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 26, 2020
 */

export const config = {
  pageProps: {
    coverImage: "Biology_Page_Cover_Image.jpg",
    title: "Biology",
    subtitle: "Learn everything about what makes the cheetah so remarkable and unqiue.",
    pageMenuItems: [
      {
        title: "Lifecycle",
        tocImageFilename: "biology_page_toc_menu_img_01.jpg"
      },
      {
        title: "Physiology",
        tocImageFilename: "biology_page_toc_menu_img_02.jpg"
      },
      {
        title: "Genetics",
        tocImageFilename: "biology_page_toc_menu_img_03.jpg"
      }
    ],
  },
  contentPageIntro: {
    title: "Cheetah Biology",
    content: "The cheetah is a truly unique animal. Being the world's fastest land animal, it is built for speed. " +
            "An acceleration from 0 to 84 km/hr in just 3 seconds, with a full speed of 110 km/hr, means that the " +
            "cheetah can out-perform a sports car. Cheetahs are markedly different in both anatomy and behavior " +
            "from the other 36 species of cats. They are the only species in their genus. " +
            "They have evolved for speed versus power and aggression. Their bodies are lightweight in comparing with " +
            "the build of other big cats. They rely on their speed and skills for survival. The genus name, Acinonyx, " +
            "is interpreted as “non-moving claws”, referring to the semi-retractable claws. " +
            "The species name, “jubatus”, means “maned”, referring to the mantle on a young cheetah’s back. " +
            "The English word, “cheetah”, comes from the Hindu word “chita” meaning the “spotted one”.",
    image: {
      filename: "Cheetah_Skeleton_Transparent_720x406.png"
    }
  },
  contentPageSections: {
    section_Lifecycle: {
      intro: {
        title: "Lifecycle",
        content: "One of the most incredible things about the cheetahs is the remarkable processes and transitions " +
                "in their lifecycle. From born at an average weight of no more than 350 grams and completely " +
                "helpless and unable to see, to becoming one of the most skilled predators and the fastest " +
                "land animal on the planet, nothing speaks more about the incredible adaptations that allow them " +
                "to survive and thrive in the challenging environments where they live."
      },
      subsections: {
        subsection_Lifecycle_Stage_1: {
          title: "Stage 1",
          contents: {
            paragraph_Lifecycle_Stage_1_01:
              "The female’s gestation period lasts 90 to 95 days. " +
              "This means she is pregnant for about three months.",
            paragraph_Lifecycle_Stage_1_02:
              "Shortly before she is ready to give birth, the mother " +
              "makes a den in a quiet hidden spot. She chooses her location " +
              "in the tall grass think underbrush or near a clump of rocks.",
            paragraph_Lifecycle_Stage_1_03:
              "A cheetah gives birth to an average of five to six cubs. " +
              "Each cub weights between 250 to 425 grams. Cubs are born " +
              "completely helpless and with their eyes closed, but they " +
              "developer rapidly. Scent and touch are used to find their " +
              "mother’s nipples to suckle.",
            paragraph_Lifecycle_Stage_1_04:
              "They start crawling around the nest area at four to ten days "+
              "when their eyes begin to open. At three weeks their teeth break " +
              "through the gums.",
            paragraph_Lifecycle_Stage_1_05:
              "A mother cheetah will frequently move her litter. This prevents " +
              "a build-up of scent of the den site, which may lead other predators " +
              "to the cubs. She carries very young cubs in her jaws.",
            paragraph_Lifecycle_Stage_1_06:
              "The cubs are very vulnerable to lions, hyenas and other predators when "+
              "the female leaves them alone. When hunting she may be away for up to 48 hours. " +
              "In Tanzania’s Serengeti National Park, 90% of all cubs do not reach the age " +
              "of 3 months! Other causes of death are abandonment when prey is scarce, " +
              "exposure due to low temperates or grass fires."
          }
        },
        subsection_Lifecycle_Stage_2: {
          title: "Stage 2",
          contents: {
            paragraph_Lifecycle_Stage_2_01:
              "At 1.5 to 2 months of age, the cubs leave the safety of the den " +
              "to accompany their mother. They are very vulnerable as they are not " +
              "able to defend themselves.",
            paragraph_Lifecycle_Stage_2_02:
              "They stop drinking their mother’s milk at 3 to 4 months of age. " +
              "They start eating meat and learning to hunt. The games they play and the " +
              "experiences they have during this stage will teach them skills needed to survive on their own."
          }
        },
        subsection_LearningToHunt: {
          title: "Learning to Hunt",
          contents: {
            paragraph_01:
              "The mother brings live prey, such as a young gazelle, to the 9 to 12 month old cubs. " +
              "She releases it in front of them and the cubs attempt to catch it.",
            paragraph_02:
              "This allows the cubs to practice their hunting skills while still under her supervision. " +
              "Accurate timing and coordination during a hunt are important for their future survival."
          }
        },
        subsection_Lifecycle_Stage_3: {
          title: "Stage 3",
          contents: {
            paragraph_Lifecycle_Stage_3_01:
              "Stage three begins at the age 18 to 22 months when the cubs have grown " +
              "to sub-adults and leave their mother. The sub-adults will remain together for " +
              "up to six more months. At first, their success rate at capturing prey is poor.",
            paragraph_Lifecycle_Stage_3_02:
              "Cheetahs are diurnal, hunting mornings and early evenings. They rely on their " +
              "sight to find prey. They spend most of the day resting under shady trees or on " +
              "termite mounds. Night hunting is only done during a bright moon."
          }
        },
        subsection_Lifecycle_Stage_4: {
          title: "Stage 4",
          contents: {
            paragraph_Lifecycle_Stage_4_01:
              "In Stage 4, cheetahs become sexually mature. Although they are mature at 16 to 18 months, " +
              "most do not breed until they are three to five years old.",
            paragraph_Lifecycle_Stage_4_02:
              "At 20 - 30 months of age, females leave their litter-mates to find suitable mates " +
              "and start their own families. They raise their families on their own without the help of the male.",
            paragraph_Lifecycle_Stage_4_03:
              "Males usually do not breed until they are 4 to 5 years of age, and dominant in a territory. "+
              'They live alone or brothers farm permanent groups called "coalitions". '+
              "These groups stay together for life, claim territories, hunt and find mates together."
          }
        },
        subsection_LivingFastDyingYoung: {
          title: "Living Fast - Dying Young",
          contents: {
            part1: {
              title: "Male coalitions",
              content: {
                paragraph_01:
                  "A coalition consists of a male siblings of the same litter or young unrelated " +
                  "males that have joined together. A hierarchy develops among the males within a coalition.",
                paragraph_02:
                  "Young males are usually chased away from their birth range by dominant breeding males. " +
                  "They may establish home ranges more than 100 km away. A coalition is more successful in acquiring " +
                  "and holding territories and in defending kills than single males. " +
                  "This competition can result in mortality among males."
              }
            },
            part2: {
              title: "Mortality",
              content: {
                paragraph_01:
                  "The cheetah’s lifespan is poorly documented in the wild. A radio collared cheetah lived to be " +
                  "almost 7 years of age in Tanzania’s Serengeti National Park and once of CCF’s radio collared " +
                  "cheetahs in Namibia lived for over 10 years.",
                paragraph_02:
                  "Adult mortality is one of the most significant limiting factors for cheetah population growth and survival. " +
                  "Poaching, competition with large predators and farmers, and loss of habitat and prey are factors " +
                  "attributing to early death.",
                paragraph_03:
                  "Though cub deaths are high, cheetahs have evolved to reproduce rapidly in response to this mortality."
              }
            }
          }
        },
        subsection_FindingMate: {
          title: "Finding a Mate",
          contents: {
            paragraph_FindingMate_01:
              "The range of a female offspring may partially overlap that of her mother. " +
              "Namibian cheetahs are more social than those reported in other countries. " +
              "Females are often seen with multiple adults and cubs of varying ages.",
            paragraph_FindingMate_02:
              "Female cheetahs are polyoestrous, which means there is no regular breeding season. " +
              "If not bred, females come into heat (estrus) several times a year. Estrus means they are ready to breed. " +
              "If cubs are lost to predators females soon come into estrus again.",
            paragraph_FindingMate_03:
              "Smell, sound, and behavioral stimuli attract males to females. Female cheetahs leave a scent trail " +
              "by releasing sex hormones in urine and feces. They mark trees and bushes. " +
              "This behavior increases during courtship.",
            paragraph_FindingMate_04:
              "When courtship takes place, males will follow females closely and mock fighting may be observed.",
            paragraph_FindingMate_05:
              "When a female is ready to mate, she adopts a receptive posture. The male mounts the female, " +
              "bites the back of her neck, and breeding takes place. When the male dismounts the female she " +
              "rolls over on her back and swats at him.",
            paragraph_FindingMate_06:
              "Mating will take place for one to several days and ends when the make loses interest in the female and leaves. " +
              "Males do not help raise the cubs."
          }
        }
      },
    },
    section_Physiology: {
      intro: {
        title: "Physiology",
        content: "The uniqueness of the cheetah is not made up of a single trait, but rather a set of traits in its " +
                "physiology that can be observed from all parts of its body. The skull provides room for jaw muscle " +
                "needed to tear up meat. The spine provides the flexibility it needs to reach its incredible speeds. " +
                "The feet and claws facilitates in running, sharp turning, and hunting. The tail provides the balance " +
                "it needs while pursuing a prey. Read on to discover all the fascinating points about the species' " +
                "anatomy and physiology."
      },
      subsections: {
        subsection_Anatomy: {
          title: "Anatomy",
          contents: {
            paragraph_01:
              "Every part of the cheetah's body work in unison during a high speed run, and the sum of each of their " +
              "role together is greater than the individual parts. Explore the illustration below to learn about the " +
              "role and function of each highlighted body part."
          }
        },
        subsection_FeetAndClaws: {
          title: "Feet and Claws",
          contents: {
            part_Foot: {
              title: "Foot",
              content: {
                paragraph_01:
                  "Cheetah’s foot pads are hard and less rounded than the other cats. " +
                  "The pad function like tire threads providing them with increased traction in fast, sharp turns.",
              }
            },
            part_Claw: {
              title: "Claw",
              content: {
                paragraph_01:
                  "The short blunt claws work like the cleats on a track shoe. They grip the ground for " +
                  "traction when running and help increase speed.",
                paragraph_02:
                  "Cheetah’s claws are semi-retractable, meaning they do not completely retract like the claws " +
                  "of other cats. The foot structure of the cheetah is very dog-like.",
              }
            },
            part_Dewclaw: {
              title: "Dewclaw",
              content: {
                paragraph_FeetAndClaws_04:
                  "The dewclaws of the cheetah are located on the upper inside area of the front foot. " +
                  "These are sharp and frequently used to hook and hold prey."
              }
            }
          }
        },
        subsection_Skull: {
          title: "Skull",
          contents: {
            paragraph_Skull_01:
              "All predators have specialized features for catching and kill prey. " +
              "Predators have large forward facing eye sockets, and large ear cavities " +
              "that provides space for specialized senses. Although there are differences " +
              "in skull proportions, carnivore skulls are quite similar.",
            paragraph_Skull_02:
              "The cat skulls are different from other carnivore species, as they have a " +
              "flat nose and enlarge nasal cavity. There is a large area for the strong jaw muscles.",
            paragraph_Skull_03:
              "The cheetah has some features that are distinct when compared to the skulls of other cats."
          }
        },
        subsection_SpotsAndStripes: {
          title: "Spots and Stripes",
          contents: {
            paragraph_SpotsAndStripes_01:
              "Adult cheetahs are easily distinguished from other cats by their coat patterns. " +
              "The color and spots are a form of camouflage. This helps cheetahs hunt prey and " +
              "hide from other predators.",
            paragraph_SpotsAndStripes_02:
              "Distinctive black tear stripes run from the eyes to the mouth. The stripes are thought " +
              "to protect the eyes from the sun’s glare. It is believed they have the same function " +
              "as a rifle scope, helping cheetahs focus on their prey.",
            paragraph_SpotsAndStripes_03:
              "Until three months of age, cheetah cubs have a thick-silvery grey mantle down their back. " +
              "The mantle helps camouflage the cubs by blending them into the shadows and grass. " +
              "It also provides protection from sun and rain.",
            paragraph_SpotsAndStripes_04:
              "With their mantle, cubs look like an aggressive animal called a honey badger. " +
              "This may deter predators such as lions, hyenas, and eagles from attempting to kill them. " +
              "This is known as “mimicry”."
          }
        },
        subsection_HearAndLung: {
          title: "Heart and Lung",
          contents: {
            part1: {
              content: {
                paragraph_01:
                  "The cheetah has a large strong heart that rapidly pumps large amounts of oxygenated " +
                  "blood from the lungs to the muscles to keep them supplied with energy while running.",
                paragraph_02:
                  "Large lungs provide adequate oxygen for a cheetah’s increased energy needs while pursuing its prey. " +
                  "The cheetah’s respiratory rate climbs from 60 to 150 breathes per minute, nearly twice as fast as humans.",
                paragraph_03:
                  "Cheetahs have enlarged nostrils and sinuses allowing an increase in air flow to the lungs.",
                paragraph_04:
                  "High speeds can, however, only be maintained for 400 - 800 meters before exhaustion sets in " +
                  "and the body risks overheating."
              }
            },
            part2: {
              content: {
                paragraph_01:
                  "A cheetah running the 249km from Otjiwarongo to Windhoek would need to stop to rest more than 311 times.",
                paragraph_02:
                  "If it could run there without resting, it would take 2 hours and 26 minutes at 110km/hr."
              }
            }
          }
        },
        subsection_BodyAndBone: {
          title: "Body and Bone",
          contents: {
            part_Body: {
              title: "Body",
              contents: {
                paragraph_01:
                  "The cheetah’s body is narrow and lightweight with long, slender limbs. " +
                  "Specialized muscles allow a greater swing to the limbs, increasing acceleration.",
              }
            },
            part_Tail: {
              title: "Tail",
              contents: {
                paragraph_01:
                  "The cheetah’s long muscular tail works as a rudder, stabilizing and acting as a counter " +
                  "balance to its body weight. This allows sudden sharp turns during high speed chases.",
                paragraph_02:
                  "The tail is thought to be a signaling device, helping young cheetahs follow their mother in tall grass. " +
                  "The tip may be black or white in color."
              }
            },
            part_Bone: {
              title: "Bone",
              contents: {
                paragraph_01:
                  "The extreme flexibility of the cheetah’s spine is unique. This allows more extension during running, " +
                  "thus making both its stride length and speed possible.",
                paragraph_02:
                  "If the spine were stiff and the pectoral and pelvic girdles were firmly attached, the cheetah would not be " +
                  "able to reach 100 km / hr.",
                paragraph_03:
                  "The hips (pelvic girdle) pivot to increase the cheetah’s stride length. This allows the front and " +
                  "rear legs to stretch further apart when the body is fully extended. The hips and shoulders move " +
                  "closer together when the feet come under its body.",
                paragraph_04:
                  "The shoulder bone (pectoral girdle) does not attach to the collarbone, thus allowing the shoulders to move freely. " +
                  "This increases the length of the stride."
              }
            }
          }
        },
        subsection_RipAndTear: {
          title: "Rip and Tear",
          contents: {
            paragraph_RipAndTear_01:
              "The cheetah’s teeth are adapted to support their eating style. By eating fast, cheetahs avoid losing their prey to other predators.",
            paragraph_RipAndTear_02:
              "The canines, “eye teeth” or “fangs”, are used for gripping and hold while the prey is being suffocated. " +
              "Cheetah’s canines are smaller and less developed than those of the lion or leopard.",
            paragraph_RipAndTear_03:
              "The incisors, “front teeth”, are used for plucking fur and skinning the carcasses. " +
              "Straight and strong incisors are essential for quick access to the meat of the prey.",
            paragraph_RipAndTear_04:
              "The carnassial, “back teeth” or “pre molars”, work in scissor like fashion and enable the cheetah to " +
              "shear large pieces of flesh which are quickly swallowed whole. When using these teeth during feeding, " +
              "cheetahs hold their heads sideways at an angle to the carcass. These blade like teeth are similar to the " +
              "lion’s and leopard’s. They do not have the same function as chewing meat as those of the jackal or crushing " +
              "bones like those of the hyenas."
          }
        },
        subsection_OpenWide: {
          title: "Open Wide",
          contents: {
            part1: {
              paragraph_OpenWide_01:
                "The cheetah takes smaller prey than other similar sized cats. Their strong jaws " +
                "lock around the throat of the prey in what is called the “strangulation hold”, "+
                "which can last up to 20 minutes.",
              paragraph_OpenWide_02:
                "Cheetahs’ jaws are not as powerful as that of lions or leopards. Cheetahs have " +
                "comparatively shorted canine teeth. In all cats, powerful muscles move the jaw up " +
                "and down and provide vice-like strength for gripping prey.",
            },
            part2: {
              paragraph_OpenWide_03:
                "The tongue is adopted for licking and is covered with small hard spines called papillae. " +
                "The papillae act like a rasp, removing the meat from the bones of the prey." +
                "Rough tongue feels similar to the texture of sandpaper.",
            },
            part3: {
              paragraph_OpenWide_04:
                "Keeping the fur clean is an important part of a cheetah’s life. Family members spend " +
                "many hours grooming each other with their tongues. This behavior aids in the social " +
                "bonding of a cheetah group."
            }
          },
        },
        subsection_Communication: {
          title: "Communication",
          contents: {
            part_Intro: {
              content: {
                paragraph_Communication_01:
                  "Cheetahs communicate in many ways including sound, smell, touch, and sight. Communications may be either threatening or submissive."
              }
            },
            part_Volcalizations: {
              title: "Volcalizations",
              subtitle: "Cheetahs have many unusual vocalizations. These are some of the most common calls made by cheetahs.",
              content: {
                vocalizations: [
                  {
                    name: "Purr",
                    description: "as with domestic cats this sound indicates a friendly and contended mood."
                  },
                  {
                    name: "Chirp",
                    description: "A high pitched bird-like chirp is used by a mother calling her cubs, cheetahs greeting each other and during courtship. " +
                                "These calls can be heard over a long distance. The intensity of the chirp increases with excitement."
                  },
                  {
                    name: "Stutter call",
                    description: "A male on the trail of a female in heat will use this call. It is also used by a mother asking her cubs to follow closely."
                  },
                  {
                    name: "Growling, hissing",
                    description: "These sounds are associated with defense and aggression. With these vocalizations, " +
                                "they may lunge and slap the ground, alternatively crouching and growling."
                  },
                  {
                    name: "Bleating",
                    description: "This sound expresses distress and is similar to meowing."
                  },
                  {
                    name: "Inn-inn",
                    description: "This call is used by a mother to summon her young and alternates with chirping."
                  }
                ]
              }
            }
          }
        }
      }
    },
    section_Genetics: {
      intro: {
        title: "Genetics",
        content: "Cheetahs exhibit a number of physiological abnormalities because " +
                "of the genetic bottlenecks that the species have gone through in its history and evolution, " +
                "with the most recently one being only about 10,000 years ago. Therefore, understanding the " +
                "genetics of the species is crucial in both saving individuals as well as larger populations."
      },
      subsections: {
        subsection_Genetic_Confusion: {
          title: "Genetic Confusion",
          contents: {
            part_Main_Content: {
              content: {
                paragraph_01:
                  "Genes are the components of living cells that pass down inherited " +
                  "characteristics such as brown eyes or curly hair in humans.",
                paragraph_02:
                  "Genetic diversity is the variety of genes in an organism or in a population. " +
                  "Diversity increases the likelihood that a given species can adapt and survive " +
                  "catastrophes such as sudden environmental changes or exposure to new diseases.",
                paragraph_03:
                  "Diversity is reduced when inbreeding occurs. This means members of the same family " +
                  "or close relatives breed only among themselves."
              }
            },
            part_How_This_Related_to_Cheetah: {
              title: "How does this relate to the cheetah?",
              content: "Cheetahs are very closely related and have a low genetic diversity. " +
                      "This is due to the drastic reduction in their numbers when the population bottleneck occurred. " +
                      "This inbreeding and low genetic diversity may cause abnormalities."
            }
          }
        },
        subsection_Abnormalities: {
          title: "Abnormalities",
          contents: {
            part_Intro: {
              content: "CCF collects data to monitor cheetah genetics, physical qualities and reproduction. " +
                      "Body measurements, blood, and skin samples help evaluate overall health. " +
                      "CCF has recorded the following abnormalities in wild Namibian cheetahs."
            },
            part_Crowded_Lower_Incisors: {
              title: "Crowded Lower Incisors",
              content: "Cheetahs use their front teeth (incisors) to rapidly skin their prey. " +
                      "Some cheetahs have very crowded and crooked front teeth. " +
                      "This abnormality decreases the amount of meat the cheetah can " +
                      "quickly eat before another predator steals the kill."
            },
            part_Focal_Palatine_Erosion: {
              title: "Focal Palatine Erosion",
              content: "This abnormality occurs when the lower molar (back teeth) damage and break " +
                      "through the upper palate (roof of mouth). Dental impressions and skull X-rays " +
                      "allow CCF to relate problems with information on generics, health, diet, " +
                      "and geographic origin of affected cheetahs. Palatine erosion is reported in " +
                      "both captive and wild cheetahs and can lead to fatal infection."
            },
            part_Abnormal_Sperm: {
              title: "Abnormal Sperm",
              content: "A high frequency of sperm abnormalities (71%) first alerted researchers to the " +
                      "genetic problems of cheetahs. Cheetahs have a very low sperm count - 10 times lower " +
                      "than a domestic cat. Sperm abnormalities usually indicate a high level of inbreeding in " +
                      "the population. Cheetahs breed normally despite this problem and long term monitoring will " +
                      "follow their success rate."
            },
            part_Birth_Defects: {
              title: "Birth Defects",
              content: "Congenital (Genetic) Birth Defects, such as five legged and two-headed cubs are " +
                      "often reported in cheetahs and cause high infant mortality. " +
                      "Defects are a result of low genetic diversity. " +
                      "This problem is also reported in other inbred species."
            },
            part_Kinked_Tails: {
              title: "Kinked Tails",
              content: "Crooked tails have been recorded in 19% of the Namibian cheetahs evaluated since 1995. " +
                      "This is the first documentation of this abnormality in wild cheetahs and could be " +
                      "linked to a lack of genetic diversity."
            }
          }
        }
      }
    }
  }
};
