// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { $, component$, type QR } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import * as v from "valibot";
import ImgImg from "/public/img.jpg?jsx";

const loginSchema = v.object({
  username: v.pipe(v.string(), v.nonEmpty(), v.minLength(4)),
  password: v.pipe(v.string(), v.nonEmpty(), v.minLength(6)),
});

type loginType = v.InferInput<typeof loginSchema>;
export const useFormLoader = routeLoader$<InitialValues<loginType>>(() => ({
  username: "",
  password: "",
}));

export const useFormAction = formAction$<loginType>((values) => {
  // Runs on server
  // console.log(values);
}, valiForm$(loginSchema));

export default component$(() => {
  const [loginForm, { Field, Form }] = useForm({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(loginSchema),
  });

  const handelSubmit: QRL<SubmitHandler<loginType>> = $((values, event) => {
    console.log(values);
  });

  return (
    <div class="flex h-screen">
      <div class="flex w-1/2 items-center justify-center bg-gray-100">
        <ImgImg alt="Login Image" class="max-h-full max-w-full" />
      </div>

      <div class="flex w-1/2 flex-col items-center justify-center bg-white">
        <h2 class="mb-8 text-3xl font-bold">Welcome Back</h2>

        <Form onSubmit$={handelSubmit} class="w-3/4 ">
          <h2 class="mb-6 text-center text-2xl font-bold">Login</h2>

          <Field name="username">
            {(field, props) => (
              <div class="my-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  autoComplete="off"
                  {...props}
                  id="username"
                  value={field.value}
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {field.error && (
                  <span class="text-xs text-red-500">{field.error}</span>
                )}
              </div>
            )}
          </Field>

          <Field name="password">
            {(field, props) => (
              <div class="my-4">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  autoComplete="off"
                  {...props}
                  type="password"
                  id="password"
                  value={field.value}
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {field.error && (
                  <span class="text-xs text-red-500">{field.error}</span>
                )}
              </div>
            )}
          </Field>

          <button
            type="submit"
            class="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Login
          </button>

          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/auth/register/" class="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
});
