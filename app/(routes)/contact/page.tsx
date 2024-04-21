"use client"

// Importa los componentes y librerías necesarias
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import TransitionPage from "@/components/transition-page";

// Define el componente AboutMePage
const AboutMePage = () => {
    // Define los estados para los datos del formulario, los errores y si el formulario ha sido enviado
    interface FormData {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: Partial<FormData> = {};
        if (!formData.name.trim()) {
            errors.name = 'El nombre es requerido';
        }
        if (!formData.email.trim()) {
            errors.email = 'El correo electrónico es requerido';
        } else if (!isValidEmail(formData.email.trim())) {
            errors.email = 'El correo electrónico no es válido';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'El asunto es requerido';
        }
        if (!formData.message.trim()) {
            errors.message = 'El mensaje es requerido';
        }
        if (Object.keys(errors).length === 0) {
            emailjs.sendForm('service_icvuh6r', 'template_wndgzln', e.currentTarget, '_EYxDw9tr8T_sHL7W')
                .then((result) => {
                    console.log(result.text);
                    setSubmitted(true);
                })
                .catch((error) => {
                    console.error(error.text);
                });
        } else {
            setErrors(errors);
        }
    };

    // Función para validar el formato del correo electrónico
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Renderiza el componente
    return (
        <>
            {/* Transición de página */}
            <TransitionPage />
            {/* Contenedor de la página */}
            <ContainerPage>
                {/* Avatar */}
                <Avatar />
                {/* Título */}
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="font-bold text-secondary">
                        Contáctame
                    </span>
                </h1>
                {/* Formulario */}
                <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
                    {/* Campo: Nombre */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-400 focus:border-primary'} focus:outline-none`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    {/* Campo: Correo Electrónico */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-primary'} focus:outline-none`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    {/* Campo: Asunto */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-white-700">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 text-gray-900 ${errors.subject ? 'border-red-500' : 'border-gray-400 focus:border-primary'} focus:outline-none`}
                        />
                        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>
                    {/* Campo: Mensaje */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-white-700">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`mt-1 h-32 p-2 block w-full rounded-md border-gray-300 text-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-400 focus:border-primary'} focus:outline-none`}
                        ></textarea>
                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
                    >
                        Enviar
                    </button>
                    {/* Mensaje de confirmación de envío */}
                    {submitted && <p className="mt-2 text-green-600">El formulario fue enviado exitosamente.</p>}
                </form>
            </ContainerPage>
        </>
    );
}

// Exporta el componente AboutMePage
export default AboutMePage;
