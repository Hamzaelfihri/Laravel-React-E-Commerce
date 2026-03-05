import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-white border-2 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all duration-200 ${
      focused === field ? "border-purple-600 shadow-md shadow-purple-100" : "border-gray-200"
    }`;

  return (
    <AuthenticatedLayout>
      <Head title="Contact Us — HFElectronics" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .contact-page { font-family: 'DM Sans', sans-serif; }
        .contact-page h1, .contact-page h2, .contact-page h3 { font-family: 'Syne', sans-serif; }
        .contact-hero { background: #0a0a0f; position: relative; overflow: hidden; }
        .contact-hero::before { content: ''; position: absolute; top: -30%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%); pointer-events: none; }
        .contact-hero::after { content: ''; position: absolute; bottom: -20%; left: -5%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%); pointer-events: none; }
        .contact-badge { background: rgba(124,58,237,0.15); color: #7c3aed; border: 1px solid rgba(124,58,237,0.3); font-family: 'Syne', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 100px; display: inline-block; margin-bottom: 1.5rem; }
        .info-card { background: white; border: 1px solid #ede9fe; border-radius: 1rem; padding: 1.5rem; transition: all 0.3s ease; }
        .info-card:hover { border-color: #7c3aed; box-shadow: 0 8px 30px rgba(124,58,237,0.1); transform: translateY(-3px); }
        .send-btn { background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white; border: none; padding: 14px 36px; border-radius: 12px; font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; width: 100%; }
        .send-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(124,58,237,0.35); }
        .faq-item { border: 1px solid #ede9fe; border-radius: 1rem; padding: 1.25rem 1.5rem; background: white; transition: all 0.3s ease; }
        .faq-item:hover { border-color: #7c3aed; }
      `}</style>

      <div className="contact-page">

        {/* Hero */}
        <section className="contact-hero py-24 px-4">
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <div className="contact-badge">Get In Touch</div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              We'd Love to<br />
              <span style={{ color: '#a78bfa' }}>Hear From You</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Have a question about a product, an order, or just want to say hello? Our team is here for you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4" style={{ background: '#f8f6ff' }}>
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: "📧", title: "Email Us", detail: "support@hfelectronics.com", sub: "Reply within 24 hours" },
                { icon: "📞", title: "Call Us", detail: "+33 430 123-4567", sub: "Mon–Fri, 9am–6pm" },
                { icon: "📍", title: "Visit Us", detail: "123 Tech Avenue, PR", sub: "PARIS, FRANCE 10001" },
              ].map((info, i) => (
                <div key={i} className="info-card text-center">
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-purple-700 font-medium">{info.detail}</p>
                  <p className="text-gray-400 text-sm mt-1">{info.sub}</p>
                </div>
              ))}
            </div>

            {/* Form + FAQ */}
            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-purple-600 font-medium underline">Send another message</button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-1 block">Name *</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className={inputClass("name")}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused("")}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-1 block">Email *</label>
                          <input
                            type="email"
                            placeholder="john@email.com"
                            className={inputClass("email")}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused("")}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Subject</label>
                        <input
                          type="text"
                          placeholder="Order inquiry, product question..."
                          className={inputClass("subject")}
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused("")}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Message *</label>
                        <textarea
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className={inputClass("message")}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused("")}
                        />
                      </div>
                      <button className="send-btn" onClick={handleSubmit}>
                        Send Message →
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Are all products genuine Apple products?", a: "Yes, every iPhone and Apple product we sell is 100% authentic and comes with official warranty." },
                    { q: "What is your return policy?", a: "We offer a 30-day return policy. If you're not satisfied, we'll make it right." },
                    { q: "How long does shipping take?", a: "Standard shipping takes 3–5 business days. Express delivery is available at checkout." },
                    { q: "Do you ship internationally?", a: "Yes, we ship worldwide. International orders typically arrive within 7–14 business days." },
                  ].map((faq, i) => (
                    <div key={i} className="faq-item">
                      <h4 className="font-semibold text-gray-900 mb-1">❓ {faq.q}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4" style={{ background: '#0a0a0f' }}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-400 text-lg mb-8">Browse our shop or reach out — we're always happy to help.</p>
            <a href="/shop" className="inline-block px-10 py-4 rounded-full text-white font-semibold text-lg" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
              Browse Products →
            </a>
          </div>
        </section>

      </div>
    </AuthenticatedLayout>
  );
}