import { type SchemaTypeDefinition } from "sanity";

import siteConfig from "./siteConfig";
import hero from "./hero";
import about from "./about";
import skill from "./skill";
import project from "./project";
import experience from "./experience";
import blog from "./blog";
import blockContent from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteConfig,
    hero,
    about,
    skill,
    project,
    experience,
    blog,
    blockContent,
  ],
};
