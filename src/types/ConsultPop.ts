import { useState } from 'react';

const ConsultPop = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Realizar la solicitud POST al backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName('');
        setMessage('');
      } else {
        setError(data.message || 'Hubo un error al enviar el mensaje');
      }
    } catch (err) {
      setError('Hubo un error al enviar el mensaje');
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    message,
    setName,
    setMessage,
    loading,
    success,
    error,
    handleSubmit,
  };
};

export default ConsultPop;
