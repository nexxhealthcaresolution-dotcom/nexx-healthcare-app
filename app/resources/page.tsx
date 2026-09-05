const articles = [
  {
    title: "What Is NABH Accreditation? A Complete Guide for Hospitals",
    summary:
      "Learn what NABH accreditation means, why it matters for patient safety, and how it affects your eligibility for empanelments like CGHS, ECHS, and PMJAY.",
  },
  {
    title: "Step-by-Step NABH Entry Level Certification Process",
    summary:
      "A breakdown of the NABH Entry Level certification journey, from initial gap analysis to final assessment, along with realistic timelines.",
  },
  {
    title: "NABL vs NABH: What Is the Difference?",
    summary:
      "NABL and NABH sound similar but apply to different facilities. Understand which accreditation your hospital, clinic, or lab actually needs.",
  },
  {
    title: "How Long Does Accreditation or Empanelment Usually Take?",
    summary:
      "Timelines vary based on facility readiness and documentation. Here is a realistic look at what to expect at each stage of the process.",
  },
  {
    title: "5 Common Mistakes Hospitals Make During Accreditation",
    summary:
      "From incomplete documentation to rushed staff training, these are the most frequent pitfalls that delay accreditation, and how to avoid them.",
  },
  {
    title: "CGHS vs ECHS vs TPA Empanelment: Which One Do You Need?",
    summary:
      "A simple explainer on the differences between CGHS, ECHS, and TPA empanelment, and why many facilities pursue more than one.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <a href="/">
          <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <a href="/#services" className="hover:text-accent transition">Services</a>
          <a href="/contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <img src="/nexx-logo-secondary.png" alt="Nexx Healthcare Solution" className="h-16 w-auto" />
      </header>

      <section className="bg-gradient-to-br from-accent to-accent-dark py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Learn About Accreditation & Compliance
        </h1>
        <p className="text-white/85 mt-4 max-w-2xl mx-auto px-8">
          Short, practical guides to help you understand NABH, NABL, and empanelment
          processes, whether you are just getting started or already underway.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div
              key={a.title}
              className="bg-card rounded-2xl p-6 border border-accent/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent font-bold">
                📘
              </div>
              <h3 className="font-semibold text-lg mb-2 leading-snug">{a.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{a.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 pb-20">
        <div className="bg-accent-dark rounded-3xl px-10 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Have a Specific Question?
          </h2>
          <p className="text-white/80 mb-6">
            Our team is happy to walk you through anything not covered here.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-accent-dark font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
          >
            Contact Us
          </a>
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
