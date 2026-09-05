import { services } from "../../services-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <a href="/">
          <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <a href="/#services" className="hover:text-accent transition">Services</a>
          <a href="/#why" className="hover:text-accent transition">Why Nexx</a>
          <a href="/contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <img src="/nexx-logo-secondary.png" alt="Nexx Healthcare Solution" className="h-16 w-auto" />
      </header>

      <section className="bg-gradient-to-br from-accent to-accent-dark py-16">
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-white/70 text-sm mb-2">
            <a href="/#services" className="hover:underline">Services</a> / {service.title}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{service.title}</h1>
          <p className="text-white/85 mt-4 max-w-2xl">{service.shortDesc}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted leading-relaxed mb-10">{service.overview}</p>

          <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
          <ol className="space-y-4">
            {service.process.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </span>
                <p className="text-foreground/90 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="bg-card rounded-2xl p-6 border border-accent/10">
            <h3 className="font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted">
                  <span className="text-accent">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-6 block text-center bg-accent text-white font-medium px-5 py-3 rounded-full hover:bg-accent-dark transition"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-accent/15 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-32 w-auto" />
          <p className="text-muted text-sm">© 2026 Nexx Healthcare Solution. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
