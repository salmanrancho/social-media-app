import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  // email: z.string().trim().min(1, "Required")
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-z0-9_-]+$/,
    "Only letters, numbers, - and _ are allowed",
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;