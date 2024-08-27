"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FreelanceChecklist({ searchParams: { success } }) {
  const [firstName, setFirstName] = useState("");

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <h2 className="text-2xl">
        Hey {firstName}, become a{" "}
        <span className="font-semibold text-purple-600">
          profitable Freelance web developer
        </span>{" "}
        by completing the{" "}
        <span className="font-semibold text-purple-600">
          step by step checklist
        </span>{" "}
        below.
      </h2>

      <div className="grid col-span-1 gap-2 p-2 my-8 border rounded">
        <h2 className="text-xl">
          This checklist helped me{" "}
          <span className="font-semibold text-purple-600">
            "Close a ₹8k freelance web-dev client in 24 hours"
          </span>{" "}
          . Subscribe to watch the video.
        </h2>
        <form
          action="https://app.convertkit.com/forms/6998755/subscriptions"
          method="post"
          className="grid col-span-1 gap-2"
        >
          <Input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            type="email"
            name="email_address"
            id="email_address"
            placeholder="Email"
            required
          />
          <Button type="submit">Watch Now!</Button>
        </form>

        {success && (
          <small className="font-semibold text-green-600">
            Success! Now check your email for the video. Also check your spam
            folder if can't find the email.
          </small>
        )}
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 1: Skills Needed</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              To be honest you don’t need to know any crazy technologies. If you
              know how to build websites and landing pages, you are good to go.
              <br />
              <br />
              No matter how you build it plain HTML-CSS, Wordpress, or anything
              else.
              <br />
              <br />
              If you are not sure or don’t feel confident, start by learning
              NextJs, that’s what I use. If you know basic Js and React, it
              won’t be tough to learn.
              <br />
              <br />
              Also NextJs is the standard nowadays.
              <br />
              <br />
              That’s why you should learn NextJs so your skills don’t hold you
              back.
              <br />
              <br />
              Skill problem solved!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 2: Niche Selection</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Niche is simply whom you serve as a freelancer. If you accept to
              work with every type of client under the sun, you'll soon become a
              commodity business and die.
              <br />
              <br />
              But being a niche expert will allow you to charge for value and
              you won't be competing over price.
              <br />
              <br />
              Use any AI tool for Niche selection research. I prefer Google's
              Gemini here. And use the following prompt.
              <br />
              <br />
              ------ AI Prompt For Niche Selection Research ------
              <br />
              <br />
              I am starting a service business and want your help to decide on a
              niche.
              <br />
              <br />
              I have listed few niches, I want you to do some research and
              figure out the following 2 metrics for each one.
              <br />
              <br />
              The 2 metrics are: - What is the average order value in that
              niche. - What is the demand for the services the niche provides.
              <br />
              <br />
              And here are the niches:
              <p>- Medical Spas</p>
              <p>- Beauticians / Makeup Artists</p>
              <p>- Packers and Movers</p>
              <p>- Cleaning businesses</p>
              <p>- Real Estate</p>
              <p>- Dentists</p>
              <p>- Dermatologists</p>
              <p>- Pest control</p>
              <p>- Gym</p>
              <br />I want you to give a score to each niche I provided. Give
              score based on Demand "1 for low, 2 for moderate, and 3 for high"
              and AOV "similar to demand". And then rank or sort the niches
              according to the score.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 3: Offer Creation</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Your offer is the promise you are making to your clients.
              <br />
              <br />
              Selling only web development services is difficult because
              everyone is doing that. You have to offer something that no one
              else is offering.
              <br />
              <br />
              Make an Offer so good people feel stupid saying no. Watch my video
              where I went through this checklist and actually closed a client,
              you'll understand what I am talking about.
              <br />
              <br />
              But make sure to be practical and don't promise anyting that you
              can't deliver.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 4: Traffic Source</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Your offer doesn’t mean anything if no one knows about it. No
              matter how good of an offer you made.
              <br />
              <br />
              You are probably here from my cold DM, content, or Ad. That’s how
              I bring traffic to this page.
              <br />
              <br />
              There are only 4 core ways to bring traffic and make people know
              about your stuff.
              <br />
              <br />
              Warm outreach, Content, Cold outreach, and Ads.
              <br />
              <br />
              The only purpose of traffic is to get leads and make strangers
              want to buy from you.
              <br />
              <br />
              Watch the video and see how I brought traffic to freelance
              business.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 5: Sales</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              If your offer is really good, sales will happen on its own. And
              you’ll do just fine.
              <br />
              <br />
              But if your offer is bad, you’ll have to put some effort on sales.
              And you can still do just fine.
              <br />
              <br />
              Now imagine, what'll happen if you:
              <br />
              <br />
              - Have a great offer.
              <br />
              - Are good at sales.
              <br />
              <br />
              Sales is not forcing your clients to buy, but giving them as much
              value as possible until they are ready to buy.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 6: Service Delivery</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Once you closed a client.
              <br />
              <br />
              Now the real work begins. Service delivery is the most important
              aspect of your freelance business. Because if your don’t deliver
              your promises you business will die fast and steady.
              <br />
              <br />A great service delivery fulfill your promises and keep
              getting repeat clients and referrals.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            <h3 className="text-xl font-semibold">Step 7: Subscribe</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Subscribe to the newsletter above and I'll send you a video where
              I followed this exact checklist and{" "}
              <span className="font-semibold">
                "closed a ₹8k freelance web-dev client in 24 hours"
              </span>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr />
      <small className="block mt-12 text-slate-500">
        Built by a freelance web developer for aspiring freelance devs.
      </small>
    </div>
  );
}
