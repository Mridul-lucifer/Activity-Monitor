const { z } = require("zod");

// Define Zod schemas for validation
const signUpSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().int().positive(),
  gender: z.string().min(1),
  password: z.string().min(6),
  weight: z.number().positive(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = { loginSchema, signUpSchema };
