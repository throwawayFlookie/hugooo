window.addEventListener('load', () => {
  confetti({
    particleCount: 350,
    spread: 1000,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 650,
      origin: { y: 0.4 }
    });
  }, 1000);
});