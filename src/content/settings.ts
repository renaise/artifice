/* Single site settings entry — keeps the CMS shape simple while staying
   editable as a plain JS object. Could be swapped for a JSON file or
   moved into a content collection later. */

import siteJson from "./settings/site.json";

export type SiteSettings = typeof siteJson;
export const site: SiteSettings = siteJson;
