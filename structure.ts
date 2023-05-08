// ./src/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import { SanityDocument } from "sanity";

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: any) {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}`
    : `${window.location.host}`;
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            // url: (doc: SanityDocument) => getPreviewUrl(doc),
            url: process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000",
            defaultSize: `desktop`, // default `desktop` 'mobile'

            // Optional: Add a reload button, or reload on new document revisions
            reload: {
              button: true, // default `undefined`
              // revision: true, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
            },
            attributes: {},
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
