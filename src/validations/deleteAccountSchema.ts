import { z } from "zod";

const deleteAccount = z.object({
  password: z.string().min(1, { message: "Password is required" }),
});

type TDeleteAccount = z.infer<typeof deleteAccount>;

export { deleteAccount, type TDeleteAccount };
