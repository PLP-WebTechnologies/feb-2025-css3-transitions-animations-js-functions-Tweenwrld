document.addEventListener("DOMContentLoaded", function() {
    // DOM Elements for Animation
    const box = document.getElementById("box");
    const animateButton = document.getElementById("animateButton");
    const resetButton = document.getElementById("resetButton");
    const animationSelect = document.getElementById("animationSelect");
    
    // DOM Elements for Preferences
    const savePrefButton = document.getElementById("savePreference");
    const bgColorInput = document.getElementById("bgColorInput");
    const resetPrefButton = document.getElementById("resetPreferences");
    
    // Trigger Animation Based on User Selection
    function triggerAnimation() {
      // Remove any existing animation classes from the box
      box.classList.remove("spin-scale", "bounce", "fade");
      void box.offsetWidth; // Force reflow to allow re-triggering same animation
  
      // Apply the selected animation
      const selectedAnimation = animationSelect.value;
      box.classList.add(selectedAnimation);
    }
    
    // Reset Animation: Remove all applied animation classes
    function resetAnimation() {
      box.classList.remove("spin-scale", "bounce", "fade");
    }
    
    // Attach Event Listeners for Animation Section
    animateButton.addEventListener("click", triggerAnimation);
    resetButton.addEventListener("click", resetAnimation);
    
    // Save the Box Background Color Preference to localStorage
    function saveColorPreference() {
      const color = bgColorInput.value;
      localStorage.setItem("boxBgColor", color);
      box.style.backgroundColor = color;
    }
    
    // Load the Saved Background Color Preference from localStorage
    function loadColorPreference() {
      const storedColor = localStorage.getItem("boxBgColor");
      if (storedColor) {
        box.style.backgroundColor = storedColor;
        bgColorInput.value = storedColor;
      }
    }
    
    // Reset All Preferences
    function resetPreferences() {
      localStorage.removeItem("boxBgColor");
      box.style.backgroundColor = "#4CAF50";
      bgColorInput.value = "#4CAF50";
    }
    
    // Attach Event Listeners for Preference Section
    savePrefButton.addEventListener("click", saveColorPreference);
    resetPrefButton.addEventListener("click", resetPreferences);
    
    // Load any saved preferences on page load
    loadColorPreference();
  });