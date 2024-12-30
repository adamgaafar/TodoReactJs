import { z } from "@builder.io/qwik-city";

export const registerSchema = z
  .object({
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((pass) => pass.password === pass.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type typeRegister = z.infer<typeof registerSchema>;
