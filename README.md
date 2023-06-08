```
npm i expo-next-router
```

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
