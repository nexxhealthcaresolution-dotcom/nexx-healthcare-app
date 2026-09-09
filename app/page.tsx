import { services } from "./services-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto relative z-20 gap-6">
        <img src="/nexx-logo-secondary.png" alt="Nexx Healthcare Solution" className="h-16 w-auto shrink-0" />
        <nav className="hidden md:flex items-center gap-1 bg-card rounded-full p-1.5 border border-accent/10">
          <a href="#services" className="px-5 py-2 rounded-full text-sm font-medium text-foreground/70 hover:bg-white hover:text-accent hover:shadow-sm transition-all">Services</a>
          <a href="#why" className="px-5 py-2 rounded-full text-sm font-medium text-foreground/70 hover:bg-white hover:text-accent hover:shadow-sm transition-all">Why Nexx</a>
          <a href="/resources" className="px-5 py-2 rounded-full text-sm font-medium text-foreground/70 hover:bg-white hover:text-accent hover:shadow-sm transition-all">Resources</a>
          <a href="/contact" className="px-5 py-2 rounded-full text-sm font-medium text-white bg-accent hover:bg-accent-dark transition-all">Contact</a>
        </nav>
        <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-20 w-auto shrink-0" />
      </header>

      {/* Top contact strip */}
      <div className="bg-accent-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-8 py-2 flex flex-wrap justify-center md:justify-between items-center gap-2">
          <div className="flex flex-wrap gap-6">
            <a href="tel:+918208590648" className="hover:text-white/80 transition">📞 +91-8208590648</a>
            <a href="tel:+919324622727" className="hover:text-white/80 transition">📞 +91-9324622727</a>
            <a href="mailto:nexxhealthcaresolution@gmail.com" className="hover:text-white/80 transition">✉️ nexxhealthcaresolution@gmail.com</a>
          </div>
          <p className="hidden md:block text-white/80">📍 F-19/92 Rohini Sector-15, Delhi 110089</p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-block bg-accent/10 text-accent font-medium px-4 py-1.5 rounded-full text-sm mb-5">
              Healthcare Accreditation & Compliance Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Accreditation, Empanelment &{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                Healthcare Quality
              </span>{" "}
              Solutions Under One Roof
            </h1>
            <p className="text-lg text-muted mt-6 leading-relaxed">
              Nexx Healthcare Solution helps hospitals, clinics, diagnostic labs, and AYUSH
              centres achieve NABH, NABL, PMJAY, CGHS, ECHS and TPA empanelment through a
              structured, practical, and result-driven approach.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/contact" className="bg-accent text-white font-medium px-7 py-3.5 rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Free Consultation
              </a>
              <a href="#services" className="border-2 border-accent text-accent font-medium px-7 py-3.5 rounded-full hover:bg-accent/5 transition">
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                alt="Hospital corridor"
                className="rounded-2xl object-cover h-64 w-full col-span-2 shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80"
                alt="Doctor reviewing documents"
                className="rounded-2xl object-cover h-40 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400&q=80"
                alt="Medical team consultation"
                className="rounded-2xl object-cover h-40 w-full shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 border border-accent/10">
              <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-sm">50+ Facilities</p>
                <p className="text-muted text-xs">Successfully accredited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three feature highlight cards */}
      <section className="max-w-7xl mx-auto px-8 pb-20 pt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Free Virtual Gap Analysis",
              desc: "Start your journey with a free gap analysis for NABH, NABL, and empanelment readiness.",
              icon: "🔍",
              bg: "bg-blue-50",
            },
            {
              title: "Accreditation & Empanelment Experts",
              desc: "Structured guidance for NABH, NABL, PMJAY, CGHS, ECHS, TPA empanelment, and quality systems.",
              icon: "🎯",
              bg: "bg-sky-50",
            },
            {
              title: "End-to-End Healthcare Solutions",
              desc: "From documentation and training to manpower support and final approval.",
              icon: "⚙️",
              bg: "bg-indigo-50",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-2xl p-8 border border-accent/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="bg-card py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80"
              alt="Hospital accreditation consulting team"
              className="rounded-3xl object-cover w-full h-[420px] shadow-2xl"
            />
            <div className="absolute -top-5 -right-5 bg-accent text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold">12+</p>
              <p className="text-xs text-white/80">Compliance Domains</p>
            </div>
          </div>
          <div>
            <p className="text-accent font-medium uppercase text-sm tracking-wide mb-3">
              About Nexx Healthcare Solution
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Transforming Healthcare Quality Through Accreditation and Compliance
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Nexx Healthcare Solution is a healthcare consultancy specializing in NABH,
              NABL, PMJAY, CGHS, ECHS, TPA empanelment, AYUSH certification, and
              healthcare quality systems for hospitals, clinics, diagnostic labs, and
              wellness centres.
            </p>
            <div className="space-y-5">
              {[
                { n: "01", title: "Gap Analysis & Compliance Roadmap", desc: "We identify gaps and provide a clear, actionable roadmap for compliance." },
                { n: "02", title: "Documentation & SOP Development", desc: "Complete policies, SOPs, and compliance documentation aligned with real workflows." },
                { n: "03", title: "Implementation, Training & Manpower", desc: "On-ground execution through staff training and continuous guidance." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 items-start">
                  <span className="text-accent/30 font-bold text-2xl leading-none">{item.n}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase text-sm tracking-wide mb-3">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Full-Spectrum Healthcare Accreditation and Compliance Consulting
            </h2>
            <p className="text-muted mt-4">
              One partner for every certification, empanelment, and compliance requirement your facility needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white border border-accent/15 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-lg text-accent-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{service.shortDesc}</p>
                <span className="text-accent text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </a>
            ))}
            <div className="relative bg-card border border-accent/15 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-sm mb-4">
                +
              </div>
              <h3 className="font-semibold text-lg text-accent-dark mb-2">And Many More</h3>
              <p className="text-muted text-sm leading-relaxed">
                New certifications and compliance services added as regulations evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="bg-gradient-to-b from-card to-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase text-sm tracking-wide mb-3">
              Why Choose Nexx Healthcare Solution
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Structured Guidance. Practical Implementation. Proven Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare consulting and accreditation meeting"
                className="rounded-3xl object-cover w-full h-[400px] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-accent/10">
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-muted text-xs">Client Commitment</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "End-to-End Accreditation & Empanelment Support",
                  desc: "From gap analysis to final accreditation, empanelment approvals, and post-support, we manage the complete journey.",
                },
                {
                  title: "Practical Implementation & Manpower Support",
                  desc: "We do not just advise. Our team implements systems on the ground with trained manpower.",
                },
                {
                  title: "Multi-Domain Expertise Under One Roof",
                  desc: "One team fluent in NABH, NABL, PMJAY, CGHS, ECHS, TPA, AYUSH and more.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gradient-to-r from-accent-dark via-accent to-accent-dark py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "50+", label: "Facilities Guided" },
            { stat: "12+", label: "Compliance Domains" },
            { stat: "4-6", label: "Months Avg. Timeline" },
            { stat: "100%", label: "Client Commitment" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-4xl md:text-5xl font-bold text-white drop-shadow">{item.stat}</p>
              <p className="text-white/80 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center py-16 bg-background">
        <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-48 w-auto" />
      </div>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium uppercase text-sm tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            What Healthcare Organizations Say About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote:
                "Nexx Healthcare Solution guided us through every stage of our accreditation with clarity and professionalism. Their structured approach made a complex process manageable.",
              name: "Dr. Anjali Sharma",
              role: "Medical Director, City Care Hospital",
              initials: "AS",
            },
            {
              quote:
                "Their hands-on support during implementation was the difference. The team stayed with us until every compliance requirement was fully met.",
              name: "Rakesh Verma",
              role: "GM Operations, Sunrise Diagnostics",
              initials: "RV",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 border border-accent/10 shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <span className="absolute top-6 right-8 text-6xl text-accent/10 font-serif leading-none">&rdquo;</span>
              <p className="text-foreground/90 leading-relaxed mb-6 relative">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-accent-dark">{t.name}</p>
                  <p className="text-muted text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-3xl px-10 py-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white/5 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 relative">
            Start Your Accreditation & Empanelment Journey
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-10 relative">
            Get a free consultation with our healthcare compliance experts and find out
            exactly what your facility needs.
          </p>

          <div className="relative grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 text-left">
            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-2">Call Us</p>
              <a href="tel:+918208590648" className="block text-white font-medium hover:underline">+91-8208590648</a>
              <a href="tel:+919324622727" className="block text-white font-medium hover:underline">+91-9324622727</a>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-2">Email Us</p>
              <a href="mailto:nexxhealthcaresolution@gmail.com" className="block text-white font-medium hover:underline break-words">
                nexxhealthcaresolution@gmail.com
              </a>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-2">Visit Us</p>
              <p className="text-white font-medium leading-snug">
                F-19/92 Rohini Sector-15, Delhi 110089
              </p>
            </div>
          </div>

          <a href="/contact" className="inline-block bg-white text-accent-dark font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all relative">
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/15 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-40 w-auto" />
            <div className="text-muted text-sm space-y-1 text-center md:text-left">
              <p>📞 +91-8208590648 &nbsp;|&nbsp; +91-9324622727</p>
              <p>✉️ nexxhealthcaresolution@gmail.com</p>
              <p>📍 F-19/92 Rohini Sector-15, Delhi 110089</p>
              <p><a href="/resources" className="hover:text-accent">Resources</a> &nbsp;|&nbsp; <a href="/contact" className="hover:text-accent">Contact</a></p>
            </div>
          </div>
          <p className="text-muted text-sm">
            © 2026 Nexx Healthcare Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
