export const buildsProjectsData = [
  {
    id: "voicekeep",
    name: "VoiceKeep",
    tagline: "Realtime meeting memory system.",
    status: "Live",
    visibility: "public",
    priority: 1,
    featured: false,
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
        label: "Install via Chrome Store",
        href: "https://chromewebstore.google.com/detail/voicekeep-beta-capture-an/dpoolddiohjpckolfhkjkoohpfadmjan",
        external: true,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: {
          type: "image",
          value:
            "/assets/branding/external-brands/Google_Chrome_Web_Store_icon.svg",
        },

        order: 1,
      },
      {
        id: "privacy",
        label: "View Privacy Policy",
        href: "/builds/voicekeep/privacy",
        external: false,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: {
          type: "svg",
          value: "moveUpRightArrow",
        },
        order: 1,
      },
    ],
    seo: {
      title: "VoiceKeep",

      description: "Realtime meeting memory system.",

      keywords: ["meeting", "transcript", "memory", "voice"],
    },
    version: "0.1.1 [Beta]",
    stack: ["html", "javascript", "css", "Chrome-Extension-Api"],
    launchedDate: "2026-06-14",
    lastUpdatedDate: "2026-07-19",
    thumbnail: "/assets/builds/images/voicekeep/logo.png",

    logo: "/assets/builds/images/voicekeep/logo.png",
    pages: {
      overview: "/builds/voicekeep/",

      privacy: "/builds/voicekeep/privacy/",
    },
  },
  {
    id: "resonance",

    name: "Resonance",

    status: "Experimental",

    featured: false,

    highlights: ["curently under develepment"],

    visibility: "public",

    tagline: "Music-driven web experiences.",

    description:
      "An experiment exploring how websites can synchronize motion, storytelling and interaction with music in real time.",

    pages: {
      overview: "/builds/resonance/demo",
    },
    launchedDate: "2026-06-20",

    lastUpdatedDate: "2026-06-28",
    version: "0.1.2 exp",
  },
  {
    id: "tracekeep",
    name: "TraceKeep - who unfollowed me?",
    tagline: "Track Instagram changes over time.",
    status: "Live",
    visibility: "public",
    priority: 2,
    featured: true,
    category: ["social-media", "browser-extension"],
    type: "extension",
    highlights: [
      "Get to know who unfollowed you",
      "Keep local change history",
      "Controlled synchronization",
    ],
    description:
      "Track Instagram profile, follower, and following changes over time with local history and controlled synchronization.",
    resourceLinks: [
      {
        id: "install",
        label: "Install via Chrome Store",
        href: "",
        external: true,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: {
          type: "image",
          value:
            "/assets/branding/external-brands/Google_Chrome_Web_Store_icon.svg",
        },
        order: 1,
      },
      {
        id: "privacy",
        label: "View Privacy Policy",
        href: "/builds/tracekeep/privacy/",
        external: false,
        mobileOnly: false,
        desktopOnly: false,
        visible: true,
        icon: {
          type: "svg",
          value: "moveUpRightArrow",
        },
        order: 2,
      },
    ],
    seo: {
      title: "TraceKeep",
      description: "Track Instagram changes over time.",
      keywords: [
        "instagram",
        "followers",
        "following",
        "profile changes",
        "tracking",
        "history",
      ],
    },
    version: "0.1.0 [Beta]",
    stack: ["javascript", "react", "css", "Chrome-Extension-Api"],
    launchedDate: "2026-08-17",
    lastUpdatedDate: "2026-08-17",
    thumbnail: "/assets/builds/images/tracekeep/logo-new.png",
    logo: "/assets/builds/images/tracekeep/logo-new.png",
    pages: {
      overview: "/builds/tracekeep/",
      privacy: "/builds/tracekeep/privacy/",
    },
  },
];
