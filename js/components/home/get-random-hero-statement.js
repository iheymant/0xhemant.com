import { heroContent } from "/data/home/hero-content.js";

export function getRandomHeroStatement (){

  return heroContent.statements[Math.floor(Math.random() * heroContent.statements.length)];

}