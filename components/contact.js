"use client";
import { useRef, useState } from "react";

import Input from "@/components/ui/input/Input";

const ContactPage = () => {
  const form = useRef(null);
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: false,
    fieldErrors: {},
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, sending: true }));

    const data = new FormData(form.current);
    const name = data.get("user_name")?.trim();
    const email = data.get("user_email")?.trim();
    const subject = data.get("subject")?.trim();
    const message = data.get("message")?.trim();

    const errors = {};
    if (!name) errors.user_name = "error";
    if (!email || !email.includes("@")) errors.user_email = "error";
    if (!subject) errors.subject = "error";
    if (!message) errors.message = "error";

    if (Object.keys(errors).length > 0) {
      setStatus({
        sending: false,
        sent: false,
        error: false,
        fieldErrors: errors,
      });
      return;
    }

    setStatus({ ...status, fieldErrors: {} });

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        "service_0p4cnt7",
        "template_wglmw27",
        form.current,
        "332wzwH9Z3fNpTcGV"
      );
      form.current.reset();
      setStatus({ sending: false, sent: true, error: false, fieldErrors: {} });
      setTimeout(() => setStatus((prev) => ({ ...prev, sent: false })), 3000);
    } catch {
      setStatus({ sending: false, sent: false, error: true, fieldErrors: {} });
      setTimeout(() => setStatus((prev) => ({ ...prev, error: false })), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 border-b-2 border-[var(--border)] bg-[var(--secondary)]/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-[var(--muted-foreground)] text-lg">Get in touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-[var(--muted-foreground)]">
                    basharysry54@gmail.com
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-[var(--muted-foreground)]">Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="user_name"
                  placeholder="Name"
                  status={status.fieldErrors.user_name}
                  aria-label="Name"
                />
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  status={status.fieldErrors.user_email}
                  aria-label="Email"
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                status={status.fieldErrors.subject}
                aria-label="Subject"
              />

              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                className={`bg-[var(--card)] border-[var(--border)]/50 placeholder:text-[var(--muted-foreground)] text-[var(--muted-foreground)] min-h-[120px] w-full rounded-md border px-3 py-2 text-sm focus:border-[var(--primary)] focus:bg-[var(--secondary)] transition-colors duration-200 ${
                  status.fieldErrors.message
                    ? "border-red-500 text-red-500"
                    : ""
                }`}
              />

              <button
                type="submit"
                aria-label="Send Message"
                disabled={status.sending}
                className={`w-full bg-[var(--primary)] text-[var(--muted)] p-4 text-2xl font-medium rounded-md border border-[var(--border)] transition-opacity ${
                  status.sending
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:opacity-90 cursor-pointer"
                }`}
              >
                {status.sending ? "Sending..." : "Send Message →"}
              </button>
            </form>

            <div className="mx-p" style={{ minHeight: "56px" }}>
              {status.error && (
                <div className="text-lg text-center text-gray-900 bg-rose-600 font-semibold py-2 my-6 rounded-sm">
                  Failed to send message. Please try again later.
                </div>
              )}
              {status.sent && (
                <div className="text-lg text-center text-gray-900 bg-green-500 font-semibold py-2 my-6 rounded-sm">
                  Email sent successfully.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
