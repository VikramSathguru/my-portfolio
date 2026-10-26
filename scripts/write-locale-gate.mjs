import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const routingSrc = readFileSync(path.join(root, "src", "i18n", "routing.ts"), "utf8");
const countrySrc = readFileSync(path.join(root, "src", "i18n", "locale-from-country.ts"), "utf8");

const locales = [...routingSrc.match(/locales:\s*\[([^\]]+)\]/)[1].matchAll(/"([a-z]{2})"/g)].map((match) => match[1]);
const defaultLocale = routingSrc.match(/defaultLocale:\s*"([a-z]{2})"/)[1];
const cookieName = routingSrc.match(/LOCALE_COOKIE = "([^"]+)"/)[1];
const labels = Object.fromEntries(
  [...routingSrc.match(/localeLabels[\s\S]*?\{([\s\S]*?)\}/)[1].matchAll(/([a-z]{2}): "([^"]+)"/g)].map((match) => [
    match[1],
    match[2],
  ]),
);
const countries = Object.fromEntries(
  [...countrySrc.matchAll(/([A-Z]{2}): "([a-z]{2})"/g)].map((match) => [match[1], match[2]]),
);

const links = locales
  .map(
    (locale) =>
      `<a href="/${locale}/">${labels[locale] ?? locale}</a>`,
  )
  .join("");

const html = `<!DOCTYPE html>
<html lang="${defaultLocale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vikram Sathguru</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f6f1ff; color: #1c1433; font: 16px/1.5 "Segoe UI", sans-serif; }
    main { text-align: center; padding: 2rem; }
    p { margin: 0 0 1rem; }
    nav { display: flex; flex-wrap: wrap; gap: 0.75rem 1rem; justify-content: center; }
    a { color: #5b3df0; font-weight: 650; }
  </style>
</head>
<body>
  <main>
    <p>Opening the portfolio…</p>
    <nav>${links}</nav>
  </main>
  <script>
    (function () {
      var locales = ${JSON.stringify(locales)};
      var countries = ${JSON.stringify(countries)};
      var fallback = ${JSON.stringify(defaultLocale)};
      var cookieName = ${JSON.stringify(cookieName)};
      function readCookie() {
        var match = document.cookie.match(new RegExp("(?:^|; )" + cookieName + "=([^;]+)"));
        if (!match) return "";
        try { return decodeURIComponent(match[1]); } catch (error) { return ""; }
      }
      function go(locale) {
        var next = locales.indexOf(locale) === -1 ? fallback : locale;
        var secure = location.protocol === "https:" ? "; Secure" : "";
        document.cookie = cookieName + "=" + next + "; Path=/; Max-Age=31536000; SameSite=Lax" + secure;
        location.replace("/" + next + "/");
      }
      var saved = readCookie();
      if (locales.indexOf(saved) !== -1) {
        location.replace("/" + saved + "/");
        return;
      }
      var controller = new AbortController();
      var timer = setTimeout(function () { controller.abort(); }, 2000);
      fetch("https://ipwho.is/?fields=success,country_code", { signal: controller.signal })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          clearTimeout(timer);
          var code = data && data.success && data.country_code ? String(data.country_code).toUpperCase() : "";
          go(countries[code] || fallback);
        })
        .catch(function () {
          clearTimeout(timer);
          go(fallback);
        });
    })();
  </script>
</body>
</html>
`;

writeFileSync(path.join(root, "out", "index.html"), html, "utf8");
