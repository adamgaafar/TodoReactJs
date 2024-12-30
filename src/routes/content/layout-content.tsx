import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-full">
      <div class="flex h-full ">
        <Slot />
      </div>
    </div>
  );
});
