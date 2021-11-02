import React from "react";

import "../assets/stylesheets/subscribeForm.css";

function Subscription() {
  return (
    <div id="revue-embed">
      <h3>Become a better <span className="highlight">full-stack developer</span> in <span className="highlight">10 minutes</span> a week.</h3>
      <p>
        Be the first to receive our latest content with the ability to opt-out at
        anytime. We promise to not spam your inbox or share your email with any third
        parties.
      </p>

      <form action="https://www.getrevue.co/profile/8020lessons/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <input className="revue-form-field" placeholder="Your @email.com" type="email" name="member[email]" id="member_email" required />
        <br />
        <input className="revue-form-submit" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
        <br />
        <small className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small>
      </form>
    </div>
  );
}

export default Subscription;