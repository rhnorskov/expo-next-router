export class Dictionary {
  #map: Map<string, string>;

  constructor(entries: Record<string, string>) {
    this.#map = new Map(Object.entries(entries));
  }

  get keys() {
    return [...this.#map.keys()];
  }

  get values() {
    return [...this.#map.values()];
  }

  getByKey(key: string) {
    return this.#map.get(key);
  }

  getByValue(value: string) {
    return [...this.#map.entries()].find(([, v]) => v === value)?.[0];
  }
}
