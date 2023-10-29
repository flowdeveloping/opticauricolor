import React from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

import contactoInformacion from '../assets/img/fotocontacto/contactoInformacion/contactoInformacion.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // alinea los elementos horizontalmente al centro
    alignItems: 'center', // alinea los elementos verticalmente al centro
    height: '100vh', // ajusta la altura de acuerdo con tus necesidades
  },
  formContainer: {
    width: '40%',
    padding: '20px',
  },
  imageContainer: {
    width: '25%',
  },
  image: {
    width: '100%', // Ajusta el tamaño de la imagen según tus necesidades
    height: 'auto',
  },
  customButton: {
    backgroundColor: '#F7F2F0', // cambia el color de fondo del botón
    border: '1px solid black',
    color: 'black', // cambia el color del borde del botón
    width: '20%', // ajusta el ancho del botón
    margin: '0' // ajusta el margen del botón
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form>
          <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nombre' />
          <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
          <MDBInput type='form4Example1' id='form4Example2' wrapperClass='mb-4' label='Asunto' />
          <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mensaje' />

          <MDBBtn type='submit' className='mb-4' block style={styles.customButton}>
            Enviar
          </MDBBtn>
        </form>
      </div>
      <div style={styles.imageContainer}>
        <img src={contactoInformacion} style={styles.image} alt='...' />
      </div>
    </div>
  );
}
