import React from 'react';
import portadaContacto from '../assets/img/fotocontacto/portadacontacto.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '5% 10%', // ajusta los márgenes laterales según tus necesidades
  },
  image: {
    width: '100%',
    height: 'auto',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
};

export default function App() {
  return (
    <div style={styles.container}>
      <img src={portadaContacto} style={styles.image} alt='...' />
    </div>
  );
}
