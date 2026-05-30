const waitlistForm = document.getElementById("waitlistForm");
const formMessage = document.getElementById("formMessage");

waitlistForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email) {
    formMessage.textContent = "Please enter your name and email.";
    return;
  }

  const subject = encodeURIComponent("VORAE ESSENTIALS Waitlist Request");

  const body = encodeURIComponent(
    `Hello VORAE ESSENTIALS,\n\nI want to join the launch waitlist.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nThank you.`
  );

  window.location.href = `mailto:info@vorae.online?subject=${subject}&body=${body}`;

  formMessage.textContent = "Opening your email app to complete the request.";
});
