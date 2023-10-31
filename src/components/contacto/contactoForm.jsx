import React, { useRef, useState } from 'react';
import '../../styles/Contacto.css';
import emailjs from '@emailjs/browser';
import contactoInformacion from '../../assets/img/fotocontacto/contactoInformacion/contactoInformacion.png';

export default function App() {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rfg0t6h', 'template_ild8gaf', form.current, 'WjpkE8ySvdi5dcF4C')
      .then(
        (result) => {
          console.log(result.text);
          // reset form fields
          setUserName('');
          setUserEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="containerForm">
      <div className="formContainer">
        <h2 className="formTitle">¿Tienes alguna consulta?</h2>
        <p className="description">
          Envíanos un mensaje con tus consultas, sugerencias o comentarios <br></br> y te responderemos a la brevedad.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="input"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            className="input"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="input"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Enviar" className="customButton" />
        </form>
      </div>
      <div className="imageContainer">
        <img src={contactoInformacion} className="image" alt="..." />
      </div>
    </div>
  );
}
