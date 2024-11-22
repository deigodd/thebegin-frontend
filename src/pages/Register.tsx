import React, { useState } from "react";
import backgroundImage from "../assets/background-home.svg";
import logo from "../assets/icons/svg/tb-icon-fill-orange.svg";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateStep = () => {
    let formIsValid = true;
    const newErrors: { [key: string]: string } = {};

    if (step === 1 && !email) {
      formIsValid = false;
      newErrors.email = "Introduce tu correo electrónico";
    }

    if (step === 2 && !password) {
      formIsValid = false;
      newErrors.password = "La contraseña es requerida.";
    } else if (step === 2 && password.length < 6) {
      formIsValid = false;
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (step === 3 && password !== confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      // Lógica de envío del formulario
      console.log("Formulario enviado con éxito:", { email, password });
    }
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
              Crea una nueva
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
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
                </div>
              )}

              {step === 2 && (
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
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
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Confirmar contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      autoComplete="current-password"
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

              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-400 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                  >
                    Atrás
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-md bg-tbc-pilarorange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-tbc-pilarorange-500 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tbc-pilarorange-600"
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-md bg-tbc-pilarorange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-tbc-pilarorange-500 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tbc-pilarorange-600"
                  >
                    Registrarse
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
