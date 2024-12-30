import { component$ } from "@builder.io/qwik";

interface decoProp {
  username: string;
}

export const Dropdown = component$(({ username }:decoProp) => {
  return (
    <div class=" my-4 absolute list-none divide-y divide-gray-100 bg-card text-sm shadow dark:divide-gray-600 dark:bg-gray-700 rounded-sm">
      <div class="px-4 py-3">
        <span class="block text-xs text-gray-900 dark:text-white">
          {username}
        </span>
        <span class="block truncate  text-xs text-gray-500 dark:text-gray-400">
          name@flowbite.com
        </span>
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
});
