/* eslint-disable no-undef */
import React, { useRef } from 'react';
import '../styles/Contacto.css'
import {
  /* MDBInput,
  MDBBtn */
} from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';
import contactoInformacion from '../assets/img/fotocontacto/contactoInformacion/contactoInformacion.png';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row', // Cambiado a 'row' para la versión de escritorio
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
    formTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      margin: '1rem 1rem',
    },
    description: {
      fontSize: '1rem',
      marginBottom: '1rem',
      margin: '1rem 1rem',
    },
    
    input: {
      margin: '1rem 1rem',
      
      width: '80%',
      border: '1px solid orange',
      padding: '0.5rem',
    },
    customButton: {
      backgroundColor: '#F7F2F0',
      border: '1px solid black',
      color: 'black',
      width: '50%',
      margin: '0.5rem 1rem',
      alignSelf: 'flex-start',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column', // Cambiado a 'column' para la versión móvil
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem', // Agregado margen superior para la versión móvil
        
      },
      image: {
        width: '130%', // Ajustado para ocupar todo el ancho en dispositivos móviles
        height: 'auto',
      },
  };
  export default function App() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8ngayvm', 'template_khv3pql', form.current, 'Nyrwo2jow47yrfnq6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className="containerForm" style={styles.container}>
        <div className="formContainer" style={styles.formContainer}>
          <h2 style={styles.formTitle}>¿Tienes alguna consulta?</h2>
          <p style={styles.description}>Envíanos un mensaje con tus consultas, sugerencias o comentarios y te responderemos a la brevedad.</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" style={styles.input} placeholder="Name" />
            <input type="email" name="user_email" style={styles.input} placeholder="Email" />
            <textarea name="message" style={styles.input} placeholder="Mensaje" />
            <input type="submit" value="Enviar" style={styles.customButton} />
          </form>
        </div>
        <div className="imageContainer" style={styles.imageContainer}>
          <img src={contactoInformacion} style={styles.image} alt='...' />
        </div>
      </div>
    );
    
  
  
  }