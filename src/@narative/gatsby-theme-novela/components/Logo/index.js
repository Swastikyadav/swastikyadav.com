import React from 'react'
import { Link } from "gatsby";

import "../../../../assets/stylesheets/custom.css";

export default function Logo() {
  return (
      <div className="logo-container">
        <h1 className="logo full-name">Swastik <span>Yadav</span></h1>
        <h1 className="logo short-name">S <span>Y</span></h1>
        {/* <Link to="/courses">Courses</Link> */}
      </div>
  );
}