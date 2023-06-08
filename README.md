Next.js-like file-based routing for Expo Router

# Installation

```
npm i expo-next-router
```

Change `main` in `package.json` to

```
{
- "main": "expo-router/entry"
+ "main": "index.js"
}
```

Or you can remove the file entirely as `index.js` is the default.

Adde the following code to `index.js`

```
// index.js

import { createRouter } from "expo-next-router";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

export function App() {
  return <ExpoRoot context={createRouter(require.context("./app"))} />;
}

registerRootComponent(App);
```
