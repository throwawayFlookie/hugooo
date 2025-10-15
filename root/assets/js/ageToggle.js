window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-btn');
  let showingSix = true;

  function toggleNumbers() {
    // Recursive function to walk through the DOM and update text nodes
    function walk(node) {
      node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          let text = child.textContent;

          if (showingSix) {
            // Replace 6 → 16 safely
            text = text.replace(/\b16\b/g, "__TEMP16__");
            text = text.replace(/\b6\b/g, "16");
            text = text.replace(/__TEMP16__/g, "6");
          } else {
            // Replace 16 → 6 safely
            text = text.replace(/\b6\b/g, "__TEMP6__");
            text = text.replace(/\b16\b/g, "6");
            text = text.replace(/__TEMP6__/g, "16");
          }

          child.textContent = text;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          // Don’t mess with <script> or <style> contents
          if (!['SCRIPT', 'STYLE'].includes(child.tagName)) {
            walk(child);
          }
        }
      });
    }

    walk(document.body); // start from the whole body
    button.textContent = showingSix ? "16 ↔ 6" : "6 ↔ 16";
    showingSix = !showingSix;
  }

  button.addEventListener('click', toggleNumbers);
});
