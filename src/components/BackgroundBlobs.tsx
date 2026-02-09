export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '1.5s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      <div
        className="absolute bottom-20 right-40 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '7s', animationDelay: '2.5s' }}
      />
    </div>
  );
}
