export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  priceLabel: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
  gallery: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  certification?: string;
  bio: string;
  image?: string;
};

export type CourseCard = {
  title: string;
  duration: string;
  price: string;
  summary: string;
  requirements: string[];
  highlights: string[];
  note?: string;
  gallery: string[];
};

export type IntroDetails = {
  title: string;
  duration: string;
  schedule: string;
  price: string;
  summary: string;
  audience: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  gallery: string[];
};

export type FundiveDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  inclusions: string[];
  exclusions: string[];
  transportAddOns: string[];
  notes: string[];
  gallery: string[];
};

export type LineTrainingDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  rates: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  gallery: string[];
};

const contact = {
  phone: "+63 906 629 3634",
  email: "swakefreediver@gmail.com",
  whatsapp: "https://api.whatsapp.com/send?phone=639066293634",
  instagram: "https://www.instagram.com/direct/t/17842367781054987/",
  facebook: "https://www.messenger.com/t/115348667850263",
};

const contactColors: Record<string, string> = {
  WhatsApp: "text-[#25D366]",
  Instagram: "text-[#E4405F]",
  Facebook: "text-[#1877F2]",
  Email: "text-slate-300",
};

export const site = {
  name: "Swake Freedivers Siquijor",
  description:
    "Freediving in Siquijor for first-timers and experienced divers.",
  legalName: "Swake Diving Center",
  baseUrl: "https://swakefreedivers.com",
  contact,
  contactLinks: [
    { label: "WhatsApp", href: contact.whatsapp },
    { label: "Instagram", href: contact.instagram },
    { label: "Facebook", href: contact.facebook },
    { label: "Email", href: `mailto:${contact.email}` },
  ],
  location: {
    area: "Sitio Sawang, Brgy. Tubod, San Juan, Siquijor",
    province: "Siquijor, Philippines",
    note: "Exact dive sites depend on conditions for the day.",
  },
  trustPoints: [
    "Calm, unhurried sessions.",
    "Planned around actual sea conditions and diver level.",
    "Sessions suitable for first-timers, returning divers, and progressing students.",
    "Progression not rushed but kept steady.",
  ],
};

export const faqs = [
  {
    question: "Do I need experience to join?",
    answer:
      "No. Intro sessions are designed for first-timers, while training and guided dives are for divers with prior experience.",
  },
  {
    question: "How do you choose dive sites?",
    answer:
      "Sites are selected based on conditions, safety, visibility, currents, and the diver's level.",
  },
  {
    question: "How do I book?",
    answer:
      "Send a message through WhatsApp, Instagram, Facebook, or email to confirm availability and session details.",
  },
];

export const services: ServiceSummary[] = [
  {
    slug: "intro-to-freediving",
    title: "Introduction to Freediving",
    shortTitle: "Intro to Freediving",
    summary:
      "A one-day first-timer experience covering essential theory, breathing practice, and a supervised open-water session.",
    priceLabel: "₱2,500",
    ctaLabel: "View Intro",
    href: "/services/intro-to-freediving",
    image: "/gallery/intro-1.JPG",
    imageAlt: "Intro to freediving session in Siquijor",
    gallery: [
      "/images/intro/1.JPG",
      "/images/intro/2.jpg",
      "/images/intro/3.jpeg",
    ],
  },
  {
    slug: "fundive-with-guide",
    title: "Siquijor Fundive with Guide",
    shortTitle: "Fundive with Guide",
    summary:
      "Guided fundives for guests who already completed an intro class and want to explore up to two sites with local guidance.",
    priceLabel: "₱1,500 / pax",
    ctaLabel: "View Fundive",
    href: "/services/fundive-with-guide",
    image: "/gallery/fundive-1.JPG",
    imageAlt: "Guided fundive in Siquijor",
    gallery: [
      "/images/fundive/1.JPG",
      "/images/fundive/2.jpg",
      "/images/fundive/3.jpg",
      "/images/fundive/4.jpg",
      "/images/fundive/5.jpg",
      "/images/fundive/6.jpg",
      "/images/fundive/7.jpg",
      "/images/fundive/8.jpg",
      "/images/fundive/9.jpg",
      "/images/fundive/10.jpg",
      "/images/fundive/11.JPG",
      "/images/fundive/12.jpg",
      "/images/fundive/13.jpg",
      "/images/fundive/14.jpg",
    ],
  },
  {
    slug: "line-training",
    title: "Line Training Package",
    shortTitle: "Line Training",
    summary:
      "Technique-focused training with pre-dive planning, supervised line dives, and post-dive feedback for progressing divers.",
    priceLabel: "₱1,500–₱2,500",
    ctaLabel: "View Training",
    href: "/services/line-training",
    image: "/gallery/line-training-1.jpg",
    imageAlt: "Freediving line training session",
    gallery: [
      "/images/linetraining/1.jpg",
      "/images/linetraining/2.JPG",
      "/images/linetraining/3.jpg",
      "/images/linetraining/4.jpg",
      "/images/linetraining/5.jpg",
      "/images/linetraining/6.jpg",
    ],
  },
  {
    slug: "courses",
    title: "Molchanovs Certification Courses",
    shortTitle: "Courses",
    summary:
      "Structured Wave 1 - 3 training for divers building a safer foundation, better technique, and more depth comfort.",
    priceLabel: "Wave 1 - 3",
    ctaLabel: "View Courses",
    href: "/services/courses",
    image: "/gallery/intro-1.jpg",
    imageAlt: "Freediving course session in Siquijor",
    gallery: [],
  },
];

