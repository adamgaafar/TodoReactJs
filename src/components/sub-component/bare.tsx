import { $, component$, useStore } from "@builder.io/qwik";
import { IconamoonMenuBurgerHorizontalBold } from "~/icons/burger.icon";

export const Bar = component$(() => {
  const state = useStore({ drawerOpen: false });

  const toggleDrawer = $(() => {
    state.drawerOpen = !state.drawerOpen;
  });

  return (
    <div class="h-full">
      <div class="" onClick$={toggleDrawer}>
        <button
          type="button"
          class="me-2 inline-flex items-center rounded-sm border border-black p-2.5 text-center  font-medium text-black hover:bg-gray-200 hover:text-black  dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <IconamoonMenuBurgerHorizontalBold />
          <span class="sr-only">Icon description</span>
        </button>
      </div>

      {/* Drawer Component */}
      <div
        class={` h-full w-64 overflow-y-auto p-4 transition-transform ${
          state.drawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white shadow-customShadow dark:bg-gray-800`}
        // tabindex="-1"
        // aria-labelledby="drawer-navigation-label"
      >
        <h5 class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400">
          Menu
        </h5>
        <button
          type="button"
          onClick$={toggleDrawer}
          aria-controls="drawer-navigation"
          class="absolute end-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="overflow-y-auto py-4">
          <ul class="space-y-2 font-medium">
            <a
              href="#"
              class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="ms-3 flex-1 whitespace-nowrap">Inbox</span>
              <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
});
