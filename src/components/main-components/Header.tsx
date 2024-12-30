import { component$ } from "@builder.io/qwik";
import { Navbar } from "../sub-component/Navbar";

export const Header = component$(() => {
  return (
    <div class='border-b shadow'>
      <Navbar/>
    </div>
  );
});
