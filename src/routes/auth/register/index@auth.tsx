/* eslint-disable @typescript-eslint/no-unused-vars */
import { type InitialValues, useForm, zodForm$ } from "@modular-forms/qwik";
import ImgPhoto from "/public/img.jpg?jsx";
import { component$ } from "@builder.io/qwik";
import { registerAction } from "./registerAction";
import { registerSchema, type typeRegister } from "./registerSchema";
import { handelSubmit } from "./registerSubmit";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useRegisterLoader = routeLoader$<InitialValues<typeRegister>>(() => ({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}));

export default component$(() => {
  const [registerForm, { Form, Field }] = useForm({
    loader: useRegisterLoader(),
    action: registerAction(),
    validate: zodForm$(registerSchema),
  });
  return (
    <div class="flex h-screen">
      <div class="flex w-1/2 items-center justify-center bg-gray-100">
        <ImgPhoto alt="Registration Image" class="max-h-full max-w-full" />
      </div>

      <div class="flex w-1/2 items-center justify-center bg-white">
        <Form onSubmit$={handelSubmit} class="w-3/4 ">
          <h2 class="mb-6 text-center text-2xl font-bold">Register</h2>

          <Field name="username">
            {(field, props) => (
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                
                  {...props}
                  value={field.value}
                  type="text"
                  id="username"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span class="text-xs text-red-500">{field.error && field.error} </span>
              </div>
            )}
          </Field>

          <Field name="email">
            {(field, props) => (
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  {...props}
                  value={field.value}
                  type="email"
                  id="email"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span class="text-xs text-red-500">{field.error && field.error} </span>
              </div>
            )}
          </Field>

          <Field name="password">
            {(field, props) => (
              <div class="mb-4">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  {...props}
                  value={field.value}
                  type="password"
                  id="password"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span class="text-xs text-red-500">{field.error && field.error} </span>
              </div>
            )}
          </Field>
          <Field name="confirmPassword">
            {(field, props) => (
              <div class="mb-6">
                <label
                  for="confirmPassword"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  {...props}
                  value={field.value}
                  id="confirmPassword"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span class="text-xs text-red-500">{field.error && field.error} </span>
              </div>
            )}
          </Field>
          <button
            type="submit"
            class="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  );
});
