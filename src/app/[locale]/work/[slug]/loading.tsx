export default function CaseStudyLoading() {
  return (
    <div className="site-container animate-pulse px-5 py-20 sm:px-8">
      <div className="h-64 rounded-3xl bg-[var(--surface)]" />
      <div className="mt-8 h-10 w-2/3 rounded bg-[var(--surface)]" />
      <div className="mt-4 h-24 w-full rounded bg-[var(--surface)]" />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="h-24 rounded-2xl bg-[var(--surface)]" />
        <div className="h-24 rounded-2xl bg-[var(--surface)]" />
        <div className="h-24 rounded-2xl bg-[var(--surface)]" />
      </div>
    </div>
  );
}
