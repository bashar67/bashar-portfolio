"use client";
import services from "@/data/services-data.json";
import ServiceCard from "./ui/service-card";

const ServicesPage = () => {
  return (
    <section
      id="services"
      className="py-20 border-b-2 border-[var(--border)] bg-[var(--secondary)]/30 min-h-[500px]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-[var(--muted-foreground)] text-lg">What I offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title + index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
