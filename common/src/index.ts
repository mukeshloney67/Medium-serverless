import {z} from "zod"

// signup inputs
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>


// signin inputs
export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

export type SigninInput = z.infer<typeof signinInput>

// blog input validation
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogInput = z.infer<typeof createBlogInput>


//update blog 
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>