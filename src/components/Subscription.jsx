import React from "react";

import "../assets/stylesheets/subscribeForm.css";

function Subscription() {
  return (
    <div id="revue-embed">
      <h3><span className="highlight">DiaryOfADev</span>, Success stories of underdog developers.</h3>
      <p>
        Every week we share an underdog developer's story and a deep dive into a programming concept.
      </p>

      {/* <form action="https://www.getrevue.co/profile/8020lessons/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank"> */}
      {/* <input className="revue-form-field" placeholder="Your @email.com" type="email" name="member[email]" id="member_email" required /> */}

      <a href="https://diaryofadev.in/" target="_blank" rel="noopener noreferrer">
        <button className="revue-form-submit" id="member_submit">Join The Newsletter</button>
      </a>

      {/* <small className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small> */}
      {/* </form> */}
    </div>
  );
}

export default Subscription;
