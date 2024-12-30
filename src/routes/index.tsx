import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/sub-component/Card";
import { Hero } from "~/components/sub-component/Hero";

export default component$(() => {
  return (
    <div class="m-1 rounded-sm border-gray-900 p-6 shadow-customShadow ">
      <Hero />

      <h2 class="relative text-center text-2xl font-bold border w-fit -translate-x-1/2 left-1/2 px-4 py-1 rounded-sm border-yellow-300">
        Feature
      </h2>
      <Card />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
