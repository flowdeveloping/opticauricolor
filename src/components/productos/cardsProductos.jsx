import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import AnteojosyProductos1 from '../../assets/img/fotosProductosCards/AnteojosyProductos/360.png'
import AnteojosyProductos2 from '../../assets/img/fotosProductosCards/AnteojosyProductos/adrianaCostantini.png'
import AnteojosyProductos3 from '../../assets/img/fotosProductosCards/AnteojosyProductos/airlight.png'
import AnteojosyProductos4 from '../../assets/img/fotosProductosCards/AnteojosyProductos/aloquevedo.png'
import AnteojosyProductos5 from '../../assets/img/fotosProductosCards/AnteojosyProductos/armaniexchange.png'
import AnteojosyProductos6 from '../../assets/img/fotosProductosCards/AnteojosyProductos/arnette.png'
import AnteojosyProductos7 from '../../assets/img/fotosProductosCards/AnteojosyProductos/aynotdeade.png'
import AnteojosyProductos8 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Bajitos.png'
import AnteojosyProductos9 from '../../assets/img/fotosProductosCards/AnteojosyProductos/binders.png'
import AnteojosyProductos10 from '../../assets/img/fotosProductosCards/AnteojosyProductos/bolle.png'
import AnteojosyProductos11 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Bulgari.png'
import AnteojosyProductos12 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Cacharel.png'
import AnteojosyProductos12b from '../../assets/img/fotosProductosCards/AnteojosyProductos/cebeproductos.png'
import AnteojosyProductos13 from '../../assets/img/fotosProductosCards/AnteojosyProductos/D&G.png'
import AnteojosyProductos14 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Deniro.png'
import AnteojosyProductos15 from '../../assets/img/fotosProductosCards/AnteojosyProductos/ElizabethArden.png'
import AnteojosyProductos16 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Emporio Armani.png'
import AnteojosyProductos17 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Fleur.png'
import AnteojosyProductos18 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Infinit.png'
import AnteojosyProductos19 from '../../assets/img/fotosProductosCards/AnteojosyProductos/KenBrisk.png'
import AnteojosyProductos20 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Max.png'
import AnteojosyProductos21 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Mira.png'
import AnteojosyProductos22 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Monkey.png'
import AnteojosyProductos23 from '../../assets/img/fotosProductosCards/AnteojosyProductos/OpticaCima.png'
import AnteojosyProductos24 from '../../assets/img/fotosProductosCards/AnteojosyProductos/OptoVision.png'
import AnteojosyProductos25 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Oshkosh.png'
import AnteojosyProductos26 from '../../assets/img/fotosProductosCards/AnteojosyProductos/PaloSanto.png'
import AnteojosyProductos27 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Polo.png'
import AnteojosyProductos28 from '../../assets/img/fotosProductosCards/AnteojosyProductos/PourHomme.png'
import AnteojosyProductos29 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Prada.png'
import AnteojosyProductos30 from '../../assets/img/fotosProductosCards/AnteojosyProductos/PureAdrenaline.png'
import AnteojosyProductos31 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Rayban.png'
import AnteojosyProductos32 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Rusty.png'
import AnteojosyProductos33 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Sarkany.png'
import AnteojosyProductos34 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Serengeti.png'
import AnteojosyProductos35 from '../../assets/img/fotosProductosCards/AnteojosyProductos/SophiaLoren.png'
import AnteojosyProductos36 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Stetson.png'
import AnteojosyProductos37 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Travesuras.png'
import AnteojosyProductos38 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Uomo.png'
import AnteojosyProductos39 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Vairo.png'
import AnteojosyProductos40 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Versace.png'
import AnteojosyProductos41 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Vogue.png'
import AnteojosyProductos42 from '../../assets/img/fotosProductosCards/AnteojosyProductos/Vulk.png'



