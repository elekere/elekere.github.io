/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_vxlyg9p",
      "template_ranpdkt",
      "#contact-form",
      "c6XieECL0ZutICTD0"
    )
    .then(
      () => {
        // Show message
        contactMessage.textContent = "Message successfully sent! ✅";

        // Remove message
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      }
      // () => {
      //   // show error message
      //   contactMessage.textContent = "Message not sent (service error) ❌";
      // }
    );
};

contactForm.addEventListener("submit", sendEmail);