export const courseCards: CourseCard[] = [
  {
    title: "Molchanovs Wave 1",
    duration: "2–3 days",
    price: "Contact for current rate",
    summary:
      "Entry-level certification focused on safety, equalization, open-water technique, and a stable foundation.",
    requirements: [
      "Comfortable in the water",
      "Able to swim confidently",
      "Suitable for beginners and early-stage divers",
    ],
    highlights: [
      "Breathing and relaxation basics",
      "Equalization foundations",
      "Static, dynamic, and depth sessions",
      "Safety procedures and buddy work",
    ],
    note:
      "Exact structure depends on conditions, student pace, and certification standards.",
    gallery: [],
  },
  {
    title: "Molchanovs Wave 2",
    duration: "3-4 days",
    price: "Contact for current rate",
    summary:
      "Intermediate freediving course for divers ready to refine technique, improve efficiency, and build deeper confidence.",
    requirements: [
      "Wave 1 or equivalent certification",
      "Comfort with previous depth training",
      "Good equalization control",
    ],
    highlights: [
      "Technique refinement",
      "Rescue and safety progression",
      "Depth-specific coaching",
      "Structured performance feedback",
      "Transition recreational divers into autonomous",
    ],
    note:
      "Best suited to divers who already have a solid foundation and want guided progression.",
    gallery: [],
  },
  {
    title: "Molchanovs Wave 3",
    duration: "4-5 days",
    price: "Contact for current rate",
    summary:
      "Advanced/Master freediving certification course covering advanced equalization, open-water techniques, and a resilient mental foundation.",
    requirements: [
      "Wave 2 or equivalent certification",
      "Comfort with previous depth training",
      "Good equalization control",
    ],
    highlights: [
      "Transitioning to deep Frenzel and mouthfill equalization, plus reverse packing",
      "Attention deconcentration and relaxation techniques under performance pressure",
      "Qualification to act as an assistant instructor for Wave 1 and Wave 2 courses",
    ],
    note:
      "Best suited to divers who are eager to master recreational freediving training.",
    gallery: [],
  },
];

export const introDetails: IntroDetails = {
  title: "Intro to Freediving",
  duration: "Half day",
  schedule: "8AM - 12NN | Weekdays and weekends - prior arrangement",
  price: "₱2,500",
  summary:
    "A first-timer session focused on comfort in the water, basic theory, breathing, safety, and a supervised open-water experience.",
  audience: [
    "First-timers who want a proper introduction",
    "Travelers curious about freediving in Siquijor",
    "Beginners who prefer a calm, safety-first approach",
  ],
  inclusions: [
    "Introductory theory session",
    "Breathing and basic relaxation techniques",
    "Open-water practice",
    "Photos and videos when conditions allow",
  ],
  exclusions: [
    "Environmental or cottage fees",
    "Site-to-site transport",
  ],
  notes: [
    "Session structure depends on sea conditions and student pace.",
    "Message first to confirm schedule and inclusions.",
  ],
  gallery: [
    "/images/intro/1.JPG",
    "/images/intro/2.jpg",
    "/images/intro/3.jpeg",
  ],
};

export const fundiveDetails: FundiveDetails = {
  title: "Siquijor Fundive with Guide",
  price: "₱1,500 per person",
  summary:
    "A guided fundive session for divers with prior intro-level experience who want local support and condition-based site planning.",
  schedule: "8:00 AM–12:00 NN or 1:00 PM–5:00 PM",
  minRequirement: "Intro to Freediving or equivalent experience required",
  inclusions: [
    "Guided session with certified instructor",
    "Up to two dive sites",
    "Around one hour per site",
    "Photos and videos",
  ],
  exclusions: [
    "Environmental fees",
    "Gear rental",
    "Site-to-site transport",
  ],
  transportAddOns: [
    "Solo motorbike transport: +₱700",
    "Group easyride/cab transport: +₱2,500",
  ],
  notes: [
    "Each session is planned based on actual conditions on the day.",
    "Typical session windows are 8:00 AM–12:00 NN or 1:00 PM–5:00 PM.",
    "Site choice depends on current, visibility, monsoon, tide, and traffic.",
  ],
  gallery: [
    "/images/fundive/1.JPG",
    "/images/fundive/2.jpg",
    "/images/fundive/3.jpg",
    "/images/fundive/4.jpg",
    "/images/fundive/5.jpg",
    "/images/fundive/6.jpg",
    "/images/fundive/7.jpg",
    "/images/fundive/8.jpg",
    "/images/fundive/9.jpg",
    "/images/fundive/10.jpg",
    "/images/fundive/11.JPG",
    "/images/fundive/12.jpg",
    "/images/fundive/13.jpg",
    "/images/fundive/14.jpg",
  ],
};