const images = [
  { src: AnteojosyProductos1, link: 'https://www.hugedomains.com/domain_profile.cfm?d=interoptica.net' },
  { src: AnteojosyProductos2, link: 'https://www.adrianacostantini.com.ar/' },
  { src: AnteojosyProductos3, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos4, link: 'https://www.facebook.com/profile.php?id=100063534883269&sk=about' },
  { src: AnteojosyProductos5, link: '#' },
  { src: AnteojosyProductos6, link: '#' },
  { src: AnteojosyProductos7, link: 'https://aynotdead.com' },
  { src: AnteojosyProductos8, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos9, link: 'http://acosargentina.com.ar/' },
  { src: AnteojosyProductos10, link: 'https://www.bolle.com/' },
  { src: AnteojosyProductos11, link: 'https://www.bulgari.com/en-hu/' },
  { src: AnteojosyProductos12, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos12b, link: 'https://www.cebe.com/en/' },
  { src: AnteojosyProductos13, link: 'https://www.dolcegabbana.com/es/' },
  { src: AnteojosyProductos14, link: '#' },
  { src: AnteojosyProductos15, link: 'https://www.dropcatch.com/domain/interoptica.net' },
  { src: AnteojosyProductos16, link: 'http://www.armani.com.ar/' },
  { src: AnteojosyProductos17, link: 'https://www.fleur.com.ar/' },
  { src: AnteojosyProductos18, link: 'https://infinit.la/' },
  { src: AnteojosyProductos19, link: '#' },
  { src: AnteojosyProductos20, link: '#' },
  { src: AnteojosyProductos21, link: 'https://www.huggers.com.ar/' },
  { src: AnteojosyProductos22, link: 'http://www.monkeygrove.com/' },
  { src: AnteojosyProductos23, link: 'https://www.facebook.com/p/Optica-Cima-100063858857657/' },
  { src: AnteojosyProductos24, link: 'http://www.optovision.com.ar/oves/' },
  { src: AnteojosyProductos25, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos26, link: 'https://www.palosantoargentina.com.ar/' },
  { src: AnteojosyProductos27, link: 'https://www.ralphlauren.eu/hu/en?ab=Geo_iHU_rUS_dEU&locale=en_HU' },
  { src: AnteojosyProductos28, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos29, link: 'https://www.prada.com/eu/en.html' },
  { src: AnteojosyProductos30, link: '#' },
  { src: AnteojosyProductos31, link: 'https://www.ray-ban.com/row' },
  { src: AnteojosyProductos32, link: 'https://rusty.com.au/' },
  { src: AnteojosyProductos33, link: 'https://www.rickysarkany.com/' },
  { src: AnteojosyProductos34, link: 'https://www.serengeti-eyewear.com/' },
  { src: AnteojosyProductos35, link: 'https://www.zyloware.com/catalog/sophia-loren' },
  { src: AnteojosyProductos36, link: 'https://www.zyloware.com/catalog/stetson' },
  { src: AnteojosyProductos37, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos38, link: 'http://www.optiway.com.ar/' },
  { src: AnteojosyProductos39, link: 'https://vairo.com/' },
  { src: AnteojosyProductos40, link: 'https://www.versace.com/hu/en/' },
  { src: AnteojosyProductos41, link: 'https://www.vogue-eyewear.com/hu' },
  { src: AnteojosyProductos42, link: 'https://vulkeyewear.com/' },
];





const CardsProductos = () => {
  const cardStyle = {
    width: '12rem',
    margin: '1rem 4rem'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '4rem',
    marginTop: "5rem",
    color: '#0060A8',
  };

  const underlineStyle = {
    borderBottom: '3px solid #FFA51F',
    paddingBottom: '10px',
    textDecoration: 'none',
  };

  return (
    <div>
      <div style={titleStyle}>
        <span style={underlineStyle}>Anteojos para sol / Armazones</span>
      </div>
      <Row xs={1} md={4} className="g-4" style={{ margin: '0 4rem' }}>
        {images.map((item, index) => (
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
  );
};

export default CardsProductos;


