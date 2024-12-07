import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background-home.svg";
import logo from "../assets/icons/svg/tb-icon-fill-orange.svg";
import Select from "react-select";

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
    profession: "",
    hobbies: [] as string[],
    abilities: [] as string[],
    interests: [] as string[],
    findings: [] as string[],
    shares: [] as string[],
    user: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [hobbies] = useState<string[]>([
    "Leer",
    "Viajar",
    "Cocinar",
    "Deportes",
    "Música",
    "Pintura",
    "Fotografía",
    "Jardinería",
    "Escritura",
    "Cine",
  ]);
  const [abilities] = useState<string[]>([
    "Liderazgo",
    "Comunicación efectiva",
    "Resolución de conflictos",
    "Empatía",
    "Gestión del tiempo",
    "Trabajo en equipo",
    "Creatividad",
    "Adaptabilidad",
    "Pensamiento crítico",
    "Negociación",
    "Planificación estratégica",
    "Mentoría",
    "Toma de decisiones",
    "Innovación",
    "Desarrollo profesional",
  ]);
  const [interests] = useState<string[]>([
    "Leer",
    "Viajar",
    "Cocinar",
    "Deportes",
    "Música",
    "Pintura",
    "Fotografía",
    "Jardinería",
    "Escritura",
    "Cine",
    "Tecnología",
    "Voluntariado",
    "Yoga",
    "Meditación",
    "Danza",
  ]);
  const [findings] = useState<string[]>([
    "Amistad",
    "Oportunidades de negocio",
    "Mentoría",
    "Colaboración en proyectos",
    "Red de apoyo",
    "Inspiración",
    "Conocimiento",
    "Eventos",
    "Voluntariado",
    "Actividades recreativas",
  ]);
  const [shares] = useState<string[]>([
    "Productos",
    "Salidas",
    "Trueque",
    "Amistad",
  ]);

  const navigate = useNavigate();

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
          (country: { value: string; label: string }) => ({
            value: country.value,
            label: country.label,
          })
        );
        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error al cargar los países:", error);
      });
  }, []);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 3) {
      navigate("/login");
    } else {
      setStep(step + 1);
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
      if (!formData.profession) {
        formIsValid = false;
        newErrors.profession = "La profesión es requerida.";
      }
      if (formData.hobbies.length === 0) {
        formIsValid = false;
        newErrors.hobbies = "Los hobbies son requeridos.";
      }
      if (formData.abilities.length === 0) {
        formIsValid = false;
        newErrors.abilities = "Las habilidades son requeridas.";
      }
      if (formData.interests.length === 0) {
        formIsValid = false;
        newErrors.interests = "Los intereses son requeridos.";
      }
      if (formData.findings.length === 0) {
        formIsValid = false;
        newErrors.findings = "Indica qué te gustaría encontrar.";
      }
      if (formData.shares.length === 0) {
        formIsValid = false;
        newErrors.shares = "Indica qué te gustaría compartir.";
      }
    }

    if (step === 3) {
      // Validación para la confirmación de la contraseña
      if (!formData.password) {
        formIsValid = false;
        newErrors.password = "La contraseña es requerida.";
      } else if (formData.password.length < 6) {
        formIsValid = false;
        newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      }
      if (!formData.user) {
        formIsValid = false;
        newErrors.password = "Un nombre de usuario es requerido.";
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      // Lógica de envío del formulario
      console.log("Formulario enviado con éxito:", formData);
      console.log("Redirigiendo al inicio de sesión...");

      try {
        const response = await fetch("http://localhost:3000/saveData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Datos guardados con éxito");
          // Redirigir al inicio de sesión o mostrar un mensaje de éxito
          alert("Datos guardados con éxito");
          navigate("/login");
        } else {
          console.error("Error al guardar los datos");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        value={countries.find(
                          (country) => country.value === formData.country
                        )}
                        onChange={(selectedOption) => {
                          setFormData({
                            ...formData,
                            country: selectedOption ? selectedOption.value : "",
                          });
                        }}
                        options={countries}
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.country
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
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
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="profession"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Profesión
                      </label>
                      <input
                        id="profession"
                        name="profession"
                        type="text"
                        value={formData.profession}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.email
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.profession && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.profession}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="hobbies"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Hobbies
                      </label>
                      <Select
                        id="hobbies"
                        name="hobbies"
                        value={formData.hobbies.map((hobby) => ({
                          value: hobby,
                          label: hobby,
                        }))}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            hobbies: selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [],
                          });
                        }}
                        options={hobbies.map((hobby) => ({
                          value: hobby,
                          label: hobby,
                        }))}
                        isMulti
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.hobbies
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.hobbies && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.hobbies}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="abilities"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Habilidades
                      </label>
                      <Select
                        id="abilities"
                        name="abilities"
                        value={formData.abilities.map((abilities) => ({
                          value: abilities,
                          label: abilities,
                        }))}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            abilities: selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [],
                          });
                        }}
                        options={abilities.map((abilities) => ({
                          value: abilities,
                          label: abilities,
                        }))}
                        isMulti
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.abilities
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.abilities && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.abilities}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="interests"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Intereses Personales
                      </label>
                      <Select
                        id="interests"
                        name="interests"
                        value={formData.interests.map((interests) => ({
                          value: interests,
                          label: interests,
                        }))}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            interests: selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [],
                          });
                        }}
                        options={interests.map((interests) => ({
                          value: interests,
                          label: interests,
                        }))}
                        isMulti
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.interests
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.interests && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.interests}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="findings"
                        className="block text-sm font-medium text-gray-900"
                      >
                        ¿Qué te gustaría encontrar?
                      </label>
                      <Select
                        id="findings"
                        name="findings"
                        isMulti
                        options={findings.map((finding) => ({
                          value: finding,
                          label: finding,
                        }))}
                        value={formData.findings.map((finding) => ({
                          value: finding,
                          label: finding,
                        }))}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            findings: selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [],
                          });
                        }}
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.findings
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.findings && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.findings}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="shares"
                        className="block text-sm font-medium text-gray-900"
                      >
                        ¿Qué deseas compartir?
                      </label>
                      <Select
                        id="shares"
                        name="shares"
                        isMulti
                        options={shares.map((share) => ({
                          value: share,
                          label: share,
                        }))}
                        value={formData.shares.map((share) => ({
                          value: share,
                          label: share,
                        }))}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            shares: selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [],
                          });
                        }}
                        classNamePrefix="react-select"
                        className={`block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.shares
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.shares && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.shares}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="user"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nombre de usuario
                      </label>
                      <input
                        id="user"
                        name="user"
                        type="text"
                        value={formData.user}
                        onChange={handleChange}
                        className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm ${
                          errors.user
                            ? "border-red-500 ring-red-500 focus:ring-red-500"
                            : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                        }`}
                      />
                      {errors.user && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.user}
                        </p>
                      )}
                    </div>
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
                  type={step === 3 ? "submit" : "button"} // Cambia a "submit" solo en el paso 3
                  onClick={step === 3 ? undefined : handleNext} // Evita interferir con el envío
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
