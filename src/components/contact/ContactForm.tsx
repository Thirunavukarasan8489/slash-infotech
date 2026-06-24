'use client';

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

type FormValues = { name: string; email: string; message: string };

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormValues>();
  const onSubmit = () => reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">Name<input className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]" {...register("name", { required: "Name is required" })} />{errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}</label>
        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">Email<input className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]" type="email" {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Use a valid email" } })} />{errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}</label>
        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">Project brief<textarea className="min-h-36 rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]" {...register("message", { required: "Tell us a little about the project" })} />{errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}</label>
      </div>
      <button className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#2563EB] px-5 text-sm font-bold text-white transition hover:bg-[#1A56DB]" type="submit"><Send size={17} /> Send Message</button>
      {isSubmitSuccessful ? <p className="mt-4 text-sm font-semibold text-[#2563EB]">Thanks. Your message is ready for the Slash Infotech team.</p> : null}
    </form>
  );
}
