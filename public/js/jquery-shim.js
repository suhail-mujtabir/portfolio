// Lightweight shim for local jQuery path.
// The project loads jQuery from the CDN in `layout.tsx`. This shim ensures
// any legacy requests to `/js/jquery-3.6.1.min.js` don't execute corrupted code.

if (typeof window !== 'undefined') {
  // If CDN jQuery is already loaded, expose $ alias.
  if (window.jQuery && !window.$) {
    window.$ = window.jQuery;
  }

  // When CDN jQuery loads later, ensure $ points to it.
  if (!window.jQuery) {
    var onJq = function() {
      if (window.jQuery && !window.$) {
        window.$ = window.jQuery;
      }
    };
    window.addEventListener && window.addEventListener('load', onJq);
  }
}
