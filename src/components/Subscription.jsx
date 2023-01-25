import React from "react";

import "../assets/stylesheets/subscribeForm.css";

function Subscription() {
  return (
    <div id="revue-embed">
      <h3>Become a master <span className="highlight">JavaScript developer</span> in <span className="highlight">80 pages</span></h3>
      <p>
        Understand the most weird and misunderstood concepts of JavaScript. You'll also find 20+ most common interview questions that you can brush up before your next interview.
      </p>

      {/* <form action="https://www.getrevue.co/profile/8020lessons/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank"> */}
        {/* <input className="revue-form-field" placeholder="Your @email.com" type="email" name="member[email]" id="member_email" required /> */}

        <a href="https://8020lessons.in/8020js-99" target="_blank" rel="noopener noreferrer">
          <button className="revue-form-submit" id="member_submit">Master JS Now!</button>
        </a>

        {/* <small className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small> */}
      {/* </form> */}
    </div>
  );
}

export default Subscription;