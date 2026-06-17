export function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.12),transparent_70%)] blur-xl" />
      <div className="absolute -right-36 top-[26rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(65,105,225,.08),transparent_70%)] blur-xl" />
    </div>
  );
}
