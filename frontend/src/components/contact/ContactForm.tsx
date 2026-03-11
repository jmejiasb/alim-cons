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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
        className="space-y-5 w-full rounded-2xl border border-emerald-200 bg-green-100 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-900 font-medium dark:text-emerald-200">
                Nombre
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Tu nombre"
                  className="border-emerald-200 bg-emerald-50 text-emerald-950 placeholder:text-emerald-700/60 focus-visible:ring-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus-visible:ring-emerald-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-900 font-medium dark:text-emerald-200">
                Correo Electrónico
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder="tu@mail.com"
                  className="border-emerald-200 bg-emerald-50 text-emerald-950 placeholder:text-emerald-700/60 focus-visible:ring-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus-visible:ring-emerald-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-900 font-medium dark:text-emerald-200">
                Nro. Telefono (Opcional)
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+56912341234"
                  {...field}
                  className="border-emerald-200 bg-emerald-50 text-emerald-950 placeholder:text-emerald-700/60 focus-visible:ring-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus-visible:ring-emerald-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-emerald-900 font-medium dark:text-emerald-200">
                Mensaje
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Escribe tu mensaje..."
                  className="border-emerald-200 bg-emerald-50 text-emerald-950 placeholder:text-emerald-700/60 focus-visible:ring-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus-visible:ring-emerald-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
