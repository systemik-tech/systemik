import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(2, { message: "Enter your full name" }),
  email: z.email({
    pattern: z.regexes.email,
    message: "A valid email is required.",
  }),
});

export type SignupData = z.infer<typeof signupSchema>;
