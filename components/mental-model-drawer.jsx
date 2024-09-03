import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { MentalModelSubscriptionForm } from "./mental-model-subscription";

export function MentalModelDrawer({ model }) {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Image
            src={`${model.gif}`}
            width={600}
            height={280}
            className="border border-black border-solid rounded shadow-md cursor-pointer hover:scale-105"
          />
          <p className="text-lg font-semibold">{model.title}</p>
        </DrawerTrigger>
        <DrawerContent className="h-[90%] w-[95%] m-auto overflow-y-scroll">
          <DrawerHeader className="m-auto">
            <DrawerTitle>{model.title}</DrawerTitle>
            <DrawerDescription>
              <Image
                src={model.gif}
                width={600}
                height={280}
                className="my-4 border border-black"
              />

              <p
                dangerouslySetInnerHTML={{ __html: model.description }}
                className="my-8"
              ></p>

              <div className="w-full m-auto md:w-96">
                <MentalModelSubscriptionForm />
              </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
