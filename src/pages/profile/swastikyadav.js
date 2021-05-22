import React, { useEffect } from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

function Profile() {
  useEffect(() => {
    const script = document.createElement("script");
    
    script.src = "https://cdn.jsdelivr.net/gh/Swastikyadav/embeddable-twitter-profile@master/client/widget-v3/index.js";
    script.setAttribute("id", "embed-script");
    script.setAttribute("data-user", "swastikjsdev");
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
        <div id="embed-div" style={{marginTop: "75px"}}></div>
      </Section>
    </Layout>
  );
}

export default Profile;
