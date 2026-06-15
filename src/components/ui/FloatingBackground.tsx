export function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-36 -top-40 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.14),transparent_70%)] blur-2xl" />
      <div className="absolute -right-36 top-[26rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(65,105,225,.1),transparent_70%)] blur-2xl" />
    </div>
  );
}
