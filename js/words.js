const words = [
  {
    word: "forgotten",
    definition: "something lost from memory or not remembered anymore.",
  },
  {
    word: "forgetting",
    definition: "when you are not remembering something, you are ______ it.",
  },
  {
    word: "beginner",
    definition: "someone who is not experienced at doing something.",
  },
  {
    word: "beginning",
    definition: "the start of something.",
  },
  {
    word: "preferred",
    definition:
      "something liked more than other things or chosen as the best option.",
  },
  {
    word: "preferring",
    definition:
      "choosing one thing in preference to another because you like it more.",
  },
  {
    word: "gardening",
    definition:
      "an outdoor activity that can include planting flowers and mowing the lawn.",
  },
  {
    word: "limiting",
    definition:
      "setting boundaries or restrictions that control what you can or can't do.",
  },
  {
    word: "gym",
    definition: "a place where people can go to work out.",
  },
  {
    word: "myth",
    definition:
      "a story, often from long ago, that might not be real but teaches important lessons.",
  },
  {
    word: "mystery",
    definition:
      "a puzzling situation or event that needs to be solved or understood.",
  },
  {
    word: "symbol",
    definition:
      "something that represents or stands for an idea, feeling, or thing.",
  },
  {
    word: "synonym",
    definition: "a word that means the same or nearly the same as another.",
  },
  {
    word: "system",
    definition:
      "a routine or plan where different parts work together to make something happen smoothly, like a school schedule.",
  },
  {
    word: "physical",
    definition:
      "involving movements, actions, or objects you can see, feel, or touch in the real world.",
  },
  {
    word: "crystal",
    definition:
      "A shiny, clear rock that forms in shapes and reflects light beautifully, often used for jewelry or decorations.",
  },
  {
    word: "rhythm",
    definition: "a pattern of beats or sounds that repeat in music or poetry.",
  },
  {
    word: "young",
    definition: "antonym of 'old'",
  },

  {
    word: "double",
    definition: "twice as much or having two of something.",
  },

  {
    word: "country",
    definition:
      "a place where people live, with its own government, land, and culture.",
  },
  {
    word: "encourage",
    definition:
      "to give support or praise to someone to help them feel confident and motivated.",
  },

  {
    word: "borough",
    definition:
      "a small town or district within a larger city, like a neighborhood with its own identity.",
  },
  {
    word: "enormous",
    definition:
      "exceptionally large, like a huge crocodile or an immense skyscraper.",
  },
  {
    word: "enough",
    definition: "a sufficient amount.",
  },

  {
    word: "tough",
    definition:
      "hard to do or endure, or a person or thing that shows strength, effort, or resilience. ",
  },

  {
    word: "colour",
    definition: "a shade, hue or tint such as red, blue or green.",
  },

  {
    word: "favour",
    definition:
      "an act of kindness or help shown to someone, like doing a task that someone has asked you to do.",
  },

  {
    word: "flavour",
    definition:
      "the taste of something, like sweetness, sourness, or spiciness, making food enjoyable.",
  },

  {
    word: "humour",
    definition:
      "a funny or amusing quality that makes people laugh or smile, found in jokes or situations.",
  },
  {
    word: "information",
    definition:
      "Facts or details about something, often used to learn or understand.",
  },
  {
    word: "preparation",
    definition:
      "Getting ready for something, planning and organising before an event or activity.",
  },

  {
    word: "admiration",
    definition:
      "Feeling of respect and liking towards someone for their qualities or achievements.",
  },
  {
    word: "transportation",
    definition: "The act of moving people or goods from one place to another.",
  },

  {
    word: "adoration",
    definition:
      "A strong feeling of love, respect, and admiration towards someone or something.",
  },
  {
    word: "action",
    definition:
      "Doing something, like moving, speaking, or making a decision, often involving physical movement or effort.",
  },

  {
    word: "reaction",
    definition:
      "Response to something that happens, such as emotions, behaviors, or changes in the environment.",
  },
  {
    word: "fiction",
    definition:
      "stories that are made up, often involving imaginary characters and events.",
  },
  {
    word: "solution",
    definition:
      "a way to solve a problem, fix a situation, or answer a question.",
  },
  {
    word: "conclusion",
    definition:
      "The end or final part of something, often summarising what happened or was learned.",
  },
  {
    word: "invention",
    definition:
      "Something created that is new or original, often solving a problem or meeting a need.",
  },
  {
    word: "decision",
    definition:
      "Choosing between different options or making up your mind about something.",
  },
  {
    word: "direction",
    definition:
      "instructions indicating where something is located or about how to do something.",
  },
  {
    word: "pollution",
    definition:
      "Harmful substances or waste that contaminate the environment, air, water, or soil.",
  },
  {
    word: "exploration",
    definition:
      "Discovering new places or ideas, often through travelling, research, or investigation.",
  },
  {
    word: "admission",
    definition:
      "meaning 1: permission to enter a place. Meaning 2: acknowledging that something is correct.",
  },
  {
    word: "expansion",
    definition:
      "The act of growing or getting bigger, often by increasing in size or scope.",
  },
  {
    word: "construction",
    definition: "building something, like houses, roads or bridges",
  },
  {
    word: "emotion",
    definition:
      "Feelings like happiness, sadness, anger, or fear that people experience in different situations.",
  },
  {
    word: "communication",
    definition:
      "Sharing information or ideas between people using words, gestures or technology.",
  },
  {
    word: "illegal",
    definition: "Against the law or not permitted by the authorities.",
  },
  {
    word: "illegible",
    definition: "Handwriting or text that is difficult or impossible to read.",
  },
  {
    word: "illogical",
    definition:
      "Doesn't make sense or follow reason, without a clear, rational explanation.",
  },

  {
    word: "immature",
    definition:
      "Not fully grown up. Acting childishly or irresponsibly for your age.",
  },
  {
    word: "immortal",
    definition:
      "Able to live forever, never dying or experiencing the end of life.",
  },
  {
    word: "impossible",
    definition: "Something that cannot happen or be done.",
  },
  {
    word: "impatient",
    definition:
      "Feeling restless or irritated when things aren't happening as quickly as desired.",
  },
  {
    word: "imperfect",
    definition:
      "Not perfect, having flaws or mistakes, not meeting ideal standards.",
  },
  {
    word: "inactive",
    definition:
      "Not doing anything, not moving or participating, staying idle or dormant.",
  },

  {
    word: "incorrect",
    definition:
      "Wrong or inaccurate, not in accordance with what is true or right.",
  },
  {
    word: "irregular",
    definition:
      "Not following a regular pattern, shape, or schedule; uneven or inconsistent.",
  },

  {
    word: "irrelevant",
    definition:
      "Not related to the topic or situation, not important or applicable.",
  },
  {
    word: "irresponsible",
    definition:
      "Not acting in a careful or trustworthy way; not fulfilling duties or obligations.",
  },

  {
    word: "redo",
    definition: "to do something again",
  },

  {
    word: "refresh",
    definition:
      "To clean or renew something, giving it new energy or vitality.",
  },
  {
    word: "return",
    definition:
      "to bring something back to its original place or give something back.",
  },
  {
    word: "reappear",
    definition:
      "when something turns up again after disappearing or not being seen.",
  },
  {
    word: "redecorate",
    definition:
      "changing the look of a room or space by painting it differently, or adding new furniture.",
  },
  {
    word: "re-enter",
    definition:
      "Going back into a place or situation after leaving it temporarily.",
  },
  {
    word: "subdivide",
    definition:
      "Dividing something into smaller parts, especially when talking about land or property.",
  },
  {
    word: "subheading",
    definition:
      "A smaller title under a main title, often used to divide sections.",
  },
  {
    word: "submarine",
    definition:
      "A type of watercraft that travels underwater, used for exploration or warfare.",
  },
  {
    word: "submerge",
    definition:
      "To go underwater or be covered by water, disappearing from view.",
  },
  {
    word: "interact",
    definition: "To communicate or work together with others.",
  },
  {
    word: "intercity",
    definition: "Traveling or connecting between different cities.",
  },
  {
    word: "international",
    definition:
      "Involving or relating to more than one country, happening on a global scale.",
  },
  {
    word: "interrelated",
    definition:
      "Things connected or dependent on each other, influencing or affecting one another.",
  },
  {
    word: "supermarket",
    definition:
      "A large store where you can buy food, household items, and other goods.",
  },
  {
    word: "superman",
    definition:
      "A powerful hero with extraordinary abilities, often fighting for justice and protecting people from danger.",
  },
  {
    word: "superstar",
    definition:
      "A person who is extremely famous and admired for their exceptional talent or achievements.",
  },
  {
    word: "antiseptic",
    definition:
      "A substance that kills germs and prevents infection when applied to cuts, wounds, or other injuries.",
  },
  {
    word: "anticlockwise",
    definition:
      "Moving or turning in the opposite direction to the way a clock's hands move around.",
  },
  {
    word: "antisocial",
    definition:
      "Not enjoying or seeking the company of others, preferring to be alone or avoiding social situations.",
  },
  {
    word: "autobiography",
    definition:
      "A book about someone's life, written by that person, telling their own story and experiences.",
  },
  {
    word: "autograph",
    definition:
      "A signature from a famous person, often written on paper, a book, or clothing, as a keepsake.",
  },
  {
    word: "automatic",
    definition:
      "A machine or device that works by itself without needing to be operated manually by a person.",
  },
  {
    word: "attraction",
    definition:
      "It's when you're drawn to something or someone because they're interesting or appealing.",
  },
];
