// ELEMENTOS DEL DOM
const envelopeWrapper = document.getElementById("envelopeWrapper");
const letterCard = document.getElementById("letterCard");
const btnOpen = document.getElementById("btnOpen");

// ABRIR CARTA Y LANZAR CONFETI PRINCIPAL
btnOpen.addEventListener("click", () => {
  envelopeWrapper.classList.add("hidden");
  letterCard.classList.remove("hidden");

  // Ráfaga de confeti
  confetti({
    particleCount: 130,
    spread: 80,
    origin: { y: 0.6 },
  });
});

// LÓGICA PARA CANJEAR CUPONES CON CONFETI INDIVIDUAL
function claimCoupon(button, couponTitle) {
  if (!button.classList.contains("claimed")) {
    button.classList.add("claimed");
    button.textContent = `✅ ¡Canjeado!: ${couponTitle}`;

    // Confeti más pequeño y focalizado
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
    });
  }
}
