import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Swastik's blog built with BlogFast",
  url: "https://swastikyadav.com/",
  description: "My portfolio of small bets.",
  author: "Swastik Yadav",
  authorProfileImg: "https://avatars.githubusercontent.com/u/44374494",
  about: `Software Engineer (${
    new Date().getFullYear() - 2021
  } Years Exp) || JavaScript, React, NextJs || Writes about JavaScript & life. Building side projects used by real people. || My blogs on Dev.To have been read by 200k+ readers so far.`,
  links: [
    { name: "github", url: "https://github.com/swastikyadav" },
    { name: "linkedin", url: "https://linkedin.com/in/swastikyadav" },
  ],
  projects: [
    // Add more project objects here...
    {
      name: "Catalyst UI",
      description: "React components library for faster product prototyping.",
      url: "https://catalystui.vercel.app",
      isActive: true,
      logo: "/images/catalystui-logo.png",
    },
    {
      name: "Freelance Work",
      description:
        "Building high converting landing pages for small, medium businesses and startups.",
      url: "https://drive.google.com/drive/folders/1LsZQT2QCsXQUthgStXS0nhpPVvMgkViL",
      isActive: true,
      logo: "/images/freelance.png",
    },
    {
      name: "AltForms",
      description:
        "FormBuilder Prototype - Build and share your public form page.",
      url: "https://github.com/Swastikyadav/AltForms",
      isActive: true,
      logo: "/images/altforms.png",
    },
    {
      name: "ReTone",
      description:
        "ReTone - AI Email Tone Converter. Raw email draft to emails that converts.",
      url: "https://github.com/Swastikyadav/retone",
      isActive: true,
      logo: "/images/retone.png",
    },
    {
      name: "Concisely AI",
      description:
        "Summarize your PDFs in seconds Unlock new insights with AI.",
      url: "https://github.com/Swastikyadav/Concisely-AI",
      isActive: true,
      logo: "/images/concisely.png",
    },
    {
      name: "BlogFast",
      description:
        "A NextJs boilerplate for developers to start blogging in hours not weeks.",
      url: "https://github.com/Swastikyadav/BlogFast",
      isActive: true,
      logo: "/images/blogfast.png",
    },
    {
      name: "YouFolio",
      description:
        "A single page sharable portfolio builder web app for developers.",
      url: "https://getyoufolio.vercel.app/",
      isActive: true,
      logo: "/images/folio.png",
    },
    {
      name: "8020Lessons",
      description:
        "A youtube channel to learn 20% programming skills that gets you 80% results.",
      url: "https://www.youtube.com/@8020Lessons/videos",
      isActive: false,
      logo: "/images/8020lessons.jpg",
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
