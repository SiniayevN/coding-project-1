const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("charCount");

// update count on input
commentsInput.addEventListener("input", () => {
  const length = commentsInput.value.length;
  charCount.textContent = `${length} characters`;
});