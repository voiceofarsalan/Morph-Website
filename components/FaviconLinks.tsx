/**
 * Dual favicon strategy:
 * - Default (no media): dark icon → Google Search & light browser chrome
 * - prefers-color-scheme: dark → transparent logo → browser tab on dark UI
 */
export default function FaviconLinks() {
  return (
    <>
      <link rel="icon" href="/favicon-dark.png" type="image/png" sizes="48x48" />
      <link
        rel="icon"
        href="/favicon-tab.png"
        type="image/png"
        sizes="48x48"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon-dark.png"
        type="image/png"
        sizes="48x48"
        media="(prefers-color-scheme: light)"
      />
    </>
  );
}
