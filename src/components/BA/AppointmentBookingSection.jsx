"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CONSULTATION_CONTENT = {
  intro: {
    heading: ["Bespoke", "Consultation"],
    description:
      "Our architectural assessment begins with understanding your unique spatial aspirations. Select a preferred mode of engagement to initiate the dialogue.",
  },

  locations: [
    {
      id: "01",
      title: "New York Studio",
      address: ["150 5th Avenue, Suite 800", "NY 10011, USA"],
    },
    {
      id: "02",
      title: "Dubai Atelier",
      address: ["Gate Village 08, DIFC", "Dubai, UAE"],
    },
    {
      id: "03",
      title: "Mumbai Office",
      address: ["Lodha Excelus, Mahalaxmi", "Mumbai 400011, India"],
    },
  ],

  formSections: {
    personal: {
      number: "01.",
      heading: "Personal Details",
    },

    project: {
      number: "02.",
      heading: "Project Scope",
    },

    engagement: {
      number: "03.",
      heading: "Engagement Preferences",
    },
  },

  fields: {
    personal: [
      {
        id: "fullName",
        label: "Full Name",
        placeholder: "Jane Doe",
        type: "text",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        placeholder: "jane@example.com",
        type: "email",
        required: true,
      },
    ],

    project: [
      {
        id: "projectType",
        label: "Project Type",
        placeholder: "Select Type",
        type: "select",
        required: true,
        options: [
          { value: "residential", label: "Residential" },
          { value: "commercial", label: "Commercial" },
          { value: "hospitality", label: "Hospitality" },
        ],
      },

      {
        id: "budget",
        label: "Estimated Budget",
        placeholder: "Select Range",
        type: "select",
        required: true,
        options: [
          { value: "tier1", label: "$500k - $1M" },
          { value: "tier2", label: "$1M - $5M" },
          { value: "tier3", label: "$5M+" },
        ],
      },
    ],
  },

  engagementOptions: [
    {
      value: "virtual",
      label: "Virtual Consultation",
    },
    {
      value: "site",
      label: "Site Visit",
    },
  ],

  dateField: {
    id: "date",
    label: "Preferred Date",
    type: "date",
    required: true,
  },

  submitButton: "Request Appointment",
};

