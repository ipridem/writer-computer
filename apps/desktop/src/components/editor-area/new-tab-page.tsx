import { useOpenCommandPalette } from "@/hooks/use-command-palette";
import { detectPlatform, modShortcutLabel } from "@/lib/platform";

// Wide tracking suits `⌘N`; spelled-out `Ctrl+N` reads as "C t r l" with it.
const SHORTCUT_TRACKING = detectPlatform() === "macos" ? "tracking-[0.2em]" : "";

function Shortcut({ children }: { children: string }) {
  return (
    <kbd className={`text-[11px] ${SHORTCUT_TRACKING} text-[var(--text-icon-muted)]`}>
      {children}
    </kbd>
  );
}

export function NewTabPage() {
  const openCommandPalette = useOpenCommandPalette();

  return (
    <div className="flex h-full items-center justify-center px-6 py-10">
      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => openCommandPalette("create-file")}
          className="flex items-center gap-1.5 text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Create new note
          <Shortcut>{modShortcutLabel("N")}</Shortcut>
        </button>

        <button
          type="button"
          onClick={() => openCommandPalette("search")}
          className="flex items-center gap-1.5 text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Search
          <Shortcut>{modShortcutLabel("O")}</Shortcut>
        </button>
      </div>
    </div>
  );
}
