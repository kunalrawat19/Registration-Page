const { z } = require("zod");

// Registration Schema
const registerUserSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  password: z.string().trim().min(4, "Password must be at least 4 characters long"),
  confirmPassword: z.string().trim().min(4, "Confirm password must be at least 4 characters long"),
  role: z.enum(["admin", "user", "guest"]) // Enum to restrict values
})
.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords must match",
    path: ["confirmPassword"],
  }
);

module.exports = { registerUserSchema };

