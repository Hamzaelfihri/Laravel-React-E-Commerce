import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function About() {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
  ];

  const team = [
    { name: "Alex Martin", role: "CEO & Founder", initial: "A" },
    { name: "Sarah Chen", role: "Head of Technology", initial: "S" },
    { name: "Marcus Rivera", role: "Customer Experience", initial: "M" },
  ];

  const values = [
    { icon: "⚡", title: "Innovation First", desc: "We bring you the latest and greatest in electronics technology, always ahead of the curve." },
    { icon: "🛡️", title: "Trusted Quality", desc: "Every product is verified and tested to meet our strict quality standards before reaching you." },
    { icon: "💜", title: "Customer Obsessed", desc: "Your satisfaction is our mission. We go above and beyond to ensure an exceptional experience." },
    { icon: "🌍", title: "Global Reach", desc: "Serving customers worldwide with fast, reliable shipping and dedicated local support." },
  ];

  return (
    <AuthenticatedLayout>
      <Head title="About Us — HFElectronics" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .about-page { font-family: 'DM Sans', sans-serif; }
        .about-page h1, .about-page h2, .about-page h3 { font-family: 'Syne', sans-serif; }
        .hero-about { background: #0a0a0f; position: relative; overflow: hidden; }
        .hero-about::before { content: ''; position: absolute; top: -40%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%); pointer-events: none; }
        .stat-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); transition: all 0.3s ease; }
        .stat-card:hover { background: rgba(124,58,237,0.1); border-color: rgba(124,58,237,0.4); transform: translateY(-4px); }
        .value-card { border: 1px solid #e9e4ff; transition: all 0.3s ease; background: white; }
        .value-card:hover { border-color: #7c3aed; box-shadow: 0 8px 30px rgba(124,58,237,0.12); transform: translateY(-4px); }
        .team-card { transition: all 0.3s ease; }
        .team-card:hover { transform: translateY(-6px); }
        .about-badge { background: rgba(124,58,237,0.15); color: #7c3aed; border: 1px solid rgba(124,58,237,0.3); font-family: 'Syne', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 100px; display: inline-block; margin-bottom: 1.5rem; }
        .timeline-dot { width: 12px; height: 12px; background: #7c3aed; border-radius: 50%; border: 3px solid #ede9fe; flex-shrink: 0; margin-top: 4px; }
      `}</style>

      <div className="about-page">
        <section className="hero-about py-28 px-4">
          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <div className="about-badge">About HFElectronics</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Technology That<br /><span style={{ color: '#a78bfa' }}>Moves You Forward</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              We are a passionate team of tech enthusiasts dedicated to bringing you the finest electronics — from the latest iPhones to cutting-edge gadgets.
            </p>
          </div>
        </section>

        <section style={{ background: '#0a0a0f', paddingBottom: '5rem' }}>
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card rounded-2xl p-6 text-center">
                  <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="about-badge">Our Story</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Born From a Passion for Technology</h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  {["Founded in 2020, HFElectronics started as a small online store with a simple vision: make premium electronics accessible to everyone.", "We quickly grew into a trusted destination for Apple products, offering genuine iPhones from the iPhone 8 all the way to the latest iPhone 17 lineup.", "Today, we serve thousands of satisfied customers worldwide, maintaining our commitment to quality, authenticity, and exceptional service."].map((text, i) => (
                    <div key={i} className="flex gap-4"><div className="timeline-dot"></div><p>{text}</p></div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)', padding: '3px', borderRadius: '1.5rem' }}>
                <div className="bg-gray-50 p-10 text-center" style={{ borderRadius: '1.4rem' }}>
                  <div className="text-8xl mb-4">📱</div>
                  <p className="text-gray-700 font-medium text-lg">Apple Authorized Reseller</p>
                  <p className="text-gray-500 text-sm mt-2">Every product 100% authentic & warranted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4" style={{ background: '#f8f6ff' }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="about-badge">What We Stand For</div>
              <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="value-card rounded-2xl p-8">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="about-badge">The People Behind It</div>
              <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="team-card text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                    {member.initial}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-medium" style={{ color: '#7c3aed' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4" style={{ background: '#0a0a0f' }}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore Our Collection?</h2>
            <p className="text-gray-400 text-lg mb-8">Browse hundreds of premium electronics and find your perfect device today.</p>
            <a href="/shop" className="inline-block px-10 py-4 rounded-full text-white font-semibold text-lg" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
              Shop Now →
            </a>
          </div>
        </section>
      </div>
    </AuthenticatedLayout>
  );
}