import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Swastik's blog built with BlogFast",
  url: "https://swastikyadav.com/",
  description: "My portfolio of small bets.",
  author: "Swastik Yadav",
  authorProfileImg:
    "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F624038%2F06e37841-8bee-420a-a76e-4f05684aaf1c.jpg",
  about:
    "Software Engineer (3+ Years Exp) || JavaScript, React, NextJs || Writes about JavaScript & life. Building side projects used by real people. || My blogs on Dev.To have been read by 200k+ readers so far.",
  links: [
    { name: "github", url: "https://github.com/swastikyadav" },
    { name: "linkedin", url: "https://linkedin.com/in/swastikyadav" },
  ],
  projects: [
    // Add more project objects here...
    {
      name: "BlogFast",
      description:
        "A NextJs boilerplate for developers to start blogging in hours not weeks.",
      url: "",
      isActive: true,
      logo: "/images/blogfast.png",
    },
    {
      name: "TwEmbed",
      description:
        "Embed your twitter profile on any website with just copy & paste script.",
      url: "https://twembed.netlify.app/",
      isActive: false,
      logo: "/images/twembed.png",
    },
  ],
};
