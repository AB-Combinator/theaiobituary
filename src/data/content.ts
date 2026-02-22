export interface DeathNotice {
  name: string;
  years: string;
  body: string[];
}

export interface AttendanceStat {
  percentage: string;
  description: string;
}

export interface Survivor {
  bold: string;
  detail: string;
}

export interface CauseOfDeath {
  cause: string;
  factors: string[];
  examinerNote: string;
}

export interface PreviouslyDeclared {
  name: string;
  year: string;
  quote: string;
  statLabel: string;
  statValue: string;
  currentStatus: string;
}

export interface AdoptionLayer {
  number: number;
  name: string;
  status: string;
}

export const deathNotice: DeathNotice = {
  name: "The AI Boom",
  years: "2022 – 2026",
  body: [
    "The AI Boom passed quietly in early 2026, surrounded by thought leaders, podcast hosts, and a small circle of 0.3% of the global population who actually paid for its services.",
    "Born in late 2022 with the release of ChatGPT, the Boom is survived by roughly 8 billion people, 84% of whom never met it.",
    "The Boom is preceded in death by several other technologies that were also declared dead prematurely.",
  ],
};

export const attendanceStats: AttendanceStat[] = [
  {
    percentage: "84%",
    description:
      "of the world\u2019s population sent no representatives",
  },
  {
    percentage: "16%",
    description: "attended briefly via free tools, many only once",
  },
  {
    percentage: "0.3%",
    description: "were paying members of the congregation",
  },
  {
    percentage: "0.04%",
    description: "were close enough to use it daily for work",
  },
];

export const attendanceFootnote = "The service was described as \u201Cintimate.\u201D";

export const survivors: Survivor[] = [
  {
    bold: "An untouched market of 6.7 billion people",
    detail: "who have never typed a prompt",
  },
  {
    bold: "An entire product layer",
    detail:
      "that hasn\u2019t been built yet \u2014 ChatGPT is a text box, not a product",
  },
  {
    bold: "Every industry on earth",
    detail:
      "that hasn\u2019t restructured its workflows around AI",
  },
  {
    bold: "Enterprise adoption",
    detail:
      'still in the "pilot program" and "AI strategy deck" phase',
  },
  {
    bold: "The education system",
    detail: "which is still actively banning the deceased",
  },
  {
    bold: "The developing world",
    detail: "which was never formally introduced",
  },
  {
    bold: "An economic restructuring",
    detail:
      "that hasn\u2019t started \u2014 people are still doing old jobs with AI bolted on",
  },
];

export const causeOfDeath: CauseOfDeath = {
  cause:
    "Declared dead by a sample group representing approximately 0.04% of the global population, based on their personal experience of saturation.",
  factors: [
    "Individuals most immersed in AI mistaking their own fatigue for a global trend",
    'Media outlets completing the predictable "backlash cycle" common to all new technologies',
    'Foundation model improvements slowing from "shocking" to merely "significant"',
    "Investors with 18-month return horizons evaluating a 20-year infrastructure shift",
  ],
  examinerNote:
    "The body was never recovered. An independent audit revealed the Boom had reached only 16% of its intended territory at time of declared death.",
};

export const previouslyDeclared: PreviouslyDeclared[] = [
  {
    name: "The Personal Computer",
    year: "1977\u20131983",
    quote:
      "\u201CA toy for hobbyists. No normal person will ever need one.\u201D",
    statLabel: "Households with a computer at time of death",
    statValue: "~8%",
    currentStatus:
      "The GUI was invented. Now 5 billion people use one daily.",
  },
  {
    name: "The Internet",
    year: "2001",
    quote:
      "\u201CThe dot-com crash proves the web was overhyped.\u201D",
    statLabel: "Users at time of death",
    statValue: "~500M (8% of world population)",
    currentStatus: "$16 trillion economy",
  },
  {
    name: "The Smartphone",
    year: "2010",
    quote:
      "\u201CMarket saturation is imminent. Everyone who wants one has one.\u201D",
    statLabel: "Users at time of death",
    statValue: "~1.2B (20% of world population)",
    currentStatus: "6.9 billion users",
  },
  {
    name: "Electric Cars",
    year: "2013",
    quote: "\u201CA niche toy for wealthy early adopters.\u201D",
    statLabel: "Market share at time of death",
    statValue: "0.2%",
    currentStatus: "18% of global new car sales",
  },
  {
    name: "Social Media",
    year: "2014",
    quote:
      "\u201CFacebook fatigue is real. The era of social networking is ending.\u201D",
    statLabel: "Users at time of death",
    statValue: "~1.8B (25% of world population)",
    currentStatus: "5+ billion users",
  },
];

export const previouslyDeclaredFootnote =
  "All of the above were subsequently declared trillion-dollar industries.";

export const inLieuOfFlowers = {
  intro: "Nobody knew they needed a computer until someone invented the GUI.",
  paragraphs: [
    "For decades, computers were terminals \u2014 a blinking cursor on a dark screen. Incredibly powerful. Experts used them daily. But if you sat a normal person in front of one, they\u2019d stare at it and say, \u201CI don\u2019t know what to do with this.\u201D The computer wasn\u2019t useless. It was unapproachable. It took the Macintosh in 1984 \u2014 icons, windows, a mouse, a desktop metaphor \u2014 to show ordinary people what a computer was for.",
    "AI is in its terminal era right now. ChatGPT is a blank text box. You open it. You see nothing. You\u2019re supposed to type something, but you don\u2019t know what. For the 84% who\u2019ve never used AI, this is their experience: a blinking cursor with no GUI. The technology works. The interface doesn\u2019t exist.",
    "And maybe the real GUI moment for AI isn\u2019t even a screen. Maybe it\u2019s AI that can see and hear your world \u2014 ambient, always-on, contextual. You don\u2019t type a prompt. It\u2019s just there. It sees what you\u2019re working on. It hears what you\u2019re struggling with. It helps without being asked. That\u2019s the leap from terminal to GUI to something we don\u2019t have a name for yet. AR glasses, spatial computing, ambient intelligence \u2014 the form factor that makes AI invisible and useful to everyone hasn\u2019t shipped.",
  ],
  layersIntro:
    "We\u2019ve completed roughly one layer of a five-layer adoption curve:",
  closingParagraphs: [
    "The people declaring the boom over are watching Layer 1 slow down and mistaking it for the whole building.",
    "Every technology that reshaped civilization went through exactly this moment \u2014 where the insiders declared it finished, right before the actual adoption curve began. The Macintosh shipped three years after people started saying personal computers were a fad.",
    "The 84% aren\u2019t late adopters. They\u2019re the entire market waiting for someone to invent the GUI.",
  ],
};

export const adoptionLayers: AdoptionLayer[] = [
  {
    number: 1,
    name: "The technology",
    status: "foundation models exist and work. (Done.)",
  },
  {
    number: 2,
    name: "The products",
    status:
      "AI-native applications for real people, not power users. (Barely started.)",
  },
  {
    number: 3,
    name: "The distribution",
    status:
      "reaching the 84% who haven\u2019t been served. (Not started.)",
  },
  {
    number: 4,
    name: "The economic restructuring",
    status: "industries reorganizing around AI. (Not started.)",
  },
  {
    number: 5,
    name: "The cultural integration",
    status:
      "AI becoming as normal as the internet. (Not started.)",
  },
];

export const closingLine =
  "The AI Boom didn\u2019t die. It just hasn\u2019t been born yet for most of the world.";
