const ConsultForm = () => {

    //Retorna la card de consultas
    return (
      <div className="bg-[#EDE5D9] rounded-xl p-6 max-w-lg mx-auto">
        <h2 className="text-[#B5947B] text-3xl font-serif mb-2 text-center">Consultas</h2>
        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-black-200 rounded-lg bg-[#EDE5D9] focus:outline-none focus:ring-1 focus:ring-[#B5947B]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-black-200 rounded-lg bg-[#EDE5D9] focus:outline-none focus:ring-1 focus:ring-[#B5947B]"
          />
          <input
            type="tel"
            placeholder="Celular"
            className="w-full p-3 border border-black-200 rounded-lg bg-[#EDE5D9] focus:outline-none focus:ring-1 focus:ring-[#B5947B]"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-3 border border-black-200 rounded-lg bg-[#EDE5D9] focus:outline-none focus:ring-1 focus:ring-[#B5947B]"
          />
          <button className="w-full bg-[#B5947B] text-white py-2.5 rounded-lg hover:bg-[#9A7B66] transition-colors">
            Enviar
          </button>
        </form>
      </div>
    );
  };

  export default ConsultForm;