"use client";

import { useState, useEffect } from "react";
import { mentalModels } from "@/config/mentalModels";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { MentalModelDrawer } from "@/components/mental-model-drawer";
import { MentalModelSubscriptionForm } from "@/components/mental-model-subscription";

export default function JsMentalModel({ searchParams: { success } }) {
  const [isSubPopupOpen, setIsSubPopupOpen] = useState(false);

  useEffect(() => {
    if (success) {
      localStorage.setItem("success", "true");
    }

    if (localStorage.getItem("success")) return;

    const handleMouseLeave = (event) => {
      if (event.clientY <= 0) {
        setIsSubPopupOpen(true);
      }
    };

    if (window.innerWidth >= 1024) {
      document.addEventListener("mouseleave", handleMouseLeave);
    } else {
      setTimeout(() => {
        setIsSubPopupOpen(true);
      }, 60000);
    }
  }, []);

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

      <Dialog
        open={isSubPopupOpen}
        onOpenChange={() => setIsSubPopupOpen(false)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Image
                src={"/images/mentalModels/jsmmlogo.png"}
                width={250}
                height={83}
                className="m-auto border-b"
              />
            </DialogTitle>
            <DialogDescription className="m-auto">
              <p>Hey, I'm Swastik. Every Tuesday I share:</p>
              <br />
              <p>- 3 Frontend interview tips</p>
              <p>- 2 JS mental models</p>
              <p>- 1 Favourite blog from web</p>
              <br />
              <p>
                It is subscribed by beginners in 1st year and devs in MAANG.
              </p>
              <br />
              <p className="underline">1.3k developers enjoy it.</p>
              <div className="w-full m-auto md:w-96">
                <MentalModelSubscriptionForm />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
