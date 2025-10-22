"use client";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // limpia error al tipear
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Partial<FormData> = {};
    if (!formData.name.trim()) nextErrors.name = "El nombre es requerido";
    if (!formData.email.trim())
      nextErrors.email = "El correo electrónico es requerido";
    else if (!isValidEmail(formData.email.trim()))
      nextErrors.email = "El correo electrónico no es válido";
    if (!formData.subject.trim()) nextErrors.subject = "El asunto es requerido";
    if (!formData.message.trim())
      nextErrors.message = "El mensaje es requerido";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(
        "service_icvuh6r",
        "template_wndgzln",
        e.currentTarget,
        "_EYxDw9tr8T_sHL7W"
      );
      setSubmitted(true);
      // opcional: limpiar formulario
      setFormData({ name: "", email: "", subject: "", message: "" });
      (e.currentTarget as HTMLFormElement).reset?.();
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />

        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold text-black">
          Contáctame
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
          {/* Nombre */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Asunto */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-800"
            >
              Asunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full h-32 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-900 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={sending}
            className="mt-2 inline-flex items-center gap-2 rounded-xl px-5 py-3
                       bg-black text-white hover:bg-neutral-800
                       disabled:bg-neutral-400 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            {sending ? "Enviando…" : "Enviar"}
          </button>

          {submitted && (
            <p className="mt-3 text-sm text-green-600">
              El formulario fue enviado exitosamente.
            </p>
          )}
        </form>
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
