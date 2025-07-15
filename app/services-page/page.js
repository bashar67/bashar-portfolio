const services = [
  {
    title: "Responsive Web Design",
    description:
      "I build websites that look great and work smoothly on all devices — desktops, tablets, and mobile phones.",
    icon: "💻",
  },
  {
    title: "Interactive UI Development",
    description:
      "Using modern JavaScript and frameworks like React, I develop dynamic and user-friendly interfaces that bring designs to life.",
    icon: "⚡",
  },
  {
    title: "Front-End Performance Optimization",
    description:
      "I improve loading speed, reduce layout shifts, and ensure a smooth user experience across browsers.",
    icon: "🚀",
  },
  {
    title: "API Integration",
    description:
      "I connect front-end applications to back-end APIs to deliver real-time, data-driven experiences.",
    icon: "🔗",
  },
];

const ServicesPage = () => {
  return (
    <section id="services" className="py-10 bg-[var(--secondary)]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-[var(--muted-foreground)] text-lg">What I offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-[var(--card)] rounded-2xl p-8 hover:bg-[var(--card-hover)] transition-all duration-300 hover:scale-105 animate-fade-in border border-[var(--border)]/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                {service.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
