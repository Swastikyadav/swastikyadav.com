import React, { useEffect } from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

function Profile() {
  useEffect(() => {
    const script = document.createElement("script");
    
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="swastik-yadav-6386b71b5"
            data-version="v1"
          >
          </div>   
        </div>
      </Section>
    </Layout>
  );
}

export default Profile;
