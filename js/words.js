const words = [
  {
    id: 1,
    word: "forgotten",
    definition: "something lost from memory or not remembered anymore.",
  },
  {
    id: 2,
    word: "forgetting",
    definition: "when you are not remembering something, you are ______ it.",
  },
  {
    id: 3,
    word: "beginner",
    definition: "someone who is not experienced at doing something.",
  },
  {
    id: 4,
    word: "beginning",
    definition: "the start of something.",
  },
  {
    id: 5,
    word: "preferred",
    definition:
      "something liked more than other things or chosen as the best option.",
  },
  {
    id: 6,
    word: "preferring",
    definition:
      "choosing one thing in preference to another because you like it more.",
  },
  {
    id: 7,
    word: "gardening",
    definition:
      "an outdoor activity that can include planting flowers and mowing the lawn.",
  },
  {
    id: 8,
    word: "limiting",
    definition:
      "setting boundaries or restrictions that control what you can or can't do.",
  },
  {
    id: 9,
    word: "gym",
    definition: "a place where people can go to work out.",
  },
  {
    id: 10,
    word: "myth",
    definition:
      "a story, often from long ago, that might not be real but teaches important lessons.",
  },
  {
    id: 11,
    word: "mystery",
    definition:
      "a puzzling situation or event that needs to be solved or understood.",
  },
  {
    id: 12,
    word: "symbol",
    definition:
      "something that represents or stands for an idea, feeling, or thing.",
  },
  {
    id: 13,
    word: "synonym",
    definition: "a word that means the same or nearly the same as another.",
  },
  {
    id: 14,
    word: "system",
    definition:
      "a routine or plan where different parts work together to make something happen smoothly, like a school schedule.",
  },
  {
    id: 15,
    word: "physical",
    definition:
      "involving movements, actions, or objects you can see, feel, or touch in the real world.",
  },
  {
    id: 16,
    word: "crystal",
    definition:
      "A shiny, clear rock that forms in shapes and reflects light beautifully, often used for jewelry or decorations.",
  },
  {
    id: 17,
    word: "rhythm",
    definition: "a pattern of beats or sounds that repeat in music or poetry.",
  },
  {
    id: 18,
    word: "young",
    definition: "antonym of 'old'",
  },

  {
    id: 19,
    word: "double",
    definition: "twice as much or having two of something.",
  },

  {
    id: 20,
    word: "country",
    definition:
      "a place where people live, with its own government, land, and culture.",
  },
  {
    id: 21,
    word: "encourage",
    definition:
      "to give support or praise to someone to help them feel confident and motivated.",
  },

  {
    id: 22,
    word: "borough",
    definition:
      "a small town or district within a larger city, like a neighborhood with its own identity.",
  },
  {
    id: 23,
    word: "enormous",
    definition:
      "exceptionally large, like a huge crocodile or an immense skyscraper.",
  },
  {
    id: 24,
    word: "enough",
    definition: "a sufficient amount.",
  },

  {
    id: 25,
    word: "tough",
    definition:
      "hard to do or endure, or a person or thing that shows strength, effort, or resilience. ",
  },

  {
    id: 26,
    word: "colour",
    definition: "a shade, hue or tint such as red, blue or green.",
  },

  {
    id: 27,
    word: "favour",
    definition:
      "an act of kindness or help shown to someone, like doing a task that someone has asked you to do.",
  },

  {
    id: 28,
    word: "flavour",
    definition:
      "the taste of something, like sweetness, sourness, or spiciness, making food enjoyable.",
  },

  {
    id: 29,
    word: "humour",
    definition:
      "a funny or amusing quality that makes people laugh or smile, found in jokes or situations.",
  },
  {
    id: 30,
    word: "information",
    definition:
      "Facts or details about something, often used to learn or understand.",
  },
  {
    id: 31,
    word: "preparation",
    definition:
      "Getting ready for something, planning and organising before an event or activity.",
  },

  {
    id: 32,
    word: "admiration",
    definition:
      "Feeling of respect and liking towards someone for their qualities or achievements.",
  },
  {
    id: 33,
    word: "transportation",
    definition: "The act of moving people or goods from one place to another.",
  },

  {
    id: 35,
    word: "adoration",
    definition:
      "A strong feeling of love, respect, and admiration towards someone or something.",
  },
  {
    id: 36,
    word: "action",
    definition:
      "Doing something, like moving, speaking, or making a decision, often involving physical movement or effort.",
  },

  {
    id: 37,
    word: "reaction",
    definition:
      "Response to something that happens, such as emotions, behaviors, or changes in the environment.",
  },
  {
    id: 38,
    word: "fiction",
    definition:
      "stories that are made up, often involving imaginary characters and events.",
  },
  {
    id: 39,
    word: "solution",
    definition:
      "a way to solve a problem, fix a situation, or answer a question.",
  },
  {
    id: 40,
    word: "conclusion",
    definition:
      "The end or final part of something, often summarising what happened or was learned.",
  },
  {
    id: 41,
    word: "invention",
    definition:
      "Something created that is new or original, often solving a problem or meeting a need.",
  },
  {
    id: 42,
    word: "decision",
    definition:
      "Choosing between different options or making up your mind about something.",
  },
  {
    id: 43,
    word: "direction",
    definition:
      "instructions indicating where something is located or about how to do something.",
  },
  {
    id: 44,
    word: "pollution",
    definition:
      "Harmful substances or waste that contaminate the environment, air, water, or soil.",
  },
  {
    id: 45,
    word: "exploration",
    definition:
      "Discovering new places or ideas, often through travelling, research, or investigation.",
  },
  {
    id: 46,
    word: "admission",
    definition:
      "meaning 1: permission to enter a place. Meaning 2: acknowledging that something is correct.",
  },
  {
    id: 47,
    word: "expansion",
    definition:
      "The act of growing or getting bigger, often by increasing in size or scope.",
  },
  {
    id: 48,
    word: "construction",
    definition: "building something, like houses, roads or bridges",
  },
  {
    id: 49,
    word: "emotion",
    definition:
      "Feelings like happiness, sadness, anger, or fear that people experience in different situations.",
  },
  {
    id: 50,
    word: "communication",
    definition:
      "Sharing information or ideas between people using words, gestures or technology.",
  },
  {
    id: 51,
    word: "illegal",
    definition: "Against the law or not permitted by the authorities.",
  },
  {
    id: 52,
    word: "illegible",
    definition: "Handwriting or text that is difficult or impossible to read.",
  },
  {
    id: 53,
    word: "illogical",
    definition:
      "Doesn't make sense or follow reason, without a clear, rational explanation.",
  },
  {
    id: 54,
    word: "immature",
    definition:
      "Not fully grown up. Acting childishly or irresponsibly for your age.",
  },
  {
    id: 55,
    word: "immortal",
    definition:
      "Able to live forever, never dying or experiencing the end of life.",
  },
  {
    id: 56,
    word: "impossible",
    definition: "Something that cannot happen or be done.",
  },
  {
    id: 57,
    word: "impatient",
    definition:
      "Feeling restless or irritated when things aren't happening as quickly as desired.",
  },
  {
    id: 58,
    word: "imperfect",
    definition:
      "Not perfect, having flaws or mistakes, not meeting ideal standards.",
  },
  {
    id: 59,
    word: "inactive",
    definition:
      "Not doing anything, not moving or participating, staying idle or dormant.",
  },
  {
    id: 60,
    word: "incorrect",
    definition:
      "Wrong or inaccurate, not in accordance with what is true or right.",
  },
  {
    id: 61,
    word: "irregular",
    definition:
      "Not following a regular pattern, shape, or schedule; uneven or inconsistent.",
  },
  {
    id: 62,
    word: "irrelevant",
    definition:
      "Not related to the topic or situation, not important or applicable.",
  },
  {
    id: 63,
    word: "irresponsible",
    definition:
      "Not acting in a careful or trustworthy way; not fulfilling duties or obligations.",
  },
  { id: 64, word: "redo", definition: "to do something again" },
  {
    id: 65,
    word: "refresh",
    definition:
      "To clean or renew something, giving it new energy or vitality.",
  },
  {
    id: 66,
    word: "return",
    definition:
      "to bring something back to its original place or give something back.",
  },
  {
    id: 67,
    word: "reappear",
    definition:
      "when something turns up again after disappearing or not being seen.",
  },
  {
    id: 68,
    word: "redecorate",
    definition:
      "changing the look of a room or space by painting it differently, or adding new furniture.",
  },
  {
    id: 69,
    word: "re-enter",
    definition:
      "Going back into a place or situation after leaving it temporarily.",
  },
  {
    id: 70,
    word: "subdivide",
    definition:
      "Dividing something into smaller parts, especially when talking about land or property.",
  },
  {
    id: 71,
    word: "subheading",
    definition:
      "A smaller title under a main title, often used to divide sections.",
  },
  {
    id: 72,
    word: "submarine",
    definition:
      "A type of watercraft that travels underwater, used for exploration or warfare.",
  },
  {
    id: 73,
    word: "submerge",
    definition:
      "To go underwater or be covered by water, disappearing from view.",
  },
  {
    id: 74,
    word: "interact",
    definition: "To communicate or work together with others.",
  },
  {
    id: 75,
    word: "intercity",
    definition: "Traveling or connecting between different cities.",
  },
  {
    id: 76,
    word: "international",
    definition:
      "Involving or relating to more than one country, happening on a global scale.",
  },
  {
    id: 77,
    word: "interrelated",
    definition:
      "Things connected or dependent on each other, influencing or affecting one another.",
  },
  {
    id: 78,
    word: "supermarket",
    definition:
      "A large store where you can buy food, household items, and other goods.",
  },
  {
    id: 79,
    word: "superman",
    definition:
      "A powerful hero with extraordinary abilities, often fighting for justice and protecting people from danger.",
  },
  {
    id: 80,
    word: "superstar",
    definition:
      "A person who is extremely famous and admired for their exceptional talent or achievements.",
  },
  {
    id: 81,
    word: "antiseptic",
    definition:
      "A substance that kills germs and prevents infection when applied to cuts, wounds, or other injuries.",
  },
  {
    id: 82,
    word: "anticlockwise",
    definition:
      "Moving or turning in the opposite direction to the way a clock's hands move around.",
  },
  {
    id: 83,
    word: "antisocial",
    definition:
      "Not enjoying or seeking the company of others, preferring to be alone or avoiding social situations.",
  },
  {
    id: 84,
    word: "autobiography",
    definition:
      "A book about someone's life, written by that person, telling their own story and experiences.",
  },
  {
    id: 85,
    word: "autograph",
    definition:
      "A signature from a famous person, often written on paper, a book, or clothing, as a keepsake.",
  },
  {
    id: 86,
    word: "automatic",
    definition:
      "A machine or device that works by itself without needing to be operated manually by a person.",
  },
  {
    id: 87,
    word: "attraction",
    definition:
      "It's when you're drawn to something or someone because they're interesting or appealing.",
  },
  {
    id: 88,
    word: "consume",
    definition: "To use or eat something until it's all gone or finished.",
  },
  {
    id: 89,
    word: "homeless",
    definition: "Someone who doesn't have a place to live.",
  },
  {
    id: 90,
    word: "breathe",
    definition: "A verb meaning to inhale and exhale.",
  },
  {
    id: 91,
    word: "breath",
    definition:
      "Noun: the air/vapour that comes out of your mouth when you exhale.",
  },
  { id: 92, word: "valley", definition: "The low land between two mountains." },
  {
    id: 93,
    word: "visitors",
    definition:
      "People who go to or stay in a place temporarily, perhaps while they are on holiday.",
  },
  { id: 94, word: "battling", definition: "Fighting against something." },
  {
    id: 95,
    word: "completely",
    definition: "Adverb meaning 'entirely' or 'fully'.",
  },
  {
    id: 96,
    word: "finally",
    definition:
      "Adverb. Something that happens 'at last' or after a long time of waiting.",
  },
  {
    id: 97,
    word: "exactly",
    definition:
      "Adverb. Precisely correct or in complete agreement with a statement.",
  },
  {
    id: 98,
    word: "clearly",
    definition:
      "Adverb. Easily understood or without doubt, making it obvious and easy to perceive or comprehend.",
  },
  {
    id: 99,
    word: "eagerly",
    definition:
      "Adverb. Excitedly anticipating or looking forward to something with enthusiasm.",
  },
  {
    id: 100,
    word: "treasure",
    definition:
      "Noun. Something valuable or cherished; sometimes hidden away in a wooden chest.",
    spelling_rule: "44",
  },
  {
    id: 101,
    word: "pleasure",
    definition: "Noun. A feeling of enjoyment or satisfaction.",
    spelling_rule: "44",
  },
  {
    id: 102,
    word: "enclosure",
    definition:
      "Noun. An area that is enclosed or surrounded by a barrier or structure.",
    spelling_rule: 44,
  },
  {
    id: 103,
    word: "leisure",
    definition:
      "Noun. Free time, relaxation, or activities done for enjoyment during one's spare time.",
    spelling_rule: 44,
  },
  {
    id: 104,
    word: "exposure",
    definition:
      "Noun. The state of being exposed to something, often referring to harmful elements or influences.",
    spelling_rule: 44,
  },
  {
    id: 105,
    word: "furniture",
    definition:
      "Noun. Objects such as chairs, tables, and beds used to make a space suitable for living or working.",
    spelling_rule: 44,
  },
  {
    id: 106,
    word: "picture",
    definition:
      "Noun. A representation or depiction, often in the form of a drawing, painting, or photograph.",
    spelling_rule: 44,
  },
  {
    id: 107,
    word: "adventure",
    definition:
      "Noun. An exciting or daring experience involving risk, often undertaken with enthusiasm and courage.",
    spelling_rule: 44,
  },
  {
    id: 108,
    word: "nature",
    definition:
      "Noun. The natural world, including plants, animals, landscapes, and phenomena, often contrasted with human civilization.",
    spelling_rule: 44,
  },
  {
    id: 109,
    word: "sculpture",
    definition:
      "Noun. A three-dimensional work of art created by shaping or combining materials such as clay, stone, or metal.",
    spelling_rule: 44,
  },
  {
    id: 110,
    word: "fracture",
    definition:
      "Noun. A break or crack in something solid, typically referring to bones or hard surfaces.",
    spelling_rule: 44,
  },
  {
    id: 111,
    word: "capture",
    definition:
      "verb. To catch or seize someone or something, often by using force or strategy.",
    spelling_rule: 44,
  },
  {
    id: 112,
    word: "invasion",
    definition:
      "Noun. The act of entering a place or territory with hostile intent, often in large numbers.",
    spelling_rule: 45,
  },
  {
    id: 113,
    word: "confusion",
    definition:
      "Noun. A state of uncertainty, lack of clarity, or misunderstanding about a situation or topic.",
    spelling_rule: 45,
  },
  {
    id: 114,
    word: "decision",
    definition:
      "Noun. The act of making a choice or coming to a conclusion after careful consideration or deliberation.",
    spelling_rule: 45,
  },
  {
    id: 115,
    word: "collision",
    definition:
      "Noun. A violent impact or collision between two or more objects or entities.",
    spelling_rule: 45,
  },
  {
    id: 116,
    word: "explosion",
    definition:
      "Noun. A sudden and violent release of energy, often resulting in loud noise and destruction.",
    spelling_rule: 45,
  },
  {
    id: 117,
    word: "poisonous",
    definition:
      "adjective. Containing substances that can cause harm or illness when ingested, touched, or breathed.",
    spelling_rule: 46,
  },
  {
    id: 118,
    word: "dangerous",
    definition:
      "adjective. Able or likely to cause harm, injury, or danger to oneself or others.",
    spelling_rule: 46,
  },
  {
    id: 119,
    word: "famous",
    definition:
      "adjective. Widely known or recognized by many people, often celebrated or renowned for achievements or qualities.",
    spelling_rule: 46,
  },
  {
    id: 120,
    word: "various",
    definition:
      "adjective. Referring to different types or kinds, presenting a variety of options or choices.",
    spelling_rule: 46,
  },
  {
    id: 121,
    word: "jealous",
    definition:
      "adjective. Feeling or showing envy or resentment toward someone else's possessions, qualities, or success.",
    spelling_rule: 46,
  },
  {
    id: 122,
    word: "tremendous",
    definition:
      "adjective. Extremely large, impressive, or powerful in scale, extent, or effect.",
    spelling_rule: 46,
  },
  {
    id: 123,
    word: "enormous",
    definition:
      "adjective. Very large in size, extent, or quantity, often to an impressive or overwhelming degree.",
    spelling_rule: 46,
  },
  {
    id: 124,
    word: "humorous",
    definition:
      "adjective. Causing amusement, laughter, or enjoyment, often through humor, wit, or absurdity.",
    spelling_rule: 46,
  },
  {
    id: 125,
    word: "glamorous",
    definition:
      "adjective. Attractive, alluring, or glamorous in a way that captivates attention or admiration.",
    spelling_rule: 46,
  },
  {
    id: 126,
    word: "vigorous",
    definition:
      "adjective. Strong, energetic, or robust in action, often characterized by vigorous movement or activity.",
    spelling_rule: 46,
  },
  {
    id: 127,
    word: "courageous",
    definition:
      "adjective. Brave, bold, or fearless in facing difficult or dangerous situations, often with determination.",
    spelling_rule: 46,
  },
  {
    id: 128,
    word: "advantageous",
    definition:
      "adjective. Providing benefit, advantage, or gain in a particular situation or circumstance.",
    spelling_rule: 46,
  },
  {
    id: 129,
    word: "serious",
    definition:
      "adjective. Grave or solemn in manner, indicating a sincere or earnest attitude or intention.",
    spelling_rule: 46,
  },
  {
    id: 130,
    word: "obvious",
    definition:
      "adjective. Easily perceived or understood, requiring no explanation or interpretation.",
    spelling_rule: 46,
  },
  {
    id: 131,
    word: "curious",
    definition:
      "adjective. Eager to learn or know about something, often driven by a strong desire for knowledge or understanding.",
    spelling_rule: 46,
  },
  {
    id: 132,
    word: "hideous",
    definition:
      "adjective. Extremely unpleasant or ugly in appearance, often causing disgust or revulsion.",
    spelling_rule: 46,
  },
  {
    id: 133,
    word: "courteous",
    definition:
      "adjective. Polite, respectful, and considerate in behavior or manner, often marked by courteous gestures or speech.",
    spelling_rule: 46,
  },
  {
    id: 134,
    word: "invention",
    definition:
      "Noun. The act or process of creating or inventing something new, often involving imagination or creativity.",
    spelling_rule: 47,
  },
  {
    id: 135,
    word: "action",
    definition:
      "Noun. The process of taking action or doing something, often in response to a situation or need.",
    spelling_rule: 47,
  },
  {
    id: 136,
    word: "hesitation",
    definition:
      "Noun. The act of pausing or hesitating before taking action, often due to uncertainty or indecision.",
    spelling_rule: 47,
  },
  {
    id: 137,
    word: "completion",
    definition:
      "Noun. The act of finishing or reaching the end of a task, project, or process.",
    spelling_rule: 47,
  },
  {
    id: 138,
    word: "migration",
    definition:
      "Noun. The movement of people or animals from one region or habitat to another, often for seasonal reasons.",
    spelling_rule: 47,
  },
  {
    id: 139,
    word: "conversation",
    definition:
      "Noun. A verbal exchange or discussion between two or more people, often involving sharing thoughts or ideas.",
    spelling_rule: 47,
  },
  {
    id: 140,
    word: "selection",
    definition:
      "Noun. The act of choosing or picking something from a group of options or alternatives.",
    spelling_rule: 47,
  },
  {
    id: 141,
    word: "expression",
    definition:
      "Noun. The conveying or expressing of ideas, feelings, or information through speech, writing, or behavior.",
    spelling_rule: 47,
  },
  {
    id: 142,
    word: "permission",
    definition:
      "Noun. Approval or allowance given by someone in authority, like when your parents let you go out.",
    spelling_rule: 47,
  },
  {
    id: 143,
    word: "impression",
    definition:
      "Noun. The feeling or idea you leave on someone, like when you make a good first impression.",
    spelling_rule: 47,
  },
  {
    id: 144,
    word: "omission",
    definition:
      "Noun. Something left out or not included, like forgetting to mention your favorite book in a list.",
    spelling_rule: 47,
  },
  {
    id: 145,
    word: "confession",
    definition:
      "Noun. Admitting something you did wrong, like telling your parents you broke a vase accidentally.",
    spelling_rule: 47,
  },
  {
    id: 146,
    word: "discussion",
    definition:
      "Noun. A conversation where people share ideas, like when classmates discuss a book they've read together.",
    spelling_rule: 47,
  },
  {
    id: 147,
    word: "comprehension",
    definition:
      "Noun. Understanding something completely, like when you solve a math problem without help from anyone.",
    spelling_rule: 47,
  },
  {
    id: 148,
    word: "expansion",
    definition:
      "Noun. The act of getting bigger or spreading out, like when a town grows with new buildings.",
    spelling_rule: 47,
  },
  {
    id: 149,
    word: "tension",
    definition:
      "Noun. A feeling of strain or unease, like the atmosphere before an important test.",
    spelling_rule: 47,
  },
  {
    id: 150,
    word: "extension",
    definition:
      "Noun. An additional period of time, like when a teacher gives you extra days to finish homework.",
    spelling_rule: 47,
  },
  {
    id: 151,
    word: "musician",
    definition:
      "Noun. Someone who plays musical instruments skillfully, like your favorite guitar player or drummer in a band.",
    spelling_rule: 47,
  },
  {
    id: 152,
    word: "magician",
    definition:
      "Noun. A person who performs magic tricks, like the magician you saw at the birthday party.",
    spelling_rule: 47,
  },
  {
    id: 153,
    word: "electrician",
    definition:
      "Noun. Someone who installs or repairs electrical systems, like the person who fixes broken lights in your home.",
    spelling_rule: 47,
  },
  {
    id: 154,
    word: "politician ",
    definition:
      "Noun. A person involved in politics, like the mayor of your city or a member of parliament.",
    spelling_rule: 47,
  },
  {
    id: 155,
    word: "mathematician",
    definition:
      "Noun. A person who studies and solves mathematical problems, like the smartest kid in your math class.",
    spelling_rule: 47,
  },
  {
    id: 156,
    word: "chemist",
    definition:
      "Noun. A scientist who studies chemicals and their reactions, like the person who invents new medicines.",
    spelling_rule: 48,
  },
  {
    id: 157,
    word: "echo",
    definition:
      "Noun. A sound that repeats, like when your voice bounces back to you in a cave.",
    spelling_rule: 48,
  },
  {
    id: 158,
    word: "scheme",
    definition:
      "Noun. A plan or plot to do something, like when friends scheme to throw a surprise party.",
    spelling_rule: 48,
  },
  {
    id: 159,
    word: "stomach",
    definition:
      "Noun. The part of your body where food goes, like where you feel hungry or full.",
    spelling_rule: 48,
  },
  {
    id: 160,
    word: "anchor",
    definition:
      "Noun. An object used to hold a boat in place, like the heavy metal thing ships drop into the water.",
    spelling_rule: 48,
  },
  {
    id: 161,
    word: "chaos",
    definition:
      "Noun. A state of disorder or confusion, like when everyone talks at once in a crowded room.",
    spelling_rule: 48,
  },
  {
    id: 162,
    word: "orchestra",
    definition:
      "Noun. A group of musicians playing instruments together, like the band at your school concert.",
    spelling_rule: 48,
  },
  {
    id: 163,
    word: "chameleon",
    definition:
      "Noun. An animal that can change its color to blend in with its surroundings, like a lizard.",
    spelling_rule: 48,
  },
  {
    id: 164,
    word: "chemistry",
    definition:
      "Noun. The study of matter and its properties, like mixing different chemicals to see their reactions.",
    spelling_rule: 48,
  },
  {
    id: 165,
    word: "choir",
    definition:
      "Noun. A group of singers performing together, like the choir at the church.",
    spelling_rule: 48,
  },
  {
    id: 166,
    word: "chronic",
    definition:
      "Adjective. Persisting for a long time or happening repeatedly, like a cough that won't go away.",
    spelling_rule: 48,
  },
  {
    id: 167,
    word: "chrysalis",
    definition:
      "Noun. The pupa of a butterfly, like the stage where it transforms into a beautiful insect.",
    spelling_rule: 48,
  },
  {
    id: 168,
    word: "cylinder",
    definition:
      "Noun. A shape like a tube, like a can of soda or the inside of a roll of paper towels.",
    spelling_rule: 49,
  },
  {
    id: 169,
    word: "chef",
    definition:
      "Noun. A professional cook who prepares food in a restaurant, like the person who makes your favorite pizza.",
    spelling_rule: 49,
  },
  {
    id: 170,
    word: "brochure",
    definition:
      "Noun. A small booklet with information or pictures, like a brochure about a vacation destination.",
    spelling_rule: 49,
  },
  {
    id: 171,
    word: "parachute",
    definition:
      "Noun. A device used to slow down falls from heights, like the one skydivers use when jumping from planes.",
    spelling_rule: 49,
  },
  {
    id: 172,
    word: "chalet",
    definition:
      "Noun. A cozy wooden house in the mountains, often used as a holiday home for people who are skiing",
    spelling_rule: 49,
  },
  {
    id: 173,
    word: "chandelier",
    definition:
      "Noun. A hanging light fixture that often contains glass and crystals.",
    spelling_rule: 49,
  },
  {
    id: 174,
    word: "chauffeur",
    definition:
      "Noun. A person who drives other people around, like the driver of a limousine.",
    spelling_rule: 49,
  },
  {
    id: 175,
    word: "chiffon",
    definition:
      "Noun. A light, sheer fabric, like the material used for elegant dresses or curtains.",
    spelling_rule: 49,
  },
  {
    id: 176,
    word: "chute",
    definition:
      "Noun. A steep, narrow passage, like the one used to slide down in playgrounds.",
    spelling_rule: 49,
  },
  {
    id: 177,
    word: "league ",
    definition:
      "Noun. A group or association of teams or individuals, like a sports league or gaming league.",
    spelling_rule: 50,
  },
  {
    id: 178,
    word: "antique",
    definition:
      "Noun. An old or vintage item, like a piece of furniture passed down through generations.",
    spelling_rule: 50,
  },
  {
    id: 179,
    word: "plaque",
    definition:
      "Noun. A flat, usually decorative, piece attached to a wall or monument, like a commemorative plaque.",
    spelling_rule: 50,
  },
  {
    id: 180,
    word: "dialogue",
    definition:
      "Noun. A conversation between two or more people, like characters in a book or movie.",
    spelling_rule: 50,
  },
  {
    id: 181,
    word: "catalogue",
    definition:
      "Noun. A list or collection of items, like the one you receive from your favorite store.",
    spelling_rule: 50,
  },
  {
    id: 182,
    word: "intrigue",
    definition:
      "Verb. To capture someone's interest or curiosity, like a mysterious story or fascinating topic.",
    spelling_rule: 50,
  },
  {
    id: 183,
    word: "monologue",
    definition:
      "Noun. A long speech or monologue by one person, like a character in a play or movie.",
    spelling_rule: 50,
  },
  {
    id: 184,
    word: "synagogue",
    definition: "Noun. A place of worship for Jewish people.",
    spelling_rule: 50,
  },
  {
    id: 185,
    word: "scene",
    definition:
      "Noun. A setting or place where events take place, like the scene of a play or movie.",
    spelling_rule: 51,
  },
  {
    id: 186,
    word: "discipline",
    definition:
      "Noun. The practice of following rules or regulations, like the way you behave in school.",
    spelling_rule: 51,
  },
  {
    id: 187,
    word: "disciple",
    definition:
      "Noun. A follower or student, like someone who learns from a teacher or mentor.",
    spelling_rule: 51,
  },
  {
    id: 188,
    word: "fascinate",
    definition:
      "Verb. To captivate or greatly interest someone, like an exciting book or thrilling movie.",
    spelling_rule: 51,
  },
  {
    id: 189,
    word: "scissors",
    definition:
      "Noun. A cutting tool with two sharp blades, like the one used for cutting paper.",
    spelling_rule: 51,
  },
  {
    id: 190,
    word: "scented",
    definition:
      "Adjective. Having a pleasant or noticeable smell, like flowers.",
    spelling_rule: 51,
  },
  {
    id: 191,
    word: "descend",
    definition:
      "Verb. To move downward, like when an airplane descends before landing.",
    spelling_rule: 51,
  },
  {
    id: 192,
    word: "ascend",
    definition:
      "Verb. To move upward, like when you climb stairs or a mountain.",
    spelling_rule: 51,
  },
  {
    id: 193,
    word: "scenery",
    definition:
      "Noun. The natural features or surroundings of a place, like the scenery in a beautiful landscape.",
    spelling_rule: 51,
  },
  {
    id: 194,
    word: "crescent",
    definition:
      "Noun. A curved shape resembling a thin, crescent moon, like the one on a flag.",
    spelling_rule: 51,
  },
  {
    id: 195,
    word: "vein",
    definition:
      "Noun. A blood vessel carrying blood towards the heart, like the ones you can see on your wrist.",
    spelling_rule: 52,
  },
  {
    id: 196,
    word: "weigh",
    definition:
      "Verb. To measure the heaviness of something, like weighing fruit at the grocery store.",
    spelling_rule: 52,
  },
  {
    id: 197,
    word: "eight",
    definition:
      "Noun. The number after seven, like when counting the days of the week.",
    spelling_rule: 52,
  },
  {
    id: 198,
    word: "neighbour",
    definition:
      "Noun. Someone who lives near you, like a person in the house next door.",
    spelling_rule: 52,
  },
  {
    id: 199,
    word: "they",
    definition:
      "Pronoun. A pronoun used to refer to a group of people, like friends or classmates.",
    spelling_rule: 52,
  },
  {
    id: 200,
    word: "reign",
    definition:
      "Noun. The period of time during which a ruler or monarch holds power, like a king's reign.",
    spelling_rule: 52,
  },
  {
    id: 201,
    word: "grey",
    definition:
      "Adjective. A color between black and white, like the sky on a cloudy day.",
    spelling_rule: 52,
  },
  {
    id: 202,
    word: "vicious",
    definition:
      "Adjective. Mean and aggressive, like a dog that bites without warning or reason.",
    spelling_rule: 53,
  },
  {
    id: 203,
    word: "precious",
    definition:
      "Adjective. Highly valued or treasured, like a precious gemstone passed down in the family.",
    spelling_rule: 53,
  },
  {
    id: 204,
    word: "conscious",
    definition:
      "Adjective. Being aware of one's surroundings or actions, like remembering to lock the door before leaving.",
    spelling_rule: 53,
  },
  {
    id: 205,
    word: "delicious",
    definition:
      "Adjective. Very enjoyable to taste, like a mouthwatering slice of pizza or a delicious chocolate cake.",
    spelling_rule: 53,
  },
  {
    id: 206,
    word: "malicious",
    definition:
      "Adjective. Intending to cause harm or trouble, like spreading rumors to hurt someone's feelings.",
    spelling_rule: 53,
  },
  {
    id: 207,
    word: "suspicious",
    definition:
      "Adjective. Feeling unsure or doubtful about something, like suspecting a friend is telling a lie.",
    spelling_rule: 53,
  },
  {
    id: 208,
    word: "ambitious",
    definition:
      "Adjective. Having big dreams or goals, like wanting to become a successful athlete or scientist.",
    spelling_rule: 53,
  },
  {
    id: 209,
    word: "fictitious",
    definition:
      "Adjective. Imaginary or made-up, like characters in a fantasy story or fairy tale.",
    spelling_rule: 53,
  },
  {
    id: 210,
    word: "infectious",
    definition:
      "Adjective. Capable of spreading disease, like germs on unwashed hands or a contagious cough.",
    spelling_rule: 53,
  },
  {
    id: 211,
    word: "nutritious",
    definition:
      "Adjective. Containing essential nutrients for good health, like fresh fruits, vegetables, and whole grains.",
    spelling_rule: 53,
  },
  {
    id: 212,
    word: "fictitious",
    definition:
      "Adjective. Imaginary or made-up, like characters in a fantasy story or fairy tale.",
    spelling_rule: 53,
  },
  {
    id: 213,
    word: "nutritious",
    definition:
      "Adjective. Containing essential nutrients for good health, like fresh fruits, vegetables, and whole grains.",
    spelling_rule: 53,
  },
  {
    id: 214,
    word: "artificial",
    definition:
      "Adjective. Not natural or real, like artificial flavors added to candy or soda.",
    spelling_rule: 54,
  },
  {
    id: 215,
    word: "partial",
    definition:
      "Adjective. Favoring one side over another, like preferring one team in a sports competition.",
    spelling_rule: 54,
  },
  {
    id: 216,
    word: "confidential",
    definition:
      "Adjective. Meant to be kept secret or private, like a diary entry or personal information.",
    spelling_rule: 54,
  },
  {
    id: 217,
    word: "initial",
    definition:
      "Adjective. Relating to the beginning or first stage, like the initial steps in a project or plan.",
    spelling_rule: 54,
  },
  {
    id: 218,
    word: "financial",
    definition:
      "Adjective. Related to money or finances, like managing your allowance or saving up for a toy.",
    spelling_rule: 54,
  },
  {
    id: 219,
    word: "commercial",
    definition:
      "Adjective. Related to business or buying and selling goods, like advertisements on TV or radio.",
    spelling_rule: 54,
  },
  {
    id: 220,
    word: "provincial",
    definition:
      "Adjective. Relating to a specific region or area, like local customs or traditions.",
    spelling_rule: 54,
  },
  {
    id: 221,
    word: "observant",
    definition:
      "Adjective. Observing or paying close attention to things, like noticing a change in someone's behavior.",
    spelling_rule: 55,
  },
  {
    id: 222,
    word: "observance",
    definition:
      "Noun. The act of following rules or customs, like attending a religious observance or ceremony.",
    spelling_rule: 55,
  },
  {
    id: 223,
    word: "observation",
    definition:
      "Noun. The act of watching or noticing things, like making an observation about the weather.",
    spelling_rule: 55,
  },
  {
    id: 224,
    word: "expectant",
    definition:
      "Adjective. Feeling excited or hopeful about something that is going to happen, like waiting for a birthday party.",
    spelling_rule: 55,
  },
  {
    id: 225,
    word: "expectation",
    definition:
      "Noun. The belief or hope that something will happen, like expecting good grades on a test.",
    spelling_rule: 55,
  },
  {
    id: 226,
    word: "hesitant",
    definition:
      "Adjective. Feeling unsure or reluctant, like hesitating before trying something new or unfamiliar.",
    spelling_rule: 55,
  },
  {
    id: 227,
    word: "hesitancy",
    definition:
      "Noun. The state of feeling unsure or reluctant, like feeling hesitancy about speaking in front of a crowd.",
    spelling_rule: 55,
  },
  {
    id: 228,
    word: "hesitation",
    definition:
      "Noun. The act of pausing or delaying, like hesitating before making an important decision.",
    spelling_rule: 55,
  },
  {
    id: 229,
    word: "tolerant",
    definition:
      "Adjective. Accepting or respecting differences in others, like being understanding of someone's mistakes.",
    spelling_rule: 55,
  },
  {
    id: 230,
    word: "tolerance",
    definition:
      "Noun. The ability to accept or endure differences, like respecting diverse opinions in a group.",
    spelling_rule: 55,
  },
  {
    id: 231,
    word: "toleration",
    definition:
      "Noun. The act of accepting or enduring differences, like showing patience during disagreements.",
    spelling_rule: 55,
  },
  {
    id: 232,
    word: "innocent",
    definition: "Adjective. Not guilty of wrongdoing.",
    spelling_rule: 55,
  },
  {
    id: 233,
    word: "innocence",
    definition: "Noun. The state of being blameless or free from guilt.",
    spelling_rule: 55,
  },
  {
    id: 234,
    word: "decent",
    definition:
      "Adjective. Acceptable or satisfactory, like having good manners or behaving appropriately in public.",
    spelling_rule: 55,
  },
  {
    id: 235,
    word: "decency",
    definition:
      "Noun. The quality of being appropriate or acceptable, like helping someone in need.",
    spelling_rule: 55,
  },
  {
    id: 236,
    word: "frequent",
    definition: "Adjective. Happening often or repeatedly.",
    spelling_rule: 55,
  },
  {
    id: 237,
    word: "frequency",
    definition: "Noun. The rate at which something happens repeatedly",
    spelling_rule: 55,
  },
  {
    id: 238,
    word: "confident",
    definition: "Adjective. Feeling sure of oneself and one's abilities",
    spelling_rule: 55,
  },
  {
    id: 239,
    word: "confidence",
    definition: "Noun. Having belief in oneself and one's abilities.",
    spelling_rule: 55,
  },
  {
    id: 240,
    word: "confidential",
    definition:
      "Adjective. Meant to be kept secret or private, like a letter that is intended only for its recipient.",
    spelling_rule: 55,
  },
  {
    id: 241,
    word: "assistant",
    definition: "Noun. Someone who helps others.",
    spelling_rule: 55,
  },
  {
    id: 242,
    word: "assistance",
    definition:
      "Noun. The act of helping or aiding, like offering help to someone struggling with their homework.",
    spelling_rule: 55,
  },
  {
    id: 243,
    word: "obedient",
    definition: "Adjective. Willing to obey rules or commands",
    spelling_rule: 55,
  },
  {
    id: 244,
    word: "obedience",
    definition: "Noun. The act of obeying rules or commands",
    spelling_rule: 55,
  },
  {
    id: 245,
    word: "independent",
    definition:
      "Adjective. Able to act or think independently, like a teenager making decisions without parental guidance.",
    spelling_rule: 55,
  },
  {
    id: 246,
    word: "independence",
    definition:
      "Noun. The state of being free to act or think independently, like enjoying the independence of college life.",
    spelling_rule: 55,
  },
  {
    id: 247,
    word: "adorable",
    definition:
      "Adjective. Very cute or lovable, like a puppy playing with its favorite toy in the sun.",
    spelling_rule: 56,
  },
  {
    id: 248,
    word: "adorably",
    definition:
      "Adverb. In a very cute or lovable manner, like a kitten sleeping adorably curled up on a cushion.",
    spelling_rule: 56,
  },
  {
    id: 249,
    word: "applicable",
    definition:
      "Adjective. Suitable or relevant, like using applicable information to solve a math problem.",
    spelling_rule: 56,
  },
  {
    id: 250,
    word: "applicably",
    definition:
      "Adverb. In a suitable or relevant manner, like using the provided instructions applicably to complete the task.",
    spelling_rule: 56,
  },
  {
    id: 251,
    word: "considerable",
    definition:
      "Adjective. Large in quantity or importance, like making considerable progress on a long-term project.",
    spelling_rule: 56,
  },
  {
    id: 252,
    word: "considerably",
    definition:
      "Adverb. To a large extent or degree, like considerably improving one's performance over time.",
    spelling_rule: 56,
  },
  {
    id: 253,
    word: "consideration",
    definition:
      "Noun. The act of taking something into account or consideration, like showing consideration for others' feelings.",
    spelling_rule: 56,
  },
  {
    id: 254,
    word: "tolerable",
    definition:
      "Adjective. Able to be endured or tolerated, like finding the heat outside tolerable with a breeze.",
    spelling_rule: 56,
  },
  {
    id: 255,
    word: "tolerably",
    definition:
      "Adverb. In a way that can be endured or tolerated, like tolerably warm weather with occasional clouds.",
    spelling_rule: 56,
  },
  {
    id: 256,
    word: "toleration",
    definition:
      "Noun. The act of enduring or accepting something, like showing toleration for someone else's opinion.",
    spelling_rule: 56,
  },
  {
    id: 257,
    word: "changeable",
    definition:
      "Adjective. Prone to change or variation, like the changeable weather in springtime.",
    spelling_rule: 56,
  },
  {
    id: 258,
    word: "noticeable",
    definition:
      "Adjective. Easily seen or noticed, like the noticeable smell of freshly baked cookies in the kitchen.",
    spelling_rule: 56,
  },
  {
    id: 259,
    word: "forcible",
    definition:
      "Adjective. Having the power to force or compel, like a strong wind forcibly pushing against the door.",
    spelling_rule: 56,
  },
  {
    id: 260,
    word: "legible",
    definition:
      "Adjective. Clear enough to be read easily, like having legible handwriting that everyone can understand.",
    spelling_rule: 56,
  },
  {
    id: 261,
    word: "dependable",
    definition:
      "Adjective. Reliable or trustworthy, like a dependable friend who always keeps their promises and offers support.",
    spelling_rule: 56,
  },
  {
    id: 262,
    word: "comfortable",
    definition:
      "Adjective. Feeling relaxed and at ease, like lounging in a soft chair on a lazy Sunday afternoon.",
    spelling_rule: 56,
  },
  {
    id: 263,
    word: "understandable",
    definition:
      "Adjective. Capable of being understood, like explaining a complex idea in a simple way for comprehension.",
    spelling_rule: 56,
  },
  {
    id: 264,
    word: "reasonable",
    definition:
      "Adjective. Sensible or fair, like making reasonable decisions based on logic and common sense.",
    spelling_rule: 56,
  },
  {
    id: 265,
    word: "enjoyable",
    definition:
      "Adjective. Bringing joy or pleasure, like spending an enjoyable day at the amusement park with friends.",
    spelling_rule: 56,
  },
  {
    id: 266,
    word: "reliable",
    definition:
      "Adjective. Dependable or trustworthy, like relying on a reliable friend to keep their promises.",
    spelling_rule: 56,
  },
  {
    id: 267,
    word: "possible",
    definition:
      "Adjective. Having the potential to happen, like considering all possible outcomes before making a decision.",
    spelling_rule: 56,
  },
  {
    id: 268,
    word: "possibly",
    definition:
      "Adverb. In a way that might happen, like possibly going to the park if the weather improves.",
    spelling_rule: 56,
  },
  {
    id: 269,
    word: "horrible",
    definition:
      "Adjective. Extremely unpleasant or dreadful, like experiencing a horrible nightmare in the middle of the night.",
    spelling_rule: 56,
  },
  {
    id: 270,
    word: "horribly",
    definition:
      "Adverb. In an extremely unpleasant manner, like feeling horribly sick after eating too much candy.",
    spelling_rule: 56,
  },
  {
    id: 271,
    word: "terrible",
    definition:
      "Adjective. Very bad or unpleasant, like enduring terrible weather during a camping trip.",
    spelling_rule: 56,
  },
  {
    id: 272,
    word: "terribly",
    definition:
      "Adverb. In a very bad or unpleasant manner, like feeling terribly embarrassed after tripping in public.",
    spelling_rule: 56,
  },
  {
    id: 273,
    word: "visible",
    definition:
      "Adjective. Able to be seen, like the visible stars twinkling in the night sky above.",
    spelling_rule: 56,
  },
  {
    id: 274,
    word: "visibly",
    definition:
      "Adverb. In a way that can be seen, like the smile spreading visibly across her face.",
    spelling_rule: 56,
  },
  {
    id: 275,
    word: "incredible",
    definition:
      "Adjective. Unbelievable or extraordinary, like witnessing an incredible magic trick that defies explanation.",
    spelling_rule: 56,
  },
  {
    id: 276,
    word: "incredibly",
    definition:
      "Adverb. In an unbelievable or extraordinary manner, like incredibly finishing the race in record time.",
    spelling_rule: 56,
  },
  {
    id: 277,
    word: "referring",
    definition:
      "Verb. Mentioning or bringing up something, like referring to a passage in a book during discussion.",
    spelling_rule: 57,
  },
  {
    id: 278,
    word: "referred",
    definition:
      "Verb. Mentioned or brought up something, like someone referred to an expert for advice.",
    spelling_rule: 57,
  },
  {
    id: 279,
    word: "referral",
    definition:
      "Noun. The act of recommending or suggesting, like making a referral to a specialist for further evaluation.",
    spelling_rule: 57,
  },
  {
    id: 280,
    word: "preferring",
    definition:
      "Verb. Expressing a preference for something, like preferring chocolate ice cream over vanilla at the shop.",
    spelling_rule: 57,
  },
  {
    id: 281,
    word: "preferred",
    definition:
      "Adjective. Liked or favored over others, like her preferred method of studying for exams.",
    spelling_rule: 57,
  },
  {
    id: 282,
    word: "offered",
    definition:
      "Verb. Presenting or giving something, like offering a piece of cake to a friend at a party.",
    spelling_rule: 57,
  },
  {
    id: 283,
    word: "transferring",
    definition:
      "Verb. Moving from one place to another, like transferring files from a computer to a USB drive.",
    spelling_rule: 57,
  },
  {
    id: 284,
    word: "referee",
    definition:
      "Noun. An official who ensures fair play, like a referee in a soccer match making calls.",
    spelling_rule: 57,
  },
  {
    id: 285,
    word: "transference",
    definition:
      "Noun. The act of transferring something from one place to another, like the transference of energy.",
    spelling_rule: 57,
  },
  {
    id: 286,
    word: "conceive",
    definition:
      "Verb. To imagine or form a mental picture, like conceiving a plan for a school project.",
    spelling_rule: 58,
  },
  {
    id: 287,
    word: "receive",
    definition:
      "Verb. To accept or take in, like receiving a gift with gratitude from a friend.",
    spelling_rule: 58,
  },
  {
    id: 288,
    word: "perceive",
    definition:
      "Verb. To become aware of or understand, like perceiving the beauty of nature during a hike.",
    spelling_rule: 58,
  },
  {
    id: 289,
    word: "deceit",
    definition:
      "Noun. The act of deceiving or misleading others, like using deceit to gain an unfair advantage.",
    spelling_rule: 58,
  },
  {
    id: 290,
    word: "deceive",
    definition:
      "Verb. To trick or mislead someone, like trying to deceive others with false information.",
    spelling_rule: 58,
  },
  {
    id: 291,
    word: "caffeine",
    definition:
      "Noun. A substance found in coffee and tea, like drinking a soda with added caffeine for energy.",
    spelling_rule: 58,
  },
  {
    id: 292,
    word: "seize",
    definition:
      "Verb. To grab or take hold of suddenly, like snatching a cookie from the jar.",
    spelling_rule: 58,
  },
  {
    id: 293,
    word: "either",
    definition:
      "Adverb. Indicating a choice between two options, like picking either chocolate or vanilla ice cream.",
    spelling_rule: 58,
  },
  {
    id: 294,
    word: "neither",
    definition:
      "Adverb. Not one or the other, like neither of the two restaurants serving your favorite food.",
    spelling_rule: 58,
  },
  {
    id: 295,
    word: "thought",
    definition:
      "Noun. An idea or notion in one's mind, like considering different thoughts before making a decision.",
    spelling_rule: 59,
  },
  {
    id: 296,
    word: "bought",
    definition:
      "Verb. Past tense of purchasing something, like getting the latest video game at the store.",
    spelling_rule: 59,
  },
  {
    id: 297,
    word: "nought",
    definition:
      "Noun. Zero or nothing, like scoring nought points in a game of tic-tac-toe.",
    spelling_rule: 59,
  },
  {
    id: 298,
    word: "brought",
    definition:
      "Verb. Carried or transported something to a place, like bringing snacks to a party.",
    spelling_rule: 59,
  },
  {
    id: 299,
    word: "fought",
    definition:
      "Verb. Engaged in a physical fight or conflict, like defending your friend in a playground fight.",
    spelling_rule: 59,
  },
  {
    id: 300,
    word: "rough",
    definition:
      "Adjective. Not smooth or even, like walking on a rough path through the forest.",
    spelling_rule: 59,
  },
  {
    id: 301,
    word: "tough",
    definition:
      "Adjective. Difficult or challenging, like tackling a tough math problem that requires careful thinking.",
    spelling_rule: 59,
  },
  {
    id: 302,
    word: "though",
    definition:
      "Conjunction. Despite the fact that, like going to the beach though it's cloudy.",
    spelling_rule: 59,
  },
  {
    id: 303,
    word: "although",
    definition:
      "Conjunction. Even though or despite the fact that, like having fun although it's raining outside.",
    spelling_rule: 59,
  },
  {
    id: 304,
    word: "through",
    definition:
      "Preposition. Moving in one side and out the other, like walking through a tunnel to the other side.",
    spelling_rule: 59,
  },
  {
    id: 305,
    word: "borough",
    definition:
      "Noun. A district or neighborhood within a city, like living in the Brooklyn borough of New York.",
    spelling_rule: 59,
  },
  {
    id: 306,
    word: "plough",
    definition:
      "Noun. A tool used for breaking up soil, like plowing the fields before planting crops.",
    spelling_rule: 59,
  },
  {
    id: 307,
    word: "bough",
    definition:
      "Noun. A branch or limb of a tree, like hanging a swing from a sturdy bough.",
    spelling_rule: 59,
  },
  {
    id: 308,
    word: "breakthrough",
    definition:
      "Noun. A significant discovery or achievement, like making a breakthrough in scientific research.",
    spelling_rule: 59,
  },
  {
    id: 309,
    word: "toughest",
    definition:
      "Adjective. The most challenging or difficult, like facing the toughest opponent in a sports competition.",
    spelling_rule: 59,
  },
  {
    id: 310,
    word: "doubt",
    definition:
      "Noun. A feeling of uncertainty or lack of conviction, like having doubt about the answer to a question.",
    spelling_rule: 60,
  },
  {
    id: 311,
    word: "island",
    definition:
      "Noun. A piece of land surrounded by water, like dreaming of living on a tropical island.",
    spelling_rule: 60,
  },
  {
    id: 312,
    word: "solemn",
    definition:
      "Adjective. Serious or solemn in manner, like observing a solemn ceremony with respect.",
    spelling_rule: 60,
  },
  {
    id: 313,
    word: "thistle",
    definition:
      "Noun. A prickly plant with purple flowers, like avoiding stepping on a thistle in the garden.",
    spelling_rule: 60,
  },
  {
    id: 314,
    word: "knight",
    definition:
      "Noun. A medieval warrior of noble birth, like imagining a knight in shining armor.",
    spelling_rule: 60,
  },
  {
    id: 315,
    word: "comb",
    definition:
      "Noun. A tool used for grooming hair, like running a comb through tangled hair.",
    spelling_rule: 60,
  },
  {
    id: 316,
    word: "climb",
    definition:
      "Verb. To ascend or move upwards, like climbing a tree to reach the ripe fruit.",
    spelling_rule: 60,
  },
  {
    id: 317,
    word: "autumn",
    definition:
      "Noun. The season between summer and winter, like leaves falling from trees during autumn.",
    spelling_rule: 60,
  },
  {
    id: 318,
    word: "column",
    definition:
      "Noun. A vertical structure often seen in buildings, like counting the columns in ancient ruins.",
    spelling_rule: 60,
  },
  {
    id: 319,
    word: "hymn",
    definition:
      "Noun. A religious song or poem, like singing a hymn during a church service.",
    spelling_rule: 60,
  },
  {
    id: 320,
    word: "listen",
    definition:
      "Verb. To pay attention or heed, like listening carefully to the teacher during class.",
    spelling_rule: 60,
  },
  {
    id: 321,
    word: "whistle",
    definition:
      "Verb. To produce a high-pitched sound by blowing, like blowing air through a whistle.",
    spelling_rule: 60,
  },
  {
    id: 322,
    word: "fasten",
    definition:
      "Verb. To secure or fasten securely, like fastening the seatbelt before driving the car.",
    spelling_rule: 60,
  },
  {
    id: 323,
    word: "castle",
    definition:
      "Noun. A fortified residence of a noble or royalty, like exploring a medieval castle on a tour.",
    spelling_rule: 60,
  },
  {
    id: 324,
    word: "wrestle",
    definition:
      "Verb. To engage in physical combat or struggle, like wrestling with a sibling for fun.",
    spelling_rule: 60,
  },
  {
    id: 325,
    word: "gristle",
    definition:
      "Noun. Tough cartilaginous tissue, like finding gristle in a piece of meat while eating.",
    spelling_rule: 60,
  },
  {
    id: 326,
    word: "glisten",
    definition:
      "Verb. To shine or sparkle, like dewdrops glistening in the morning sunlight.",
    spelling_rule: 60,
  },
  {
    id: 327,
    word: "salmon",
    definition:
      "Noun. A type of fish often caught for food, like grilling fresh salmon for dinner.",
    spelling_rule: 60,
  },
  {
    id: 328,
    word: "February",
    definition:
      "Noun. The second month of the year, like celebrating Valentine's Day in February.",
    spelling_rule: 60,
  },
  {
    id: 329,
    word: "sword",
    definition:
      "Noun. A weapon with a long metal blade, like knights wielding swords in battle.",
    spelling_rule: 60,
  },
  {
    id: 330,
    word: "wreck",
    definition:
      "Verb. To cause destruction or damage, like witnessing a shipwreck during a storm.",
    spelling_rule: 60,
  },
  {
    id: 331,
    word: "yacht",
    definition:
      "Noun. A large sailing vessel for pleasure or racing, like sailing on a luxurious yacht.",
    spelling_rule: 60,
  },
  {
    id: 332,
    word: "biscuit",
    definition:
      "Noun. A baked sweet treat, often eaten together with a cup of tea.",
    spelling_rule: 60,
  },
  {
    id: 333,
    word: "dessert",
    definition:
      "Noun. A sweet course after the main course of a meal (stress on second syllable).",
    spelling_rule: 61,
  },
  {
    id: 334,
    word: "draught",
    definition: "Noun. A current of air",
    spelling_rule: 61,
  },
  {
    id: 335,
    word: "father",
    definition: "Noun. A male parent",
    spelling_rule: 61,
  },
  {
    id: 336,
    word: "altar",
    definition: "Noun. A table-like piece of furniture in a church.",
    spelling_rule: 61,
  },
  {
    id: 337,
    word: "principal",
    definition:
      "Meaning 1. Adjective: most important (e.g. principal ballerina). Meaning 2. noun: important person (e.g. principal of a college).",
    spelling_rule: 61,
  },
  {
    id: 338,
    word: "serial",
    definition:
      'Adjective. Comes from the noun "series" – a succession of things one after the other.',
    spelling_rule: 61,
  },
  {
    id: 339,
    word: "principle",
    definition:
      "Noun. A fundamental truth, belief, or rule that guides behavior or decision-making, often moral in nature.",
    spelling_rule: 61,
  },
  {
    id: 340,
    word: "morning",
    definition: "Noun. The early part of the day, usually before noon",
    spelling_rule: 61,
  },
  {
    id: 341,
    word: "whose",
    definition:
      "Pronoun. Belonging to or associated with whom, often used to indicate possession or ownership.",
    spelling_rule: 61,
  },
  {
    id: 342,
    word: "dissent",
    definition: "Verb meaning ‘to disagree’, or noun meaning ‘disagreement’",
    spelling_rule: 61,
  },
  {
    id: 343,
    word: "wary",
    definition:
      "Adjective. Cautious or watchful, often showing distrust or suspicion of potential danger or harm.",
    spelling_rule: 61,
  },
  {
    id: 344,
    word: "who’s",
    definition: 'Contraction of "who is" or "who has". ',
    spelling_rule: 61,
  },
  {
    id: 345,
    word: "farther",
    definition: "Adjective. At a greater physical distance.",
    spelling_rule: 61,
  },
  {
    id: 346,
    word: "precede",
    definition: "Verb. To go in front of or before",
    spelling_rule: 61,
  },
  {
    id: 347,
    word: "proceed",
    definition: "Verb. To continue or move forward.",
    spelling_rule: 61,
  },
  {
    id: 348,
    word: "mourning",
    definition: "Noun. Grieving for someone who has died",
    spelling_rule: 61,
  },
  {
    id: 349,
    word: "cereal",
    definition: "Noun. A food item that often eaten at breakfast time.",
    spelling_rule: 61,
  },
  {
    id: 350,
    word: "steel",
    definition: "Noun. A type of strong metal often used to build bridges.",
    spelling_rule: 61,
  },
  {
    id: 351,
    word: "profit",
    definition: "Noun. Money that is made in selling things",
    spelling_rule: 61,
  },
  {
    id: 352,
    word: "stationary",
    definition: "Adjective. Not moving.",
    spelling_rule: 61,
  },
  {
    id: 353,
    word: "desert",
    definition: "Noun. A barren place (stress on first syllable)",
    spelling_rule: 61,
  },
  {
    id: 354,
    word: "draft",
    definition:
      "Meaning 1. Noun. A first attempt at writing something. Meaning 2. Verb. To make the first attempt, or to draw in someone (e.g. to draft in extra help)",
    spelling_rule: 61,
  },
  {
    id: 355,
    word: "past",
    definition:
      "Noun or adjective referring to a previous time (e.g. In the past) or preposition or adverb showing place (e.g. he walked past me)",
    spelling_rule: 61,
  },
  {
    id: 356,
    word: "aisle",
    definition: "Noun. a gangway between seats (in a church, train, plane).",
    spelling_rule: 61,
  },
  { id: 357, word: "isle", definition: "Noun. An island", spelling_rule: 61 },
  {
    id: 358,
    word: "aloud",
    definition: "Adverb. In a way that is audibly spoken or heard",
    spelling_rule: 61,
  },
  {
    id: 359,
    word: "stationery",
    definition: "Noun. Paper, envelopes etc.",
    spelling_rule: 61,
  },
  {
    id: 360,
    word: "passed",
    definition: "Verb. Past tense of the verb ‘pass’.",
    spelling_rule: 61,
  },
  {
    id: 361,
    word: "guessed",
    definition: 'Verb. Past tense of the verb "guess".',
    spelling_rule: 61,
  },
  {
    id: 362,
    word: "heard",
    definition: "Verb. Past tense of the verb hear",
    spelling_rule: 61,
  },
  {
    id: 363,
    word: "herd",
    definition: "Noun: a group of animals",
    spelling_rule: 61,
  },
  {
    id: 364,
    word: "led",
    definition: 'Verb. Past tense of the verb "lead".',
    spelling_rule: 61,
  },
  {
    id: 365,
    word: "allowed",
    definition:
      "Adjective. Permitted to do something, often with authorisation or permission from an authority figure.",
    spelling_rule: 61,
  },
  {
    id: 366,
    word: "lead",
    definition:
      'Meaning 1. Verb: present tense of a verb meaning "to guide someone". Meaning 2. Noun: a heavy metal.',
    spelling_rule: 61,
  },
  {
    id: 367,
    word: "bridle",
    definition: "Noun. reins for controlling a horse.",
    spelling_rule: 61,
  },
  {
    id: 368,
    word: "complement",
    definition:
      "Verb. Related to the word complete – to make something complete or more complete (e.g. her scarf complemented her outfit).",
    spelling_rule: 61,
  },
  {
    id: 369,
    word: "prophet",
    definition:
      "Noun. Someone who brings a message from God and might foretell the future",
    spelling_rule: 61,
  },
  {
    id: 370,
    word: "steal",
    definition: "Verb. To take something that does not belong to you",
    spelling_rule: 61,
  },
  {
    id: 371,
    word: "ascent",
    definition: "Noun. The action of moving upward",
    spelling_rule: 61,
  },
  {
    id: 372,
    word: "descent",
    definition: "Noun. the act of descending (going down).",
    spelling_rule: 61,
  },
  {
    id: 373,
    word: "weary",
    definition:
      "Adjective. Feeling tired or fatigued, often due to physical or mental exertion, requiring rest or sleep.",
    spelling_rule: 61,
  },
  {
    id: 374,
    word: "assent",
    definition: "Verb meaning 'to agree' or noun meaning 'agreement'",
    spelling_rule: 61,
  },
  {
    id: 375,
    word: "alter",
    definition: 'Verb meaning "to change"',
    spelling_rule: 61,
  },
  {
    id: 376,
    word: "bridal",
    definition: "Adjective. Relating to a bridge at a wedding.",
    spelling_rule: 61,
  },
  {
    id: 377,
    word: "compliment",
    definition:
      "Meaning 1. Verb: to make nice remarks about someone. Meaning two. Noun: a nice remark that is made to someone.",
    spelling_rule: 61,
  },
  {
    id: 378,
    word: "effect",
    definition: "Usually a noun. If used as a verb, it means ‘bring about’.",
    spelling_rule: 61,
  },
  {
    id: 379,
    word: "affect",
    definition:
      "Verb. To influence or change someone or something, often emotionally or mentally, in a significant way.",
    spelling_rule: 61,
  },
  {
    id: 380,
    word: "desert",
    definition: "Verb. To abandon (stress on second syllable)",
    spelling_rule: 61,
  },
  {
    id: 381,
    word: "guest",
    definition: 'Noun meaning "visitor"',
    spelling_rule: 61,
  },
  {
    id: 382,
    word: "advice",
    definition:
      "Noun. Helpful suggestions or guidance given to someone to help them with a decision or problem.",
    spelling_rule: 61,
  },
  {
    id: 383,
    word: "advise",
    definition:
      "Verb. To offer helpful suggestions or guidance to someone facing a decision or problem.",
    spelling_rule: 61,
  },
  {
    id: 384,
    word: "device",
    definition:
      "Noun. An object or tool designed to perform a specific task or solve a problem.",
    spelling_rule: 61,
  },
  {
    id: 385,
    word: "devise",
    definition:
      "Verb. To invent or create a plan or solution, often to solve a problem or achieve a goal.",
    spelling_rule: 61,
  },
  {
    id: 386,
    word: "licence",
    definition:
      "Noun. Official permission or authorization given by an authority to do something, like driving.",
    spelling_rule: 61,
  },
  {
    id: 387,
    word: "license",
    definition:
      "Noun. An official document or permit granting permission to do something, like driving a car.",
    spelling_rule: 61,
  },
  {
    id: 388,
    word: "practice",
    definition:
      "Noun. Repeating an activity or exercise to improve a skill or performance, like playing an instrument.",
    spelling_rule: 61,
  },
  {
    id: 389,
    word: "practise",
    definition:
      "Verb. To repeat an activity or exercise in order to improve a skill or performance.",
    spelling_rule: 61,
  },
  {
    id: 390,
    word: "prophecy",
    definition:
      "Noun. A prediction about what will happen in the future, often made by someone with special insight.",
    spelling_rule: 61,
  },
  {
    id: 391,
    word: "prophesy",
    definition:
      "Verb. To predict or foretell what will happen in the future, often based on intuition or insight.",
    spelling_rule: 61,
  },
  {
    id: 392,
    word: "pray",
    definition:
      "Verb. To communicate with a higher power or express wishes for oneself or others' well-being.",
    spelling_rule: 61,
  },
  {
    id: 393,
    word: "band",
    definition:
      "Noun. A group of musicians playing instruments together, creating harmonious sounds for listeners.",
    spelling_rule: 61,
  },
  {
    id: 394,
    word: "course",
    definition:
      "Noun. The path or direction taken to reach a destination, often used in navigation or travel.",
    spelling_rule: 61,
  },
  {
    id: 395,
    word: "side",
    definition:
      "Noun. One of two opposing options or positions, like choosing between heads or tails in a coin toss.",
    spelling_rule: 61,
  },
  {
    id: 396,
    word: "counsel",
    definition:
      "Noun. Guidance or advice given to someone to help them make decisions or solve problems.",
    spelling_rule: 61,
  },
  {
    id: 397,
    word: "waist",
    definition:
      "Noun. The narrow part of the body between the ribs and hips, often where a belt is worn.",
    spelling_rule: 61,
  },
  {
    id: 398,
    word: "waste",
    definition:
      "Verb. To use resources or materials carelessly or unnecessarily, without concern for conservation.",
    spelling_rule: 61,
  },
  {
    id: 399,
    word: "witch",
    definition:
      "Noun. A person believed to possess magical abilities and often depicted in folklore and stories.",
    spelling_rule: 61,
  },
  {
    id: 400,
    word: "which",
    definition:
      "Pronoun. Indicating a choice between two or more options or possibilities, often used in questions.",
    spelling_rule: 61,
  },
  {
    id: 401,
    word: "accept",
    definition:
      "Verb. To receive or agree to something offered, like agreeing to take a gift or an opportunity.",
    spelling_rule: 61,
  },
  {
    id: 402,
    word: "except",
    definition:
      "Preposition. Excluding or leaving out someone or something from a group or category.",
    spelling_rule: 61,
  },
  {
    id: 403,
    word: "affect",
    definition:
      'Verb. To influence or change someone"s emotions, actions, or thoughts, often in a significant way.',
    spelling_rule: 61,
  },
  {
    id: 404,
    word: "effect",
    definition:
      "Noun. The result or outcome of an action or event, often with noticeable consequences.",
    spelling_rule: 61,
  },
  {
    id: 405,
    word: "ball",
    definition:
      "Noun. A spherical object used in various sports or games, often thrown, kicked, or hit by players.",
    spelling_rule: 61,
  },
  {
    id: 406,
    word: "bawl",
    definition:
      "Verb. To cry loudly or sob uncontrollably, usually as a result of sadness or distress.",
    spelling_rule: 61,
  },
  {
    id: 407,
    word: "berry",
    definition:
      "Noun. A small, juicy fruit often found on bushes or vines, enjoyed fresh or in desserts.",
    spelling_rule: 61,
  },
  {
    id: 408,
    word: "bury",
    definition:
      "Verb. To inter or cover something underground, typically with soil or other material.",
    spelling_rule: 61,
  },
  {
    id: 409,
    word: "brake",
    definition:
      "Noun. A mechanical device used for slowing or stopping the motion of a vehicle or machine.",
    spelling_rule: 61,
  },
  {
    id: 410,
    word: "break",
    definition:
      "Verb. To separate or fracture into pieces, often as a result of force or pressure.",
    spelling_rule: 61,
  },
  {
    id: 411,
    word: "fair",
    definition:
      "Adjective. Treating everyone equally without favoritism or bias, ensuring fair treatment and opportunities.",
    spelling_rule: 61,
  },
  {
    id: 412,
    word: "fare",
    definition:
      "Noun. The price paid for transportation, often for a journey on public transportation like buses or trains.",
    spelling_rule: 61,
  },
  {
    id: 413,
    word: "grate",
    definition:
      "Verb. To shred or reduce something into small pieces or particles, often used in cooking.",
    spelling_rule: 61,
  },
  {
    id: 414,
    word: "great",
    definition:
      "Adjective. Of exceptional quality or extent, describing something remarkable or significant.",
    spelling_rule: 61,
  },
  {
    id: 415,
    word: "groan",
    definition:
      "Verb. To emit a deep sound expressing pain, discomfort, or dissatisfaction, often involuntary.",
    spelling_rule: 61,
  },
  {
    id: 416,
    word: "grown",
    definition:
      "Adjective. Having reached full adult size or maturity, describing something fully developed or matured.",
    spelling_rule: 61,
  },
  {
    id: 417,
    word: "here",
    definition:
      "Adverb. In this location or place, often used to indicate presence or location.",
    spelling_rule: 61,
  },
  {
    id: 418,
    word: "hear",
    definition:
      "Verb. To perceive sounds through the ears, often as a result of someone speaking or making noise.",
    spelling_rule: 61,
  },
  {
    id: 419,
    word: "heel",
    definition:
      "Noun. The back part of the foot below the ankle, often used for support and balance.",
    spelling_rule: 61,
  },
  {
    id: 420,
    word: "heal",
    definition:
      "Verb. To recover from injury or illness, often with time and proper care or treatment.",
    spelling_rule: 61,
  },
  {
    id: 421,
    word: "he’ll",
    definition:
      "Pronoun. He will or he shall, indicating a future action or state of being.",
    spelling_rule: 61,
  },
  {
    id: 422,
    word: "knot",
    definition:
      "Noun. A tangle or tight bundle, often found in ropes or hair, requiring unraveling.",
    spelling_rule: 61,
  },
  {
    id: 423,
    word: "not",
    definition:
      "Adverb. The opposite of affirming or agreeing, expressing negation or denial.",
    spelling_rule: 61,
  },
  {
    id: 424,
    word: "mail",
    definition:
      "Noun. Correspondence or packages sent through postal or electronic means for communication or delivery.",
    spelling_rule: 61,
  },
  {
    id: 425,
    word: "male",
    definition:
      "Adjective. Of the sex that typically produces sperm cells, distinct from female in reproductive anatomy.",
    spelling_rule: 61,
  },
  {
    id: 426,
    word: "main",
    definition:
      "Adjective. Primary or most important, often used to describe a central aspect or feature.",
    spelling_rule: 61,
  },
  {
    id: 427,
    word: "mane",
    definition:
      "Noun. Long hair growing from the neck or back of certain animals, like horses or lions.",
    spelling_rule: 61,
  },
  {
    id: 428,
    word: "meat",
    definition:
      "Noun. Edible flesh from animals, often consumed as a source of protein in various dishes.",
    spelling_rule: 61,
  },
  {
    id: 429,
    word: "meet",
    definition:
      "Verb. To come together or encounter someone at a specific time and place, often for a purpose.",
    spelling_rule: 61,
  },
  {
    id: 430,
    word: "medal",
    definition:
      "Noun. A metal disc or emblem awarded as a symbol of honor or achievement.",
    spelling_rule: 61,
  },
  {
    id: 431,
    word: "meddle",
    definition:
      "Verb. To interfere or intrude in someone else's affairs or business without permission.",
    spelling_rule: 61,
  },
  {
    id: 432,
    word: "missed",
    definition:
      "Adjective. Having failed to hit, reach, or catch something aimed for or expected.",
    spelling_rule: 61,
  },
  {
    id: 433,
    word: "mist",
    definition:
      "Noun. Fine droplets of water suspended in the air, often forming a thin fog or haze.",
    spelling_rule: 61,
  },
  {
    id: 434,
    word: "peace",
    definition:
      "Noun. A state of calm, tranquility, or absence of conflict or disturbance.",
    spelling_rule: 61,
  },
  {
    id: 435,
    word: "piece",
    definition:
      "Noun. A portion or fragment of something larger, often separated or detached from the whole.",
    spelling_rule: 61,
  },
  {
    id: 436,
    word: "plain",
    definition:
      "Adjective. Simple or unadorned, lacking in embellishments or decorations, straightforward or clear.",
    spelling_rule: 61,
  },
  {
    id: 437,
    word: "plane",
    definition:
      "Noun. A flat, level surface or area, often used to describe a geometric figure or tool.",
    spelling_rule: 61,
  },
  {
    id: 438,
    word: "rain",
    definition:
      "Verb. To experience falling water droplets from the sky, often accompanied by clouds and thunder.",
    spelling_rule: 61,
  },
  {
    id: 439,
    word: "rein",
    definition:
      "Noun. A strap or rope attached to a horse's harness to guide or control its movement.",
    spelling_rule: 61,
  },
  {
    id: 440,
    word: "reign",
    definition:
      "Noun. The period of time during which a monarch rules over a kingdom or empire.",
    spelling_rule: 61,
  },
  {
    id: 441,
    word: "scene",
    definition:
      "Noun. A setting or location, often referring to a specific place where an event occurs.",
    spelling_rule: 61,
  },
  {
    id: 442,
    word: "seen",
    definition:
      "Verb. To have perceived or observed something, often with the eyes, in the past.",
    spelling_rule: 61,
  },
  {
    id: 443,
    word: "weather",
    definition:
      "Noun. The atmospheric conditions, including temperature, humidity, precipitation, and wind, in a particular area.",
    spelling_rule: 61,
  },
  {
    id: 444,
    word: "whether",
    definition:
      "Conjunction. Expressing a condition or choice between alternatives, often used in indirect questions or statements.",
    spelling_rule: 61,
  },
  {
    id: 445,
    word: "current",
    definition:
      "Noun. The flow of water, air or electricity in a particular direction, often used to describe movement.",
    spelling_rule: 61,
  },
];
