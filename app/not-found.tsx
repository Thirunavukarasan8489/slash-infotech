import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#111827] px-4 text-center text-white">
      <div>
        <div className="text-8xl font-black text-[#2563EB]">404</div>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          The page may have moved, but the route back to useful digital work is
          right here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-[#2563EB] px-5 py-3 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
