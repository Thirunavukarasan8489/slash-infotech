'use client';

import { Send } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const countryOptions = [
  { label: "UK", code: "+44", digits: 10 },
  { label: "India", code: "+91", digits: 10 },
] as const;

type CountryCode = (typeof countryOptions)[number]["code"];

type FormValues = {
  name: string;
  countryCode: CountryCode;
  phoneNumber: string;
  email: string;
  message: string;
};

const namePattern = /^[A-Za-z ]+$/;
const briefPattern = /^[A-Za-z0-9 ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    getValues,
    control,
  } = useForm<FormValues>({
    defaultValues: {
      countryCode: "+44",
    },
    mode: "onBlur",
  });

  const selectedCode = useWatch({ control, name: "countryCode" }) ?? "+44";
  const selectedCountry =
    countryOptions.find((country) => country.code === selectedCode) ??
    countryOptions[0];

  const onSubmit = async (values: FormValues) => {
    setSubmitMessage(null);
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;

    if (!response.ok) {
      setSubmitError(result?.message ?? "Unable to submit the contact form");
      return;
    }

    setSubmitMessage("Thanks. Your message has been saved successfully.");
    reset({ countryCode: selectedCountry.code });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">
          Name
          <input
            className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]"
            placeholder="Your name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: namePattern,
                message: "Name can contain letters and spaces only",
              },
              onChange: (event) => {
                event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
              },
            })}
          />
          {errors.name ? (
            <span className="text-xs text-red-600">{errors.name.message}</span>
          ) : null}
        </label>

        <div className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">
          <span>Phone Number</span>
          <div className="grid grid-cols-[104px_1fr] overflow-hidden rounded-md border border-slate-200 focus-within:border-[#2563EB]">
            <select
              aria-label="Select country code"
              className="border-r border-slate-200 bg-[#F3F4F6] px-3 py-3 text-sm outline-none"
              {...register("countryCode", {
                onChange: (event) => {
                  const country = countryOptions.find(
                    (item) => item.code === event.target.value,
                  );
                  const digits = country?.digits ?? selectedCountry.digits;
                  const current = getValues("phoneNumber") ?? "";
                  setValue("phoneNumber", current.slice(0, digits), {
                    shouldValidate: true,
                  });
                },
              })}
            >
              {countryOptions.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label} {country.code}
                </option>
              ))}
            </select>
            <input
              className="px-4 py-3 outline-none"
              inputMode="numeric"
              placeholder={`${selectedCountry.digits} digit number`}
              maxLength={selectedCountry.digits}
              {...register("phoneNumber", {
                required: "Phone number is required",
                validate: (value) => {
                  if (!/^\d+$/.test(value)) {
                    return "Phone number can contain digits only";
                  }
                  if (value.length !== selectedCountry.digits) {
                    return `${selectedCountry.label} phone number must be ${selectedCountry.digits} digits`;
                  }
                  return true;
                },
                onChange: (event) => {
                  event.target.value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, selectedCountry.digits);
                },
              })}
            />
          </div>
          {errors.phoneNumber ? (
            <span className="text-xs text-red-600">
              {errors.phoneNumber.message}
            </span>
          ) : null}
        </div>

        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">
          Email
          <input
            className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailPattern,
                message: "Use a valid email address",
              },
            })}
          />
          {errors.email ? (
            <span className="text-xs text-red-600">{errors.email.message}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1E2A3A]">
          Project brief
          <textarea
            className="min-h-36 rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-[#2563EB]"
            placeholder="Tell us about your project"
            {...register("message", {
              required: "Tell us a little about the project",
              pattern: {
                value: briefPattern,
                message: "Project brief can contain letters, numbers, and spaces only",
              },
              onChange: (event) => {
                event.target.value = event.target.value.replace(/[^A-Za-z0-9 ]/g, "");
              },
            })}
          />
          {errors.message ? (
            <span className="text-xs text-red-600">
              {errors.message.message}
            </span>
          ) : null}
        </label>
      </div>
      <button
        className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#2563EB] px-5 text-sm font-bold text-white transition hover:bg-[#1A56DB] disabled:cursor-not-allowed disabled:bg-slate-400"
        type="submit"
        disabled={isSubmitting}
      >
        <Send size={17} /> {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitMessage ? (
        <p className="mt-4 text-sm font-semibold text-[#2563EB]">
          {submitMessage}
        </p>
      ) : null}
      {submitError ? (
        <p className="mt-4 text-sm font-semibold text-red-600">{submitError}</p>
      ) : null}
    </form>
  );
}
