import React, { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: { 
    name: string; 
    email: string; 
    phone: string; 
    subject: string; 
    message: string
   }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-6 bg-tbc-secondarygreen-400/80 border border-white-200 rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            className="block uppercase tracking-wide font-serif font-semibold text-white mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-white-100 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tbc-secondarygreen-600 focus:ring-2 focus:ring-tbc-secondarygreen-500"
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide font-serif font-semibold text-white mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            className="appearance-none block w-full bg-white-100 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tbc-secondarygreen-600 focus:ring-2 focus:ring-tbc-secondarygreen-500"
            id="email"
            name="email"
            type="email"
            placeholder="correo@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide font-serif font-semibold text-white mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className="appearance-none block w-full bg-white-100 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tbc-secondarygreen-600 focus:ring-2 focus:ring-tbc-secondarygreen-500"
            id="phone"
            name="phone"
            type="tel"
            placeholder="987654321"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide font-serif font-semibold text-white mb-2"
            htmlFor="subject"
          >
            Asunto
          </label>
          <input
            className="appearance-none block w-full bg-white-100 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tbc-secondarygreen-600 focus:ring-2 focus:ring-tbc-secondarygreen-500"
            id="subject"
            name="subject"
            type="text"
            placeholder="Asunto de la consulta"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide font-serif font-semibold text-white mb-2"
            htmlFor="message"
          >
            Consulta
          </label>
          <textarea
            className="appearance-none block w-full bg-white-100 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tbc-secondarygreen-600 focus:ring-2 focus:ring-tbc-secondarygreen-500"
            id="message"
            name="message"
            placeholder="Escribe tu consulta aquí..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-tbc-secondarygreen-600 text-white font-bold py-3 px-4 rounded transition-all duration-200 transform hover:bg-tbc-secondarygreen-500 hover:-translate-y-1 active:translate-y-1 focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

