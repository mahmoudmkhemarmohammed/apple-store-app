import { z } from "zod";
const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message:
          "The password must be at least 8 characters long and must contain uppercase and lowercase letters and special characters.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "password and confirm password does not match",
    path: ["confirmPassword"],
  });

type TSignUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type TSignUpType };
