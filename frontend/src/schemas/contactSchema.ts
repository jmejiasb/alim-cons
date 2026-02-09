import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nombre debe ser al menos dos caracteres"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Direccion de correo electronico invalido",
    }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+569\d{8}$/.test(val), {
      message: "Numero de telefono debe ser en formato +56912341234",
    }),
  message: z.string().min(3, "Mensaje debe ser al menos tres caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
