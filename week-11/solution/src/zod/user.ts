import z from "zod";
export const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type SignupSchemaType = z.infer<typeof signupSchema>
export type SigninSchemaType = z.infer<typeof signinSchema>