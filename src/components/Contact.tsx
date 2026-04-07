"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-4">
            Let&apos;s Talk.
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg leading-relaxed">
            Have wildlife on your property? We&apos;ll assess the situation and
            provide a free, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-light mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
                  { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
                  { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "(555) 000-0000" },
                  { name: "address", label: "Property Address", type: "text", required: false, placeholder: "Your property address" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="sr-only">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 py-3 text-base outline-none focus:border-green-accent transition-colors bg-transparent placeholder:text-muted/50"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the wildlife situation..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-3 text-base outline-none focus:border-green-accent transition-colors bg-transparent placeholder:text-muted/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-dark hover:bg-green-700 text-white rounded-full px-10 py-4 text-base font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-semibold text-green-dark mb-8">
              IguanaMan
            </h3>

            <div className="space-y-6 text-muted">
              <p>
                <span className="block text-sm uppercase tracking-wider text-muted/60 mb-1">
                  Email
                </span>
                <a
                  href="mailto:info@iguanaman.com"
                  className="text-green-accent hover:text-green-dark transition-colors text-lg"
                >
                  info@iguanaman.com
                </a>
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wider text-muted/60 mb-1">
                  Phone
                </span>
                <a
                  href="tel:+15551234567"
                  className="text-lg hover:text-green-dark transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wider text-muted/60 mb-1">
                  Service Area
                </span>
                <span className="text-lg">
                  Florida Wide &mdash; The Keys, Palm Beach, Broward,
                  Miami-Dade &amp; North Florida
                </span>
              </p>
            </div>

            {/* Hours */}
            <div className="mt-10">
              <h4 className="font-semibold text-foreground mb-4">Hours</h4>
              <div className="space-y-2 text-muted text-sm">
                <div className="flex justify-between max-w-xs">
                  <span>Monday &ndash; Friday</span>
                  <span>7:00 AM &ndash; 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span>8:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>Emergency calls only</span>
                </div>
              </div>
            </div>

            {/* Emergency callout */}
            <div className="mt-10 bg-green-light rounded-xl p-6">
              <h4 className="font-semibold text-green-dark mb-2">
                Emergency Removal
              </h4>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Wildlife causing immediate danger? Call us directly for same-day
                emergency service.
              </p>
              <a
                href="tel:+15551234567"
                className="text-green-dark font-semibold text-lg hover:text-green-700 transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
