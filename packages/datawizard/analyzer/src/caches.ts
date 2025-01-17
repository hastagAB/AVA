/**
 * 缓存数据的一些统计信息，提升性能
 */

const CACHES: WeakMap<any[], Map<string, any>> = new WeakMap();

/**
 * cache a value for target and key
 * @param target - target
 * @param key - key
 * @param value - value
 */
export function set<T>(target: any[], key: string, value: T) {
  if (!CACHES.get(target)) {
    CACHES.set(target, new Map());
  }
  CACHES.get(target)!.set(key, value);
  return value;
}

/**
 * get the cached value for target and key
 * @param target - target
 * @param key - key
 */
export function get<T>(target: any[], key: string): T | undefined {
  const cache = CACHES.get(target);
  if (!cache) return undefined;
  return cache.get(key);
}
