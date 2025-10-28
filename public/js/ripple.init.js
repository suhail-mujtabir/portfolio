document.addEventListener('DOMContentLoaded', function() {
  if (typeof window.$ === 'undefined' && typeof window.jQuery === 'undefined') {
    console.warn('jQuery is not loaded, ripple effect not initialized.');
    return;
  }

  const $ = window.$ || window.jQuery;

  if (typeof $.fn === 'undefined' || typeof $.fn.ripples !== 'function') {
    console.warn('jQuery ripples plugin is not available. Ensure jquery.ripples is loaded.');
    return;
  }

  try {
    $('#home').ripples({ resolution: 512, dropRadius: 15, perturbance: 0.01 });
  } catch (err) {
    console.error('Error initializing ripples:', err);
  }
});