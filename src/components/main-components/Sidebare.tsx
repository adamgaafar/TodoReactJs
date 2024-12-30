import { component$ } from "@builder.io/qwik";
import { Bar } from "../sub-component/bare";

export const Sidebar = component$(() => {
  return (
    <div class='w-10 shadow-customShadow' >
      <Bar/>
    </div>
  );
});
