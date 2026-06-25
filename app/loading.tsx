export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#111827] text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-[#2563EB]" />
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-white/65">
          Loading Slash Infotech
        </p>
      </div>
    </div>
  );
}
