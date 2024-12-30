/* eslint-disable qwik/jsx-img */
import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MaterialSymbolsAddNotesRounded } from "~/icons/add.icon";
import { MaterialSymbolsOtherHousesRounded } from "~/icons/homeicon";
import { PajamasOverview } from "~/icons/overview.icon";
import Image from "../../../public/avatar.jpg";
import { Dropdown } from "./avatar-manu";
const username = "ibrahim";
export const Navbar = component$(() => {
  const show = useSignal(false);

  const handelDrop = $(() => {
    show.value = !show.value;
  });

  return (
    <div>
      <nav class="flex items-center justify-between border-gray-200 dark:bg-gray-900 ">
        <div class="text-xs capitalize py-2 px-4">
          <img
            onClick$={handelDrop}
            class="h-7 w-7 cursor-pointer rounded-full"
            src={Image}
            alt="User dropdown"
          />
          {show.value ? <Dropdown username={username} /> : null}
        </div>

        <h1>Bright Life</h1>

        <div class="inline-flex rounded-md shadow-sm" role="group">
          <Link class=" border border-gray-900 bg-transparent px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700">
            <PajamasOverview class="text-sm" />
          </Link>
          <Link class="border-b border-t border-gray-900 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700">
            <MaterialSymbolsOtherHousesRounded class="text-sm" />
          </Link>
          <Link class=" border border-gray-900 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-500 dark:border-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700">
            <MaterialSymbolsAddNotesRounded class="text-sm" />
          </Link>
        </div>
      </nav>
    </div>
  );
});
