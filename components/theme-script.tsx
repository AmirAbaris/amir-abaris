/**
 * Applies the stored (or system) theme before first paint.
 *
 * This runs blocking in <head>, so the correct class is on <html> before the
 * browser paints — no flash of the wrong theme. Kept dependency-free on
 * purpose; the whole contract is one class name and one localStorage key.
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var dark = stored ? stored === "dark" : system;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
