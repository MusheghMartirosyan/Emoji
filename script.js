const content = document.querySelector(".content");
const emoji = document.querySelector(".emoji");
const leftEye = document.querySelector("#left-eye");
const rightEye = document.querySelector("#right-eye");

content.addEventListener("mousemove", (e) => {
  const emojiRect = emoji.getBoundingClientRect();
  const emojiCenterX = emojiRect.left + emojiRect.width / 2;
  const emojiCenterY = emojiRect.top + emojiRect.height / 2;

  const angle = Math.atan2(e.clientY - emojiCenterY, e.clientX - emojiCenterX);

  const distance = Math.min(15, Math.hypot(e.clientY - emojiCenterY, e.clientX - emojiCenterX));

  const pupilX = Math.cos(angle) * distance;
  const pupilY = Math.sin(angle) * distance;

  leftEye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  rightEye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});

emoji.addEventListener("mouseleave", () => {
  leftEye.style.transform = "translate(0, 0)";
  rightEye.style.transform = "translate(0, 0)";
});