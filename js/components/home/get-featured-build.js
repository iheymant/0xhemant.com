import { buildsProjectsData } from "/data/builds/index.js";

export function getFeaturedBuild() {
  return buildsProjectsData.find(
    (build) => build.featured && build.visibility === "public",
  );
}
