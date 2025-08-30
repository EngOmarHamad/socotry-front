(function ($) {

  var initCounters = () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target"); // Get target number
      let speed = target / 100; // Adjust speed

      let updateCounter = () => {
        let currentValue = +counter.getAttribute("data-current") || 0; // Track current value
        if (currentValue < target) {
          let newValue = Math.min(currentValue + speed, target); // Ensure it doesn't exceed target
          counter.setAttribute("data-current", newValue); // Store current value
          counter.innerText = formatNumber(newValue);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = formatNumber(target); // Ensure final format
        }
      };
      updateCounter();
    });
  };

  // Function to format numbers as "K" or "M"
  function formatNumber(value) {
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(".0", "") + "M"; // 25000000 → 25M
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(".0", "") + "K";
    }
    return Math.floor(value);
  }
  $(document).ready(function () { initCounters(); });
})(jQuery);