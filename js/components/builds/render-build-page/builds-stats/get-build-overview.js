import { getBuildStats } from "/js/components/home/get-build-stats.js";
import { buildsProjectsData } from "/data/builds/index.js";

export function getBuildOverview() {
  const publicBuilds = buildsProjectsData.filter(
    (build) => build.visibility.toLowerCase() === "public",
  );

  return {
    total: publicBuilds.length,

    stats: getBuildStats(),
  };
}
