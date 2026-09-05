export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <a href="/">
          <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <a href="/#services" className="hover:text-accent transition">Services</a>
          <a href="/#why" className="hover:text-accent transition">Why Nexx</a>
          <a href="/resources" className="hover:text-accent transition">Resources</a>
        </nav>
        <img src="/nexx-logo-secondary.png" alt="Nexx Healthcare Solution" className="h-16 w-auto" />
      </header>

      <section className="bg-gradient-to-br from-accent to-accent-dark py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">Get In Touch</h1>
        <p className="text-white/85 mt-4 max-w-xl mx-auto px-8">
          Reach out for a free consultation on NABH, NABL, PMJAY, CGHS, ECHS, TPA
          empanelment, or any other healthcare compliance requirement.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-5 gap-12">
        {/* Contact form */}
        <form className="md:col-span-3 bg-card rounded-2xl p-8 space-y-5">
          <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium block mb-1.5">Your Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
                placeholder="+91"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Email Address</label>
            <input
              type="email"
              className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Facility / Organization</label>
            <input
              type="text"
              className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
              placeholder="Hospital, clinic, or lab name"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Service Needed</label>
            <select className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent">
              <option>NABH Accreditation</option>
              <option>NABL Accreditation</option>
              <option>PMJAY Empanelment</option>
              <option>CGHS / ECHS Empanelment</option>
              <option>TPA Empanelment</option>
              <option>AYUSH Certification</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
              placeholder="Tell us about your facility and requirements"
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition"
          >
            Submit Request
          </button>
          <p className="text-xs text-muted">
            This form currently does not send automatically. Please also reach us directly using the details alongside.
          </p>
        </form>

        {/* Contact details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-accent/10">
            <p className="text-accent font-medium text-sm uppercase tracking-wide mb-2">Call Us</p>
            <a href="tel:+918208590648" className="block text-lg font-semibold hover:underline">+91-8208590648</a>
            <a href="tel:+919324622727" className="block text-lg font-semibold hover:underline">+91-9324622727</a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-accent/10">
            <p className="text-accent font-medium text-sm uppercase tracking-wide mb-2">Email Us</p>
            <a href="mailto:nexxhealthcaresolution@gmail.com" className="block font-semibold hover:underline break-words">
              nexxhealthcaresolution@gmail.com
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-accent/10">
            <p className="text-accent font-medium text-sm uppercase tracking-wide mb-2">Visit Us</p>
            <p className="font-semibold leading-relaxed">
              F-19/92 Rohini Sector-15,<br />Delhi 110089
            </p>
          </div>
          <div className="bg-accent-dark rounded-2xl p-6 text-white">
            <p className="font-semibold mb-1">Working Hours</p>
            <p className="text-white/80 text-sm">Mon – Sun: 8:00 AM – 8:00 PM</p>
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
