import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const Clock = component$(() => {
  const time = useSignal(new Date());

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      time.value = new Date();
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <p class="text-xs">{time.value.toLocaleTimeString()}</p>
    </div>
  );
});

export default Clock;
