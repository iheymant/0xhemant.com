import { buildsProjectsData } from "/data/builds/index.js";

export function getBuildStats() {
  return buildsProjectsData
    .filter((build) => build.visibility.toLowerCase() === "public")
    .reduce(
      (stats, build) => {
        const status = build.status?.toLowerCase();

        if (!status) return stats;

        stats[status] = (stats[status] || 0) + 1;

        return stats;
      },

      {},
    );
}
