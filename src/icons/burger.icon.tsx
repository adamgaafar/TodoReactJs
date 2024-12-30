import type { PropsOf } from "@builder.io/qwik";

export function IconamoonMenuBurgerHorizontalBold(
  props: PropsOf<"svg">,
  key: string,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M3 6h18M3 12h18M3 18h18"
      ></path>
    </svg>
  );
}