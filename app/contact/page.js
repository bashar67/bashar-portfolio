"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

import Input from "@/components/ui/Input";

const FooterPage = dynamic(() => import("@/components/footer"), {
  ssr: false,
});

const ContactPage = () => {
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_0p4cnt7",
        "template_wglmw27",
        form.current,
        "332wzwH9Z3fNpTcGV"
      )
      .then(
        () => {
          if (form.current) {
            setMessageSent(true);
            setTimeout(() => {
              setMessageSent(false);
            }, 3000);
            form.current.reset();
          }
        },
        (error) => {
          setMessageError(true);
          setTimeout(() => {
            setMessageError(false);
          }, 3000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <section id="contact" className="py-10 bg-[var(--secondary)]/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              Get in touch
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

                <div className="flex items-center space-x-4">
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

            <div
              className="animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />

                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  required
                />

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="bg-[var(--card)] border-[var(--border)]/50 placeholder:text-[var(--muted-foreground) text-[var(--muted-foreground)] min-h-[120px]  flex  w-full rounded-md border px-3 py-2 text-sm focus:border-[var(--primary)] focus:bg-[var(--secondary)]
    transition-colors duration-200 disabled:opacity-50  "
                    required
                  />
                </div>
                {/*disable the submit button during processing.  */}
                <button
                  disabled={isSending}
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--primary)] text-[var(--muted)] p-4 text-2xl font-medium  rounded-md  hover:opacity-90 transition-opacity border border-[var(--border)] cursor-pointer "
                >
                  {isSending ? "Sending..." : "Send Message →"}
                </button>
              </form>
              <div className="mx-p" style={{ minHeight: "56px" }}>
                {messageError && (
                  <div className="w-full  text-lg text-center text-gray-900 bg-rose-600 font-semibold py-2 my-6 rounded-sm">
                    Failed to send message. Please try again later.
                  </div>
                )}

                {messageSent && (
                  <div className="w-full  text-lg text-center text-gray-900 bg-green-500 font-semibold py-2 my-6 rounded-sm">
                    Email sent successfully.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default ContactPage;
