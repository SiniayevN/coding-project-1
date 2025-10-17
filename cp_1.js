const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const feedbackDisplay =
  document.getElementById("feedback-display") ||
  document.getElementById("feedbackList");

commentsInput.addEventListener("input", () => {
  charCount.textContent = commentsInput.value.length + " characters";
});

const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.padding = "5px 8px";
tooltip.style.background = "#333";
tooltip.style.color = "#fff";
tooltip.style.fontSize = "12px";
tooltip.style.borderRadius = "4px";
tooltip.style.pointerEvents = "none";
tooltip.style.opacity = "0";
tooltip.style.transition = "opacity 0.2s";
document.body.appendChild(tooltip);
