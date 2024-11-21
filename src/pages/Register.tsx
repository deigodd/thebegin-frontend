import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/background-home.svg";
import logo from "../assets/icons/svg/tb-icon-fill-orange.svg";
import { Select } from "flowbite-react";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar la lista de países");
        }
        return response.json();
      })
      .then((data) => {
        const countryOptions = data.countries.map(
          (country: { value: string; label: string }) => country.label
        );
        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error al cargar los países:", error);
      });
  }, []);

  const handleNext = () => {
    if (validateStep()) {
      if (step === 3) {
        // Si estás en el último paso, envía el formulario
        console.log("Enviando formulario:", formData);
        // Aquí puedes realizar la lógica de envío, como una llamada a una API
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateStep = () => {
    let formIsValid = true;
    const newErrors: { [key: string]: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      // Validación para los campos del primer paso
      if (!formData.firstName) {
        formIsValid = false;
        newErrors.firstName = "El nombre es requerido.";
      }
      if (!formData.lastName) {
        formIsValid = false;
        newErrors.lastName = "El apellido es requerido.";
      }
      if (!formData.birthDate) {
        formIsValid = false;
        newErrors.birthDate = "La fecha de nacimiento es requerida.";
      }
      if (!formData.phone) {
        formIsValid = false;
        newErrors.phone = "El teléfono es requerido.";
      }
      if (!formData.email) {
        formIsValid = false;
        newErrors.email = "El correo electrónico es requerido.";
      } else if (!emailRegex.test(formData.email)) {
        formIsValid = false;
        newErrors.email = "Introduce un correo electrónico válido";
      }
    }

    if (step === 2) {
      // Validación para el paso de la contraseña
      if (!formData.password) {
        formIsValid = false;
        newErrors.password = "La contraseña es requerida.";
      } else if (formData.password.length < 6) {
        formIsValid = false;
        newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      }
    }

    if (step === 3) {
      // Validación para la confirmación de la contraseña
      if (formData.password !== formData.confirmPassword) {
        formIsValid = false;
        newErrors.confirmPassword = "Las contraseñas no coinciden.";
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      // Lógica de envío del formulario
      console.log("Formulario enviado con éxito:", formData);
      console.log("Redirigiendo al inicio de sesión...");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <a href="/">
              <img alt="The Begin" src={logo} className="mx-auto h-24 w-auto" />
            </a>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Crea una nueva cuenta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border rounded-lg p-10">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-tbc-pilarorange-600 bg-tbc-pilarorange-200">
                    Paso {step} de 3
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-tbc-pilarorange-200">
                <div
                  style={{ width: `${(step / 3) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tbc-pilarorange-600"
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {step === 1 && (
                <div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nombre
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.firstName
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Apellido
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.lastName
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.birthDate
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.birthDate && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.birthDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.phone
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.email
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-900"
                      >
                        País
                      </label>
                      <Select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleSelectChange}
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.country
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      >
                        <option value="">Selecciona tu país</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </Select>
                      {errors.country && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Ciudad
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.city
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                        errors.password
                          ? "border-red-500 ring-red-500 focus:ring-red-500"
                          : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                      }`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Confirmar contraseña
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                        errors.confirmPassword
                          ? "border-red-500 ring-red-500 focus:ring-red-500"
                          : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm font-medium text-gray-900 hover:text-gray-700"
                  >
                    Volver
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-tbc-pilarorange-600 hover:bg-tbc-pilarorange-700 rounded-md"
                >
                  {step === 3 ? "Enviar" : "Siguiente"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
