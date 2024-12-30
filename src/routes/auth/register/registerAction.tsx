import { formAction$, zodForm$ } from "@modular-forms/qwik";
import { registerSchema,type typeRegister } from "./registerSchema";

export const registerAction = formAction$<typeRegister>(() => {
  //SERVER
}, zodForm$(registerSchema));
