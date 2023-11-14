class LRUCache {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.maxLength) {
      const keys = Array.from(this.cache.keys());
      this.cache.delete(keys[0]);
    }
    this.cache.set(key, value);
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.put(key, value);
    return value;
  }
}

const obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1)); // 输出 1
obj.put(3, 3); // 删除键 2
console.log(obj.get(2)); // 输出 -1，因为键 2 不再存在于缓存中
