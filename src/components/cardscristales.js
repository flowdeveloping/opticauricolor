import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CristalesyTratamientos1 from "../assets/img/fotosProductosCards/cristalesytratamientos/amplitude.png";
import CristalesyTratamientos2 from "../assets/img/fotosProductosCards/cristalesytratamientos/blueblockglasses.png";
import CristalesyTratamientos3 from "../assets/img/fotosProductosCards/cristalesytratamientos/futurex.png";
import CristalesyTratamientos4 from "../assets/img/fotosProductosCards/cristalesytratamientos/hoya.png";
import CristalesyTratamientos5 from "../assets/img/fotosProductosCards/cristalesytratamientos/kodak.png";
import CristalesyTratamientos6 from "../assets/img/fotosProductosCards/cristalesytratamientos/rodenstock.png";
import CristalesyTratamientos7 from "../assets/img/fotosProductosCards/cristalesytratamientos/Sedna.png";
import CristalesyTratamientos8 from "../assets/img/fotosProductosCards/cristalesytratamientos/Transitions.png";
import CristalesyTratamientos9 from "../assets/img/fotosProductosCards/cristalesytratamientos/Varilux.png";
import CristalesyTratamientos10 from "../assets/img/fotosProductosCards/cristalesytratamientos/Vitolen.png";
import CristalesyTratamientos11 from "../assets/img/fotosProductosCards/cristalesytratamientos/Zeiss.png";

const images = [
    {
      src: CristalesyTratamientos1,
      link: "https://www.facebook.com/amplitudevision/",
    },
    {
      src: CristalesyTratamientos2,
      link: "https://blueblockerglasses.com/",
    },
    {
      src: CristalesyTratamientos3,
      link: "http://iltoptics.com/",
    },
    {
        src: CristalesyTratamientos4,
        link: "#",
      },
      {
        src: CristalesyTratamientos5,
        link: "#",
      },
      {
        src: CristalesyTratamientos6,
        link: "https://www.rodenstock.com/com/en/index.html",
      },
      {
        src: CristalesyTratamientos7,
        link: "http://www.vitolen.com/",
      },
      {
        src: CristalesyTratamientos8,
        link: "https://www.transitions.com/hu/",
      },
      {
        src: CristalesyTratamientos9,
        link: "https://global.essilor.com/ar/",
      },
      {
        src: CristalesyTratamientos10,
        link: "http://www.vitolen.com/",
      },
      {
        src: CristalesyTratamientos11,
        link: "#",
      }
    
  ];
  

  
function cardscristales() {
  const cardStyle = {
    width: "12rem",
    margin: '1rem 4rem',
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "4rem",
    marginTop: "5rem",
    textDecoration: "underline",
  };
  return (
    <div>
      <div style={titleStyle}>Cristales y tratamientos</div>
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
}

export default cardscristales;
