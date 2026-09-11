import { getPool, ensureSubmissionsTable } from "../lib/db";

export const dynamic = "force-dynamic";

type Submission = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  facility: string | null;
  service: string | null;
  message: string | null;
  created_at: string;
};

async function getSubmissions(): Promise<Submission[]> {
  await ensureSubmissionsTable();
  const db = getPool();
  const result = await db.query(
    "SELECT * FROM submissions ORDER BY created_at DESC"
  );
  return result.rows;
}

export default async function AdminPage() {
  const submissions = await getSubmissions();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-16 w-auto" />
        <h1 className="text-lg font-semibold">Contact Submissions</h1>
        <a href="/" className="text-sm text-accent hover:underline">Back to site</a>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-10">
        <p className="text-muted mb-6">
          {submissions.length} total submission{submissions.length !== 1 ? "s" : ""}
        </p>

        {submissions.length === 0 ? (
          <div className="bg-card rounded-2xl p-10 text-center text-muted">
            No submissions yet. They&apos;ll appear here as soon as someone fills out the contact form.
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div key={s.id} className="bg-white border border-accent/10 rounded-2xl p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                  <span className="text-muted text-sm">
                    {new Date(s.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted mb-3">
                  <p>📞 {s.phone}</p>
                  {s.email && <p>✉️ {s.email}</p>}
                  {s.facility && <p>🏥 {s.facility}</p>}
                  {s.service && <p>🩺 {s.service}</p>}
                </div>
                {s.message && (
                  <p className="text-foreground/90 bg-card rounded-lg p-3 text-sm">
                    {s.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
