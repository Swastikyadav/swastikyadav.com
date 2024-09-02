"use client";

import { mentalModels } from "@/config/mentalModels";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MentalModelDrawer } from "@/components/mental-model-drawer";
import { MentalModelSubscriptionForm } from "@/components/mental-model-subscription";

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

        <MentalModelSubscriptionForm success={success} />
      </aside>

      <section className="grid w-full grid-cols-1 gap-12 p-16 md:grid-cols-2 lg:grid-cols-3">
        {mentalModels.reverse().map((model) => {
          return <MentalModelDrawer model={model} />;
        })}
      </section>
    </div>
  );
}
