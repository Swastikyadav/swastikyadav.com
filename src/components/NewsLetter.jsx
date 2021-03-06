import React, { useState } from "react";
import "./newsletter.css";

const NewsLetter = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");

  const FORM_URL = "https://app.convertkit.com/forms/1938731/subscriptions";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(
        FORM_URL,
        {
          method: "post",
          body: data,
          headers: {
            accept: "application/json",
          },
        }
      );
      setEmail("");
      const json = await response.json();
      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch(err) {
      setStatus("ERROR");
      console.log(err);
    }
  }

  const handleChange = event => {
    const { value } = event.target;
    setEmail(value);
  }

  return (
    <div className="nl-container">
      <h2 className="nl-title">VisionMad - <small>Vision to Make A Difference</small></h2>
      <p className="nl-tag">
        Every week I send out my learnings about Tech, Startup, and Finance.
      </p>

      {status === 'SUCCESS' && <p className="nl-success">Success! Now check your email to confirm your subscription.</p>}
      {status === 'ERROR' && <p className="nl-error">Oops, Something went wrong! try again.</p>}

      <form className="sub__form"
          action={FORM_URL}
          method="post"
          onSubmit={handleSubmit}
      >
          <input
              className="nl-input"
              type="email"
              aria-label="Your email"
              name="email_address"
              placeholder="Your best email address"
              onChange={handleChange}
              value={email}
              required
          />

          <button
            className="nl-button"
            type="submit"
          >
            Make A Difference
          </button>

      </form>

      <p>I won't send you spam and you can unsubscribe at any time</p>

    </div>
  );
}

export default NewsLetter;