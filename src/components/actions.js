import React from "react";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";

const Actions = () => {
  return (
    <div>
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
            Czym się zajmujemy
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 w-full">
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
              <div className="flex justify-center">
              <ArchiveBoxArrowDownIcon className="size-10 text-orange-400" />
              </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Gromadzimy
              </h1>
              <div className="text-black dark:text-gray-400">kolekcję unikatowych i cennych radioodbiorników lampowych oraz innego sprzętu radiotechnicznego, które stanowią świadectwo rozwoju techniki radiowej.</div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <div className="flex justify-center">
            <WrenchScrewdriverIcon className="size-10 text-orange-400" />
            </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Renowujemy
              </h1>
              <div className="text-black dark:text-gray-400">stare urządzenia, przywracając im dawną świetność, dbając o zachowanie oryginalnych elementów i technologii.</div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <div className="flex justify-center">
            <BookOpenIcon className="size-10 text-orange-400" />
            </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Dokumentujemy
              </h1>
              <div className="text-black dark:text-gray-400">historię poszczególnych egzemplarzy oraz ich twórców, tworząc bogatą bazę wiedzy na temat technologii radiotechnicznej.</div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <div className="flex justify-center">
            <BellIcon className="size-10 text-orange-400" />
            </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Propagujemy
              </h1>
              <div className="text-black dark:text-gray-400">ochronę zabytków i zachęcamy do troski o dziedzictwo kulturowe.</div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <div className="flex justify-center">
            <LightBulbIcon className="size-10 text-orange-400" />
            </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Podnosimy
              </h1>
              <div className="text-black dark:text-gray-400">świadomość społeczną na temat znaczenia i historii urządzeń lampowych.</div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4"
          >
            <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <div className="flex justify-center">
            <UsersIcon className="size-10 text-orange-400" />
            </div>
              <h1 className="text-3xl font-bold text-primary m-2">
                Wspieramy
              </h1>
              <div className="text-black dark:text-gray-400">miłośników radiotechniki, oferując doradztwo w zakresie konserwacji oraz naprawy sprzętu radiowego.</div>
            </div>
          </div>
      </div>


    </div>
  );
};

export default Actions;
