import { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset= () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit= (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in the form before sending message!");
      return;
    }

    const emailValid = /^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    const checkEmail= emailValid.test(email);
    if (!checkEmail) {
      alert("Please enter a valid email");
      return;
    }
    console.log("=========Messages=========");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("We will not read your responses because we are no longer in this class! But thank you for the feedback!")
    handleReset();
  };

  return (
    <div className="content bg-light rounded mx-auto p-3 mt-5">
      <form className="mx-auto shadow rounded p-2 mb-2">
        <h1 className="mb-4 text-center text-sm-start fw-bold">
          We want to hear from you
        </h1>
        <div className="mb-3">
          <label className="form-label fw-bold"for="name">Name</label>
          <input
            className="form-control shadow-sm"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(addName) => setName(addName.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold" for="email">Email</label>
          <div className="input-group">
            <input
              className="form-control shadow-sm"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(addEmail) => setEmail(addEmail.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold"for="message">Message</label>
          <textarea
            className="form-control shadow-sm"
            id="message"
            rows={6}
            placeholder="Enter your message"
            value={message}
            onChange={(addMessage) => setMessage(addMessage.target.value)}
          />
        </div>
        <div className="d-flex">
          <button
            className="btn submit w-50 btn-primary btn-block fw-bold "
            onClick={handleSubmit}
          >
            Send
          </button>

          <button
            className="btn reset w-50 btn-secondary btn-block fw-bold "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
