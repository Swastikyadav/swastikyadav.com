"use client";

import { mentalModels } from "@/config/mentalModels";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function JsMentalModel({ searchParams: { success } }) {
  return (
    <div className="block sm:flex">
      <aside className="sm:w-[450px] border-r-2 shadow-xl py-16 px-4 relative">
        <Image
          src={"/images/mentalModels/jsmmlogo.png"}
          width={500}
          height={166}
          className="border-b"
        />

        <p className="my-8">
          Learn how to think in JavaScript. Mental models that'll change the way
          you understand Js.
        </p>

        <p className="my-8">
          Subscribed by beginners in 1st year and devs in MAANG.
        </p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3>Next Tuesday:</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>- Event Propagation</p>
              <p>- Event Delegation</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="my-8">
          <form action="">
            {/* <input type="text" name="first_name" /> */}
            <input
              type="email"
              name="email_address"
              placeholder="3 new Mental Models every Tuesday."
              className="w-full p-2 mb-2 border rounded border-slate-400"
            />
            <Button type="submit" className="w-full bg-[#597cff]">
              I'm In
            </Button>
            {success && (
              <small className="font-semibold text-green-600">
                Success! Now check your email for a surprise gift. Also check
                your spam folder if can't find the email.
              </small>
            )}
          </form>
        </div>
      </aside>

      <section className="grid w-full grid-cols-1 gap-12 p-16 md:grid-cols-2 lg:grid-cols-3">
        {mentalModels.reverse().map((model) => {
          return (
            <div>
              <Image
                src={`${model.gif}`}
                width={600}
                height={280}
                className="border border-black border-solid rounded shadow-md cursor-pointer hover:scale-105"
              />
              <p className="text-lg font-semibold">{model.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
