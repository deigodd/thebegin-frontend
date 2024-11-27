import React from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-tbc-primarybrown-100 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl text-tbc-primarybrown-600 font-semibold mb-4">Formulario de Contacto</h2>
        <form>
          <div className="mb-4 ">
            <label className="block text-sm text-tbc-primarybrown-600 font-medium mb-1" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-tbc-primarybrown-100 px-3 py-2 border text-tbc-primarybrown-600 border-black rounded-md"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-tbc-primarybrown-600 font-medium mb-1" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              id="message"
              className="w-full bg-tbc-primarybrown-100 px-3 py-2 border rounded-md text-tbc-primarybrown-600 border-black"
              rows={4}
              placeholder="Tu consulta"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 text-tbc-primarybrown-600 bg-white rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-tbc-primarybrown-600 rounded-md hover:bg-tbc-primarybrown-400"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
