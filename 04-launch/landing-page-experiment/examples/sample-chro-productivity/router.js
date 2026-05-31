// router.js - cookie-based variant assignment with direct-link override
// Drop this into your landing page index.html via <script src="router.js"></script>
// Variants must be at /variant-a.html, /variant-b.html, /variant-c.html

(function () {
  const COOKIE = 'lpx_variant';
  const TTL_DAYS = 30;
  const VARIANTS = ['a', 'b', 'c'];

  function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, c) => {
      const [k, v] = c.split('=');
      return k === name ? decodeURIComponent(v) : acc;
    }, '');
  }

  function setCookie(name, val, days) {
    const exp = new Date(Date.now() + days * 86400 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(val)}; expires=${exp}; path=/; SameSite=Lax`;
  }

  function pickRandom() {
    return VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  }

  // Direct-link override: /variant-a, /variant-b, /variant-c
  const path = location.pathname.replace(/\/$/, '');
  const directMatch = path.match(/\/variant-([abc])$/);
  if (directMatch) {
    const v = directMatch[1];
    setCookie(COOKIE, v, TTL_DAYS);
    location.replace(`/variant-${v}.html?v=${v}&src=direct`);
    return;
  }

  // Root path: assign or read cookie
  if (path === '' || path === '/index.html') {
    let v = getCookie(COOKIE);
    if (!VARIANTS.includes(v)) {
      v = pickRandom();
      setCookie(COOKIE, v, TTL_DAYS);
    }
    location.replace(`/variant-${v}.html?v=${v}`);
  }
})();
