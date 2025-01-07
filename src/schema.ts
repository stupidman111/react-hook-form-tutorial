import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required and must >= 2" }),
  gender: z.enum(["male", "female"]),
  phone: z.string().min(11, { message: "11 bit phone number" }),
  isDefault: z.boolean().default(false),
});

export type FormType = z.infer<typeof formSchema>;
