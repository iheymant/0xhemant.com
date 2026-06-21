export const buildsProjectsData = [
  {
    id: "voicekeep",
    name: "VoiceKeep",
    tagline: "Realtime meeting memory system.",
    status: "Live",
    visibility: "public",
    priority: 1,
    featured: true,
    category: ["productivity", "browser-extension"],
    type: "extension",
    highlights: [
      "Never lose meeting context",
      "Instant downloadable transcripts",
      "Privacy first",
    ],
    description:
      "Capture and save live meeting captions from Online Meetings with speaker tracking and conversational flow.",
    resourceLinks: [
      {
        id: "install",
        label: "Install",
        href: "https://chromewebstore.google.com/detail/voicekeep-beta-capture-an/dpoolddiohjpckolfhkjkoohpfadmjan",
        external: true,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: "download",
        order: 1,
      },
      {
        id: "privacy",
        label: "Privacy",
        href: "/builds/voicekeep/privacy",
        external: false,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: "download",
        order: 1,
      },
    ],
    seo: {
      title: "VoiceKeep",

      description: "Realtime meeting memory system.",

      keywords: ["meeting", "transcript", "memory", "voice"],
    },
    version: "0.1.0 [Beta]",
    stack: ["html", "javascript", "css", "Chrome-Extension-Api"],
    launchedDate: "2026-06-14",
    lastUpdatedDate: "2026-06-14",
    thumbnail: "/assets/builds/images/voicekeep/logo.png",

    logo: "/assets/builds/images/voicekeep/logo.png",
    pages: {
      overview: "/builds/voicekeep/",

      privacy: "/builds/voicekeep/privacy/",
    },
  },
  {
    id: 'resonance',

    name: "Resonance",

    status: "Experimental",

    featured: false,

    visibility: "public",

    tagline: "Music-driven web experiences.",

    description:
      "An experiment exploring how websites can synchronize motion, storytelling and interaction with music in real time.",

    pages: {
      overview: "/builds/resonance/demo",
    },
    launchedDate: "2026-06-20",

    lastUpdatedDate: "2026-06-21",
    version: "0.1.1 exp",
  },
];
