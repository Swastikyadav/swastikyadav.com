import React from "react";

import "../assets/stylesheets/subscribeForm.css";

function Subscription() {
  return (
    <div id="revue-embed">
      <h3>Developers, <span className="highlight">Double your income</span> without competing against <span className="highlight">thousands of resumes</span> by building your <span className="highlight">social presence</span>.</h3>
      <p>
        Learn to bypass all the competition. Let the opportunities come to you instead of you mindlessly running behind it. This is how you monetize your webDev skills.
      </p>

      {/* <form action="https://www.getrevue.co/profile/8020lessons/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank"> */}
      {/* <input className="revue-form-field" placeholder="Your @email.com" type="email" name="member[email]" id="member_email" required /> */}

      <a href="https://diaryofadev.ck.page/a4a719c8f3" target="_blank" rel="noopener noreferrer">
        <button className="revue-form-submit" id="member_submit">2x Income Now!</button>
      </a>

      {/* <small className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small> */}
      {/* </form> */}
    </div>
  );
}

export default Subscription;