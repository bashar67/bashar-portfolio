// Input.tsx
"use client";
import { forwardRef } from "react";
import styles from "./input.module.css";

const Input = forwardRef(function InputComponent(
  { name, placeholder, type = "text", status, ...props },
  ref
) {
  const getStatusClass = () => {
    switch (status) {
      case "error":
        return styles.inputError;
      case "disabled":
        return styles.inputDisabled;
      case "focused":
        return styles.inputFocused;
      default:
        return "";
    }
  };

  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      ref={ref}
      {...props}
      className={`${styles.input} ${getStatusClass()}`}
    />
  );
});

Input.displayName = "Input";

export default Input;

// className="bg-[var(--card)] text-[var(--muted-foreground)]  placeholder:text-[var(--muted-foreground)] flex h-10 w-full rounded-md border border-[var(--input)] px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--muted)]   disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
//     focus:border-[var(--primary)] focus:bg-[var(--secondary)]
//     transition-colors duration-200"
