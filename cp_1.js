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

function showTip(text, e) {
  tooltip.textContent = text;
  tooltip.style.left = e.clientX + 10 + "px";
  tooltip.style.top = e.clientY + 10 + "px";
  tooltip.style.opacity = "1";
}

function moveTip(e) {
  tooltip.style.left = e.clientX + 10 + "px";
  tooltip.style.top = e.clientY + 10 + "px";
}

function hideTip() {
  tooltip.style.opacity = "0";
}

nameInput.addEventListener("mouseover", (e) => showTip("Enter your name", e));
nameInput.addEventListener("mousemove", moveTip);
nameInput.addEventListener("mouseout", hideTip);

emailInput.addEventListener("mouseover", (e) => showTip("Enter your email", e));
emailInput.addEventListener("mousemove", moveTip);
emailInput.addEventListener("mouseout", hideTip);

commentsInput.addEventListener("mouseover", (e) => showTip("Write your comments", e));
commentsInput.addEventListener("mousemove", moveTip);
commentsInput.addEventListener("mouseout", hideTip);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const commentsVal = commentsInput.value.trim();

  if (!nameVal || !emailVal || !commentsVal) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const item = document.createElement("div");
  item.innerHTML = `<p><b>${nameVal}</b> (${emailVal})</p><p>${commentsVal}</p><hr>`;
  feedbackDisplay.appendChild(item);

  form.reset();
  charCount.textContent = "0 characters";
});