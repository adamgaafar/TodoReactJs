import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>
        Content
        <Slot />
      </h1>{" "}
    </div>
  );
});
