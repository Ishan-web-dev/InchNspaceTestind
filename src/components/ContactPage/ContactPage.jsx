"use client";

import { useState } from "react";
import { motion } from "framer-motion";



const CONTACT_DETAILS = [
  {
    title: "Enquiries",
    type: "links",
    items: [
      { text: "info@inchnspace.com ", href: "mailto:info@inchnspace.com" },
      { text: "", href: "tel:+" },
    ],
  },
  {
    title: "WhatsApp",
    type: "links",
    items: [{ text: "Message Us", href: "#" }],
  },
  {
    title: "Studio",
    type: "address",
    lines: [
      "Phoenix Market City Mall,",
      "Viman Nagar, Pune - 411014.",
      " Maharashtra.",
    ],
  },
];

const FORM_FIELDS = [
  {
    id: "row-1",
    type: "row",
    fields: [
      {
        id: "name",
        name: "name",
        label: "Name",
        type: "text",
        inputType: "input",
      },
      {
        id: "phone",
        name: "phone",
        label: "Phone Number",
        type: "tel",
        inputType: "input",
      },
    ],
  },
  {
    id: "row-2",
    type: "single",
    field: {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      inputType: "input",
    },
  },
  {
    id: "row-3",
    type: "row",
    fields: [
      {
        id: "type",
        name: "type",
        label: "Project Type",
        inputType: "select",
        options: [
          { label: "", value: "", disabled: true },
          { label: "Residential", value: "residential" },
          { label: "Commercial", value: "commercial" },
          { label: "Renovation", value: "renovation" },
        ],
      },
      {
        id: "area",
        name: "area",
        label: "Approx. Space / Area",
        type: "text",
        inputType: "input",
      },
    ],
  },
  {
    id: "row-4",
    type: "single",
    field: {
      id: "location",
      name: "location",
      label: "Property Location",
      type: "text",
      inputType: "input",
    },
  },
  {
    id: "row-5",
    type: "single",
    field: {
      id: "message",
      name: "message",
      label: "Message",
      inputType: "textarea",
      rows: 4,
    },
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    area: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const renderField = (field) => {
    if (field.inputType === "input") {
      return (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative group border-b border-[#c4c7c7]/20 focus-within:border-[#e9c176] transition-colors duration-300 pb-2"
        >
          <label
            htmlFor={field.id}
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] absolute -top-4 left-0 transition-all duration-300"
          >
            {field.label}
          </label>

          <input
            id={field.id}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            className="w-full bg-transparent border-none p-0 mt-4 text-[#eee0d6] focus:ring-0 text-base leading-7 tracking-[0.02em] font-normal"
          />
        </motion.div>
      );
    }

    if (field.inputType === "select") {
      return (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative group border-b border-[#c4c7c7]/20 focus-within:border-[#e9c176] transition-colors duration-300 pb-2"
        >
          <label
            htmlFor={field.id}
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] absolute -top-4 left-0 transition-all duration-300"
          >
            {field.label}
          </label>

          <select
            id={field.id}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full bg-transparent border-none p-0 mt-4 text-[#eee0d6] focus:ring-0 text-base leading-7 tracking-[0.02em] font-normal appearance-none cursor-pointer"
          >
            {field.options.map((opt, i) => (
              <option
                key={i}
                value={opt.value}
                disabled={opt.disabled}
                className="bg-[#302922] text-[#eee0d6]"
              >
                {opt.label}
              </option>
            ))}
          </select>

          <div className="absolute right-0 bottom-2 pointer-events-none text-[#c4c7c7]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      );
    }

    if (field.inputType === "textarea") {
      return (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative group border-b border-[#c4c7c7]/20 focus-within:border-[#e9c176] transition-colors duration-300 pb-2"
        >
          <label
            htmlFor={field.id}
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] absolute -top-4 left-0 transition-all duration-300"
          >
            {field.label}
          </label>

          <textarea
            id={field.id}
            name={field.name}
            rows={field.rows}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            className="w-full bg-transparent border-none p-0 mt-4 text-[#eee0d6] focus:ring-0 text-base leading-7 tracking-[0.02em] font-normal resize-none"
          />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="bg-[#18120d] text-[#eee0d6] min-h-screen flex flex-col antialiased selection:bg-[#e9c176] selection:text-[#1a1000]">
      {/* Main Content Area */}
      <main className="flex-grow relative">
        {/* Background Image Hero */}
        <motion.div
          className="absolute inset-0 z-0 h-[60vh] lg:h-[80vh] w-full bg-cover bg-center"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBtQSOuRfB5_HiN23dxdgtNZc6uJnGNLNNbf7VSnUwPCz7ZAIQxWIndkpQfcUXmRWNm8nxfWhpMoKECBbsJxXimlqqy0riLcncrtnBoZ95zGGatOws8gKZpWelvAdBzToHc6afH5QxMT6v_IJ2TXZ3wecTpbU71sSeF0C2Me9up-zcdzxthscyzZMKNw_zG3zsT0GCHbH8lD3tq4nGlyfG7z56sMwmrJeqxdBEggesdTmBbSxp1O1W')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#18120d]/40 via-[#18120d]/80 to-[#18120d]" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 pt-32 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Heading & Contact Info */}
            <motion.div
              className="col-span-1 lg:col-span-5 flex flex-col justify-between mb-16 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[84px] md:leading-[96px] tracking-[-0.02em] text-[#eee0d6] mb-6">
                  Start Your Project
                </h1>

                <p className="text-lg font-light leading-8 tracking-[0.03em] text-[#c4c7c7] max-w-md">
                  Let’s turn your vision into a beautifully designed and
                  professionally executed reality.
                </p>
              </div>

              <div className="mt-16 space-y-12">
                {CONTACT_DETAILS.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + idx * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#c4c7c7] mb-4">
                      {section.title}
                    </h3>

                    {section.type === "links" &&
                      section.items.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className={`text-lg font-light tracking-[0.03em] block hover:text-[#e9c176] transition-colors duration-300 ${
                            i > 0 ? "mt-2" : ""
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}

                    {section.type === "address" && (
                      <address className="text-lg font-light tracking-[0.03em] leading-relaxed not-italic">
                        {section.lines.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              className="col-span-1 lg:col-span-6 lg:col-start-7 bg-[#130d08] p-8 md:p-12 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {FORM_FIELDS.map((row) => {
                  if (row.type === "row") {
                    return (
                      <div
                        key={row.id}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                        {row.fields.map((field) => renderField(field))}
                      </div>
                    );
                  }

                  return renderField(row.field);
                })}

                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                >
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#eee0d6] text-[#121212] text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-4 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#eee0d6] hover:ring-1 hover:ring-[#e9c176]"
                  >
                    Request a Quote
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