export default function AppointmentBookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    budget: "",
    meetingType: "virtual",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const inputClasses =
    'w-full bg-transparent border-0 border-b border-[#eee0d6]/20 rounded-none text-[#eee0d6] font-["Montserrat",sans-serif] text-sm min-[320px]:text-base py-3 px-0 focus:outline-none focus:border-[#e9c176] focus:ring-0 placeholder-[#eee0d6]/40 transition-colors duration-300';

  const labelClasses =
    'font-["Montserrat",sans-serif] text-[9px] min-[320px]:text-[10px] tracking-widest text-[#c4c7c7] uppercase mb-2 font-semibold';

  return (
    <motion.section
      className="max-w-[1440px] mx-auto px-3 min-[320px]:px-4 sm:px-6 md:px-20 py-16 min-[320px]:py-20 md:py-40 bg-[#18120d] text-[#eee0d6]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column */}
        <motion.div
          className="md:col-span-4 md:col-start-1 flex flex-col gap-10 sm:gap-12 pr-0 md:pr-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Introduction */}
          <div>
            <h2 className="font-['Playfair_Display',serif] text-2xl min-[320px]:text-3xl md:text-[32px] md:leading-[40px] font-normal mb-6 sm:mb-8 text-[#eee0d6]">
              {CONSULTATION_CONTENT.intro.heading.map((line, index) => (
                <React.Fragment key={line}>
                  {line}
                  {index <
                    CONSULTATION_CONTENT.intro.heading.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <p className="font-['Montserrat',sans-serif] text-sm min-[320px]:text-base leading-6 min-[320px]:leading-7 tracking-[0.02em] text-[#c4c7c7]">
              {CONSULTATION_CONTENT.intro.description}
            </p>
          </div>

          {/* Office Locations */}
          <div className="flex flex-col gap-6 min-[320px]:gap-8 border-t border-[#444748]/20 pt-6 min-[320px]:pt-8 font-['Montserrat',sans-serif]">
            {CONSULTATION_CONTENT.locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.12,
                }}
              >
                <span className="text-[10px] min-[320px]:text-xs font-semibold tracking-[0.15em] text-[#c4c7c7] uppercase block mb-2">
                  {location.title}
                </span>

                <p className="text-sm min-[320px]:text-base leading-6 min-[320px]:leading-7 text-[#eee0d6]">
                  {location.address.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < location.address.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="md:col-span-7 md:col-start-6 mt-8 min-[320px]:mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#211a15] p-4 min-[320px]:p-6 sm:p-8 md:p-12 border border-[#444748]/20 rounded-sm"
          >
            {/* Step 01: Personal Details */}
            <motion.div
              className="mb-8 min-[320px]:mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
            >
              <span className="font-['Montserrat',sans-serif] text-[10px] min-[320px]:text-xs font-semibold tracking-[0.12em] min-[320px]:tracking-[0.15em] text-[#e9c176] block mb-6 min-[320px]:mb-8 uppercase">
                {CONSULTATION_CONTENT.formSections.personal.number}{" "}
                {CONSULTATION_CONTENT.formSections.personal.heading}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-[320px]:gap-8">
                {CONSULTATION_CONTENT.fields.personal.map((field) => (
                  <div key={field.id} className="flex flex-col min-w-0">
                    <label className={labelClasses}>{field.label}</label>

                    <input
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder={field.placeholder}
                      type={field.type}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Step 02: Project Scope */}
            <motion.div
              className="mb-8 min-[320px]:mb-12 border-t border-[#444748]/20 pt-8 min-[320px]:pt-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
            >
              <span className="font-['Montserrat',sans-serif] text-[10px] min-[320px]:text-xs font-semibold tracking-[0.12em] min-[320px]:tracking-[0.15em] text-[#e9c176] block mb-6 min-[320px]:mb-8 uppercase">
                {CONSULTATION_CONTENT.formSections.project.number}{" "}
                {CONSULTATION_CONTENT.formSections.project.heading}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-[320px]:gap-8">
                {CONSULTATION_CONTENT.fields.project.map((field) => (
                  <div key={field.id} className="flex flex-col min-w-0">
                    <label className={labelClasses}>{field.label}</label>

                    <select
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                      required={field.required}
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#18120d] text-[#c4c7c7]"
                      >
                        {field.placeholder}
                      </option>

                      {field.options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-[#18120d] text-[#eee0d6]"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Step 03: Engagement Preferences */}
            <motion.div
              className="mb-8 min-[320px]:mb-12 border-t border-[#444748]/20 pt-8 min-[320px]:pt-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
            >
              <span className="font-['Montserrat',sans-serif] text-[10px] min-[320px]:text-xs font-semibold tracking-[0.12em] min-[320px]:tracking-[0.15em] text-[#e9c176] block mb-6 min-[320px]:mb-8 uppercase">
                {CONSULTATION_CONTENT.formSections.engagement.number}{" "}
                {CONSULTATION_CONTENT.formSections.engagement.heading}
              </span>

              {/* Meeting Type */}
              <div className="flex flex-col min-[400px]:flex-row gap-3 min-[320px]:gap-4 mb-8">
                {CONSULTATION_CONTENT.engagementOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex-1 cursor-pointer min-w-0"
                  >
                    <input
                      type="radio"
                      name="meetingType"
                      value={option.value}
                      checked={formData.meetingType === option.value}
                      onChange={handleChange}
                      className="peer sr-only"
                    />

                    <div className="p-3 min-[320px]:p-4 border border-[#eee0d6]/20 text-center peer-checked:border-[#e9c176] peer-checked:text-[#e9c176] text-[#eee0d6] transition-colors duration-300">
                      <span className="font-['Montserrat',sans-serif] text-[9px] min-[320px]:text-xs font-semibold tracking-[0.12em] min-[320px]:tracking-[0.15em] uppercase block break-words">
                        {option.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col min-w-0">
                <label className={labelClasses}>
                  {CONSULTATION_CONTENT.dateField.label}
                </label>

                <input
                  name={CONSULTATION_CONTENT.dateField.id}
                  value={formData[CONSULTATION_CONTENT.dateField.id]}
                  onChange={handleChange}
                  type={CONSULTATION_CONTENT.dateField.type}
                  className={`${inputClasses} uppercase`}
                  style={{ colorScheme: "dark" }}
                  required={CONSULTATION_CONTENT.dateField.required}
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="pt-6 min-[320px]:pt-8 flex justify-stretch min-[400px]:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
            >
              <button
                type="submit"
                className="w-full min-[400px]:w-auto bg-[#eee0d6] text-[#18120d] px-6 min-[320px]:px-8 min-[400px]:px-12 py-4 font-['Montserrat',sans-serif] text-[10px] min-[320px]:text-xs font-semibold tracking-[0.12em] min-[320px]:tracking-widest uppercase hover:bg-[#e9c176] transition-colors duration-300"
              >
                {CONSULTATION_CONTENT.submitButton}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}