import { basename, extname } from "node:path";

import type { RequireContext } from "expo-router/src/types";

import { revert, convert, conversions } from "./convert";

export function convertContext(context: RequireContext) {
  function requireContext(this: RequireContext, id: string) {
    return context(revert(id));
  }

  requireContext.keys = () => {
    return context.keys().reduce((acc, key) => {
      const base = basename(key, extname(key));

      if (conversions.keys.includes(base)) {
        acc.push(convert(key));
      }

      return acc;
    }, [] as string[]);
  };

  return requireContext;
}

export default convertContext;
