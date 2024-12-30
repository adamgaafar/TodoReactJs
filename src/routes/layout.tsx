import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/main-components/Footer";
import { Header } from "~/components/main-components/Header";
import { Sidebar } from "~/components/main-components/Sidebare";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="wrapper">
      <div class="box">
        <Header />
        <main class="flex">
          <Sidebar />
          <div class="flex w-full border  m-1  shadow-customShadow">
            <Slot />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
});
