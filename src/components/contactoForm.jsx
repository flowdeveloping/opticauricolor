import React, { useRef } from 'react';
import '../styles/Contacto.css';
import emailjs from '@emailjs/browser';
import contactoInformacion from '../assets/img/fotocontacto/contactoInformacion/contactoInformacion.png';

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ngayvm', 'template_khv3pql', form.current, 'Nyrwo2jow47yrfnq6')
      .then(
        (result) => {
          console.log(result.text);
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
          <input type="text" name="user_name" className="input" placeholder="Name" />
          <input type="email" name="user_email" className="input" placeholder="Email" />
          <textarea name="message" className="input" placeholder="Mensaje" />
          <input type="submit" value="Enviar" className="customButton" />
        </form>
      </div>
      <div className="imageContainer">
        <img src={contactoInformacion} className="image" alt="..." />
      </div>
    </div>
  );
}
