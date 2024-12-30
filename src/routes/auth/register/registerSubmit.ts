import { $, type QRL } from "@builder.io/qwik";
import { type typeRegister } from "./registerSchema";
import type { SubmitHandler } from "@modular-forms/qwik";
export const handelSubmit:QRL<SubmitHandler<typeRegister> > = $(
  (values, event) => {
    console.log(values, event);
  },
);
