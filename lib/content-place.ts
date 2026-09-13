/** Persist the last content heading so Continue and the sidebar stay in sync. */

export const TOPIC_PIN_EVENT = "ih-pin-topic";

export function topicStorageKey(slug: string, hash: string) {
  return `ih-topic:${slug}:${hash}`;
}

export function hashStorageKey(slug: string, topicId: string) {
  return `ih-hash:${slug}:${topicId}`;
}

export function rememberTopicPlace(slug: string, hash: string, topicId: string) {
  const cleanHash = hash.replace(/^#/, "").trim();
  const cleanTopic = topicId.trim();
  if (!cleanHash || !cleanTopic) return;
  try {
    sessionStorage.setItem(topicStorageKey(slug, cleanHash), cleanTopic);
    sessionStorage.setItem(hashStorageKey(slug, cleanTopic), cleanHash);
  } catch {
    // Private-mode storage refusals only lose the reverse lookup, not progress.
  }
}

export function topicIdForHash(slug: string, hash: string) {
  const cleanHash = hash.replace(/^#/, "").trim();
  if (!cleanHash) return undefined;
  try {
    return sessionStorage.getItem(topicStorageKey(slug, cleanHash)) || undefined;
  } catch {
    return undefined;
  }
}

export function hashForTopicId(slug: string, topicId: string) {
  const cleanTopic = topicId.trim();
  if (!cleanTopic) return undefined;
  try {
    return sessionStorage.getItem(hashStorageKey(slug, cleanTopic)) || undefined;
  } catch {
    return undefined;
  }
}

/** Hold scroll-spy still while a click or hash resume is moving the page. */
export function pinContentTopic(hash: string, ms = 1600) {
  if (typeof window === "undefined") return;
  const cleanHash = hash.replace(/^#/, "").trim();
  window.dispatchEvent(
    new CustomEvent(TOPIC_PIN_EVENT, {
      detail: { hash: cleanHash, until: Date.now() + ms },
    }),
  );
}
