import type { PropsOf } from "@builder.io/qwik";
export function PajamasOverview(props: PropsOf<"svg">, key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 5.5v-3h3v3zM1 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 .25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 2.25M9.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM2.5 10.5v3h3v-3zM2 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm7.75.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
