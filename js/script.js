console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  // ===============================
  // GREETING FEATURE
  // ===============================
  const greetingSpan = document.getElementById("user-greeting");
  const nameBtn = document.getElementById("nameBtn");
  const nameInput = document.getElementById("nameInput");

  if (greetingSpan && nameBtn && nameInput) {
    nameBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      greetingSpan.textContent = name || "Friend";
      showToast(`Hi ${name || "Friend"}! 👋`, "green");
    });
  } else {
    console.warn("Greeting elements missing. Found:", {
      greetingSpan,
      nameBtn,
      nameInput,
    });
  }

  // ===============================
  // FORM VALIDATION + OUTPUT
  // ===============================
  const form = document.getElementById("messageForm");
  const outBlock = document.getElementById("formOutput");
  const outName = document.getElementById("outName");
  const outEmail = document.getElementById("outEmail");
  const outMsg = document.getElementById("outMsg");

  if (!form) {
    console.error("Form #messageForm not found!");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit event triggered");

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("messageText").value.trim();

    if (!username || !email || !message) {
      showToast("⚠️ Please fill out all fields before submitting!", "red");
      return;
    }

    // Fill submitted values into the output
    outName.textContent = username;
    outEmail.textContent = email;
    outMsg.textContent = message;

    // Show the form output block
    outBlock.classList.remove("hidden");

    // Show success notification
    showToast("✅ Message sent successfully!", "green");

    // Reset form
    form.reset();
  });

  // ===============================
  // TOAST NOTIFICATION FUNCTION
  // ===============================
  function showToast(message, color = "green") {
    const toast = document.createElement("div");
    toast.textContent = message;

    // Tailwind styles for the toast
    toast.className = `
      fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg 
      bg-${color}-600 text-white text-sm font-medium z-50 
      opacity-0 transform translate-y-2 transition-all duration-300
    `;

    document.body.appendChild(toast);

    // Make the toast visible
    setTimeout(() => {
      toast.classList.remove("opacity-0", "translate-y-2");
      toast.classList.add("opacity-100", "translate-y-0");
    }, 100);

    // Remove the toast after 2.5 seconds
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});
