const envelope = document.getElementById("openEnvelope");
const readAgainBtn = document.getElementById("readAgainBtn");
const successOverlay = document.getElementById("successOverlay");
const successClose = document.getElementById("successClose");
const envelopeHint = document.getElementById("envelopeHint");
const envelope3d = document.getElementById("envelope3d");
const cardPs = document.getElementById("cardPs");

const showNote = () => {
  successOverlay.classList.remove("success-overlay--hidden");
  successOverlay.setAttribute("aria-hidden", "false");
};

const hideNote = () => {
  successOverlay.classList.add("success-overlay--hidden");
  successOverlay.setAttribute("aria-hidden", "true");
  envelope3d?.classList.add("flipped");
  envelopeHint.textContent = "Tap to read again";
  cardPs?.remove();
};

const resetCard = () => {
  hideNote();
  envelope3d.classList.remove("flipped");
  envelopeHint.textContent = "Tap the envelope to open your message";
};

envelope?.addEventListener("click", showNote);
successClose?.addEventListener("click", hideNote);
readAgainBtn?.addEventListener("click", resetCard);

successOverlay?.addEventListener("click", (event) => {
  if (event.target === successOverlay) {
    hideNote();
  }
});
