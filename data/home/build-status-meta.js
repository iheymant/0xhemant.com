export const buildStatusMeta = {
  public: {
    label: "Public Builds",
    description: "Across all stages",
    color: "public",
  },

  live: {
    label: "Live",
    description: "Shipped and live",
    color: "live",
    redirectUrl: "/builds/live",
  },

  experimental: {
    label: "Experimental",
    description: "In progress",
    color: "experimental",
    redirectUrl: '/builds/experimental'
  },

  conceptual: {
    label: "Conceptual",
    description: "Future ideas",
    color: "conceptual",
    redirectUrl: '/builds/conceptual'
  },
};
