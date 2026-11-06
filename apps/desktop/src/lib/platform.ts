export type Platform = "macos" | "windows" | "linux";

/** Detect the desktop platform from the webview user agent. */
export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "linux";
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad|iPod/i.test(ua)) return "macos";
  if (/Win/i.test(ua)) return "windows";
  return "linux";
}

/** Display label for a Cmd/Ctrl shortcut: `⌘P` on macOS, `Ctrl+P` elsewhere. */
export function modShortcutLabel(key: string, platform: Platform = detectPlatform()): string {
  return platform === "macos" ? `⌘${key}` : `Ctrl+${key}`;
}
