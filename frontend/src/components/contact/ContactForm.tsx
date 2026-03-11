"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormInputField } from "../ui/FormInputField";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", phone: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-full rounded-2xl border border-border bg-card p-6 shadow-sm"
      >
        <FormInputField<ContactFormData>
          control={form.control}
          name="name"
          label="Nombre"
          placeholder="Tu nombre"
        />

        <FormInputField
          control={form.control}
          name="email"
          label="Correo Electrónico"
          type="email"
          placeholder="tu@mail.com"
        />

        <FormInputField
          control={form.control}
          name="phone"
          label="Nro. Telefono (Opcional)"
          type="tel"
          placeholder="+56912341234"
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-foreground">
                Mensaje
              </FormLabel>

              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Escribe tu mensaje..."
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
