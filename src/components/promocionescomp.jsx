import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/Promociones.css'; // Importar el archivo CSS para aplicar estilos personalizados
import PromocionesGalicia from '../assets/img/fotosPromociones/promocionGalicia.png';
import PromocionesNacion from '../assets/img/fotosPromociones/promocionBancoNacion.png';
import PromocionesAndes from '../assets/img/fotosPromociones/promocionClubAndes.png';
import PromocionesUniversitaria from '../assets/img/fotosPromociones/promocionuniversitaria.png';

const images = [
  {
    src: PromocionesGalicia,
    link: 'https://www.galicia.ar/personas/buscador-de-promociones',
  },
  {
    src: PromocionesNacion,
    link: 'https://www.bna.com.ar/Personas/DescuentosYPromociones/3995/semana-nacion-supermercados/',
  },
  {
    src: PromocionesAndes,
    link: 'https://www.losandespass.com.ar/',
  },
  {
    src: PromocionesUniversitaria,
    link: 'https://www.ciudaduniversitaria.gov.ar',
  },
];

function promocionescomp() {
  const cardStyle = {
    width: '35rem',
    margin: '4rem',
  };

  return (
    <div className="promocionescomp-container">
      <h1 className="promocionescomp-title custom-promocionescomp-title">
        <span>Promociones</span>
      </h1>
      <div className="promocionescomp-content">
        <Row xs={1} md={2} className="g-4">
          {images.slice(0, 2).map((item, index) => (
            <Col key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={item.src} />
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        <Row xs={1} md={2} className="g-4" style={{ marginTop: '2rem' }}>
          {images.slice(2).map((item, index) => (
            <Col key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={item.src} />
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default promocionescomp;

