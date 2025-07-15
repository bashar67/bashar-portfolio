const Input = ({ name, placeholder, type, ...props }, ref) => {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        ref={ref}
        {...props}
        className="bg-[var(--card)] text-[var(--muted-foreground)]  placeholder:text-[var(--muted-foreground)] flex h-10 w-full rounded-md border border-[var(--input)] px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--muted)]   disabled:cursor-not-allowed disabled:opacity-50 md:text-sm 
    focus:border-[var(--primary)] focus:bg-[var(--secondary)]
    transition-colors duration-200"
      />
    </div>
  );
};

export default Input;
