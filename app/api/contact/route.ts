import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  countryCode?: unknown;
  phoneNumber?: unknown;
  email?: unknown;
  message?: unknown;
};

const countryRules = {
  "+44": { label: "UK", digits: 10 },
  "+91": { label: "India", digits: 10 },
} as const;

const namePattern = /^[A-Za-z ]+$/;
const briefPattern = /^[A-Za-z0-9 ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isCountryCode(value: unknown): value is keyof typeof countryRules {
  return typeof value === "string" && value in countryRules;
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const name = readString(payload.name);
  const countryCode = payload.countryCode;
  const phoneNumber = readString(payload.phoneNumber);
  const email = readString(payload.email).toLowerCase();
  const message = readString(payload.message);

  if (!name || !namePattern.test(name)) {
    return { error: "Name can contain letters and spaces only" };
  }

  if (!isCountryCode(countryCode)) {
    return { error: "Select a valid country code" };
  }

  const phoneRule = countryRules[countryCode];
  if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== phoneRule.digits) {
    return {
      error: `${phoneRule.label} phone number must be ${phoneRule.digits} digits`,
    };
  }

  if (!email || !emailPattern.test(email)) {
    return { error: "Use a valid email address" };
  }

  if (!message || !briefPattern.test(message)) {
    return {
      error: "Project brief can contain letters, numbers, and spaces only",
    };
  }

  return {
    data: {
      name,
      countryCode,
      phoneNumber,
      fullPhoneNumber: `${countryCode}${phoneNumber}`,
      email,
      message,
      source: "website-contact-form",
      createdAt: new Date(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const result = validatePayload(payload);

    if ("error" in result) {
      return NextResponse.json({ message: result.error }, { status: 400 });
    }

    const db = await getMongoDb();
    const insertResult = await db
      .collection("contact_submissions")
      .insertOne(result.data);

    return NextResponse.json(
      {
        message: "Contact form submitted",
        id: insertResult.insertedId.toString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json(
      { message: "Unable to submit the contact form right now" },
      { status: 500 },
    );
  }
}
