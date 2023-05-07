import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schema } from "./schemas";
import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { defaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "test_sanity",
  title: "sanity_title",

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
  },

  studio: {
    components: { logo: Logo, navbar: StudioNavbar },
  },
});
