import useInView from "@/hooks/use-in-view";

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`group bg-[var(--card)] rounded-2xl p-6 md:p-8 border border-[var(--border)]/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        aria-label="Icon"
        className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
      >
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">
        {service.title}
      </h3>
      <p className="text-[var(--muted-foreground)] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
