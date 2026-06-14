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
    highlights: ["Never lose meeting context", "Instant downloadable transcripts", "Privacy first"],
    description:
      "Capture and save live meeting captions from Online Meetings with speaker tracking and conversational flow.",
    links: {
      install: "https://chromewebstore.google.com/detail/voicekeep-beta-capture-an/dpoolddiohjpckolfhkjkoohpfadmjan",
      privacy: "/builds/voicekeep/privacy",
    },
    seo: {
      title: "VoiceKeep",

      description: "Realtime meeting memory system.",

      keywords: ["meeting", "transcript", "memory", "voice"],
    },
    version: "0.1.0 [Beta]",
    stack: ["html", "javascript", "css", "Chrome-Extension-Api"],
    launchedDate: "2026-05-25",
    lastUpdatedDate: "2026-05-30",
    thumbnail: "/assets/builds/images/voicekeep/logo.png",

    logo: "/assets/builds/images/voicekeep/logo.png",
    pages: {
      overview: "/builds/voicekeep/",

      privacy: "/builds/voicekeep/privacy/",
    },
  },
];
