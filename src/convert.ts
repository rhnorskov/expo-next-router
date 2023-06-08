import { extname, basename, dirname } from "path";

import { Dictionary } from "./utils/dictionary";

export const conversions = new Dictionary({
  page: "index",
  layout: "_layout",
});

export function convert(key: string) {
  const ext = extname(key);
  const dir = dirname(key);
  const base = basename(key, ext);

  if (conversions.keys.includes(base)) {
    return `${dir}/${conversions.getByKey(base)}${ext}`;
  }

  return key;
}

export function revert(key: string) {
  const ext = extname(key);
  const dir = dirname(key);
  const base = basename(key, ext);

  if (conversions.values.includes(base)) {
    return `${dir}/${conversions.getByValue(base)}${ext}`;
  }

  return key;
}
