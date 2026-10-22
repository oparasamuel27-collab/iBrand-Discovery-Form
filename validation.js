const form = document.querySelector("#prospect-form");
const phoneInput = form.querySelector("#phone");
const emailInput = form.querySelector("#email");
const feedback = form.querySelector("#form-feedback");

function validateContactDetails() {
  const hasPhone = phoneInput.value.trim().length > 0;
  const hasEmail = emailInput.value.trim().length > 0;
  const phoneDigits = phoneInput.value.replace(/\D/g, "");

  phoneInput.setCustomValidity("");
  emailInput.setCustomValidity("");

  if (!hasPhone && !hasEmail) {
    const message = "Enter a phone number or email address.";
    phoneInput.setCustomValidity(message);
    emailInput.setCustomValidity(message);
  } else if (hasPhone && phoneDigits.length < 7) {
    phoneInput.setCustomValidity("Enter a valid phone number with at least 7 digits.");
  }
}

form.addEventListener("input", () => {
  validateContactDetails();
  feedback.textContent = "";
  feedback.removeAttribute("data-state");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateContactDetails();
  form.classList.add("is-validated");

  if (!form.reportValidity()) {
    feedback.textContent = "Please correct the highlighted fields.";
    feedback.dataset.state = "error";
    return;
  }

  feedback.textContent = "Validation passed. This form is not connected to a submission service.";
  feedback.dataset.state = "success";
});