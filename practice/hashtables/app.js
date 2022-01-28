function hash(key, length) {
  const primeNum = 37;
  const hash = Array.from(key).reduce(
    (accum, char) => accum * primeNum + char.charCodeAt(),
    0
  );
  return hash % length;
}

class HashMap {
  constructor() {
    this._items = [];
  }
  set(k, v) {
    const hashedK = hash(k, 10);
    this._items[hashedK] = v;
    return hashedK;
  }
  get(k) {
    const hashedK = hash(k, 10);
    return this._items[hashedK];
  }
}

const m = new HashMap();
m.set("apple", "red");
m.set("grape", "purple");
