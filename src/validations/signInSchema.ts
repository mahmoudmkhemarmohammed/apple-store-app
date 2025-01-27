import { z } from "zod";
const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(8, { message: "Password is required" }),
});

type TsignInType = z.infer<typeof signInSchema>;

export { signInSchema, type TsignInType };
