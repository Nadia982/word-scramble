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
  {id: 45,
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
  {id: 47,
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
  {id: 54,
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
  {id: 58,
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
  {id: 64,
    word: "redo",
    definition: "to do something again",
  },
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
  {id: 69,
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
  {id: 75,
    word: "intercity",
    definition: "Traveling or connecting between different cities.",
  },
  {id: 76,
    word: "international",
    definition:
      "Involving or relating to more than one country, happening on a global scale.",
  },
  {id: 77,
    word: "interrelated",
    definition:
      "Things connected or dependent on each other, influencing or affecting one another.",
  },
  {id: 78,
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
  {id: 80,
    word: "superstar",
    definition:
      "A person who is extremely famous and admired for their exceptional talent or achievements.",
  },
  {id: 81,
    word: "antiseptic",
    definition:
      "A substance that kills germs and prevents infection when applied to cuts, wounds, or other injuries.",
  },
  {id: 82,
    word: "anticlockwise",
    definition:
      "Moving or turning in the opposite direction to the way a clock's hands move around.",
  },
  {id: 83,
    word: "antisocial",
    definition:
      "Not enjoying or seeking the company of others, preferring to be alone or avoiding social situations.",
  },
  {id: 84,
    word: "autobiography",
    definition:
      "A book about someone's life, written by that person, telling their own story and experiences.",
  },
  {id: 85,
    word: "autograph",
    definition:
      "A signature from a famous person, often written on paper, a book, or clothing, as a keepsake.",
  },
  {id: 86,
    word: "automatic",
    definition:
      "A machine or device that works by itself without needing to be operated manually by a person.",
  },
  {id: 87,
    word: "attraction",
    definition:
      "It's when you're drawn to something or someone because they're interesting or appealing.",
  },
  {id: 88,
    word: "consume",
    definition:
      "To use or eat something until it's all gone or finished.",
  },
  {id: 89,
    word: "homeless",
    definition:
      "Someone who doesn't have a place to live.",
  },
  {id: 90,
    word: "breathe",
    definition:
      "A verb meaning to inhale and exhale.",
  },
  {id: 91,
    word: "breath",
    definition:
      "Noun: the air/vapour that comes out of your mouth when you exhale.",
  },
  {id: 92,
    word: "valley",
    definition:
      "The low land between two mountains.",
  },
  {id: 93,
    word: "visitors",
    definition:
      "People who go to or stay in a place temporarily, perhaps while they are on holiday.",
  },
  {id: 94,
    word: "battling",
    definition:
      "Fighting against something.",
  },
  {id: 95,
    word: "completely",
    definition:
      "Adverb meaning 'entirely' or 'fully'.",
  },
  {id: 96,
    word: "finally",
    definition:
      "Adverb. Something that happens 'at last' or after a long time of waiting.",
  }, 
  {id: 97,
    word: "exactly",
    definition:
      "Adverb. Precisely correct or in complete agreement with a statement.",
  }, 
  {id: 98,
    word: "clearly",
    definition:
      "Adverb. Easily understood or without doubt, making it obvious and easy to perceive or comprehend.",
  }, 
  {id: 99,
    word: "eagerly",
    definition:
      "Adverb. Excitedly anticipating or looking forward to something with enthusiasm.",
  }, 
  {id: 100,
    word: "treasure",
    definition:
      "Noun. Something valuable or cherished; sometimes hidden away in a wooden chest.",
      spelling_rule: "44"
  }, 
];