export const lineTrainingDetails: LineTrainingDetails = {
  title: "Line Training",
  price: "₱1,500–₱2,500",
  summary:
    "A coached line-training session for divers working on comfort, technique, efficiency, and depth progression.",
  schedule: "9:00 AM – 12:00 NN | Weekdays and weekends - prior arrangement",
  minRequirement: "Previous freediving experience required",
  rates: [
    "Solo or private coaching: contact for current rate",
    "Small group setup: contact for current rate",
  ],
  inclusions: [
    "Pre-session briefing and dive plan",
    "Condition-based site selection",
    "Supervised line dives",
    "Technique feedback after rounds",
  ],
  exclusions: [
    "Environmental or cottage fees",
    "Gear rental",
    "Transport",
  ],
  notes: [
    "Best for divers with previous freediving experience.",
    "Final setup depends on conditions and diver level.",
  ],
  gallery: [
    "/images/linetraining/1.jpg",
    "/images/linetraining/2.JPG",
    "/images/linetraining/3.jpg",
    "/images/linetraining/4.jpg",
    "/images/linetraining/5.jpg",
    "/images/linetraining/6.jpg",
  ],
};

export const team: TeamMember[] = [
  {
    name: "Jether Serino",
    role: "Instructor/Athlete",
    certification: "Molchanovs W3 Instructor",
    bio: "Athlete freediver, professional freediving instructor, underwater photographer, and an accomplished visual artist with artworks exhibited in cultural institutions and museums",
    image: "/images/team/jether.jpg",
  },
  {
    name: "Kalvin Klein Matas",
    role: "Master Freediver/Assistant Instructor",
    certification: "Molchanovs W3",
    bio: "Underwater videographer, plane mechanic, content creator, dominant pickle ball player, chill surf skater, ultimate frisbee player, etc. (you name it)",
    image: "/images/team/kc.jpg",
  },
  {
    name: "Glee Joshua Bunado",
    role: "Master Freediver/Assistant Instructor",
    certification: "Molchanovs W3",
    bio: "Freediving enthusiast, tech professional specializing in the Odoo ERP platform, and a chemical engineer",
    image: "/images/team/buds.jpg",
  },
  {
    name: "Bernard Serino",
    role: "Co-founder/Master Freediver",
    certification: "Molchanovs W3",
    bio: "Short bio",
    image: "/images/team/bernard.jpg",
  },
  {
    name: "Charisse Nicole Espinosa",
    role: "Co-founder/Administrative Officer/Accountant",
    certification: " ",
    bio: "Has an immense dedication in freediving activities and related field, works mainly accounting and financial sectors",
    image: "/images/team/charisse.jpg",
  },
  {
    name: "Rexon Bongat",
    role: "Fundive Guide",
    certification: "Molchanovs W2",
    bio: "Began freediving in 2015 after joining as a guide at the sanctuary — about 10 years of diving experience. Serves as Swake's videographer, and his background as a fisherman gives him sharp instincts for reading currents and depth underwater. Dives with safety at the front of his mind, for himself and for guests.",
    image: "/images/team/rexon.jpg",
  },
  {
    name: "Jayson Abas",
    role: "Fundive Guide",
    certification: "Molchanovs W2",
    bio: "Captures and edits freediving media for locals and tourists exploring popular diving locations around Siquijor Island, also a dedicated tour guide in the island.",
    image: "/images/team/jayson.jpg",
  },
  {
    name: "John Lloyd Payla",
    role: "Fundive Guide",
    certification: "Molchanovs W2",
    bio: "Short bio",
    image: "/images/team/johnL.jpg",
  },
  {
    name: "Soyinx Lazarte",
    role: "Fundive Guide",
    certification: "Molchanovs W1",
    bio: "Prominent local freediver in Siquijor, active competitor in the local pickleball scene, and an dedicated technician for agriculture projects in Siquijor",
    image: "/images/team/soysoy.jpg",
  },
  {
    name: "Reyida Keith Ocao",
    role: "Administrative Officer/Accountant",
    certification: "Molchanovs W1",
    bio: "Started freediving 2 years ago after encouragement from KC — current PB 23.9m. Handles Swake's finance and dive/gear records, invoicing, and client payments; and enjoys pickleball and nature trips.  Patient with beginners, calm and focused underwater, always chasing a bit more depth.  ",
    image: "/images/team/reyida.jpg",
  },
  {
    name: "Sul Dahunan",
    role: "Snorkeling guide",
    certification: "Candidate Molchanovs W1",
    bio: "Started freediving as a tour guide and has been diving for 3 years since. Now works as a DA-NIR staff and part-time guide and fundive videographer, capturing underwater footage and editing it himself. Playfully explore angles for a great shot.",
    image: "/images/team/sul.jpg",
  },
];
