import "./Contact.css"
import React from "react";
import Swal from 'sweetalert2';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a3db5ad-8bdd-4f23-b2fe-5acdfdf7a67c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Thank you!",
        text: "I will get back to you shortly.",
        icon: "Close"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder="Enter your name" name="name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder="Enter your email" name="email" required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  )
  };
  export default Contact;